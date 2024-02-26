"use client";

import React, { FC } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { formApplySchema } from "@/lib/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import UploadField from "../UploadField";
import { useSession } from "next-auth/react";
import { supabaseUploadImg } from "@/lib/supabase";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

interface FormModalApplyProps {
  image: string;
  roles: string | undefined;
  location: string | undefined;
  jobType: string | undefined;
  id: string;
  isApplied: number;
}

const FormModalApply: FC<FormModalApplyProps> = ({
  image,
  roles,
  location,
  jobType,
  id,
  isApplied,
}) => {
  const { data: session } = useSession();
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<z.infer<typeof formApplySchema>>({
    resolver: zodResolver(formApplySchema),
  });

  const onSubmit = async (values: z.infer<typeof formApplySchema>) => {
    try {
      const { fileName, error } = await supabaseUploadImg(
        values.resume,
        "applicant"
      );

      const reqData = {
        userId: session?.user.id,
        jobId: id,
        resume: fileName,
        coverLetter: values.coverLetter,
        linkedIn: values.linkedIn,
        phone: values.phone,
        portofolio: values.portofolio,
        previousJobTitle: values.previousJobTitle,
      };

      if (error) {
        throw "Error";
      }

      await fetch("/api/job/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reqData),
      });

      await toast({
        title: "Success",
        description: "Job Application Succeed",
      });

      router.replace("/");
    } catch (error) {
      console.log(error);
      toast({
        title: "Error",
        description: "Please try again",
      });
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {session && isApplied > 0 ? (
          <Button size="lg" variant="outline" disabled>
            You Already Applied
          </Button>
        ) : session ? (
          <Button size="lg" className="text-lg px-12 py-6 rounded-none">
            Apply
          </Button>
        ) : (
          <Button size="lg" variant="outline" disabled>
            Sign In to Apply
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <div>
          <div className="inline-flex items-center gap-4">
            <div>
              <Image
                src={image}
                alt={image}
                width={60}
                height={60}
                unoptimized
              />
            </div>
            <div>
              <div className="text-lg font-semibold">{roles}</div>
              <div className="text-gray-500">
                {location} . {jobType}
              </div>
            </div>
          </div>
          <Separator className="my-5" />
          <div className="mb-5">
            <div className="font-semibold text-lg">Submit your application</div>
            <div className="text-gray-500 text-sm mt-2">
              The following is required and will only be shared with Nomad
            </div>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl className="rounded-none">
                        <Input placeholder="Enter your full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl className="rounded-none">
                        <Input placeholder="Enter your email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl className="rounded-none">
                        <Input
                          placeholder="Enter your phone number"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="previousJobTitle"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Current or previous job title</FormLabel>
                      <FormControl className="rounded-none">
                        <Input
                          placeholder="What's your current or previous job title"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Separator />
              <div className="font-semibold">LINKS</div>
              <div className="grid grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="linkedIn"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>LinkedIn URL</FormLabel>
                      <FormControl className="rounded-none">
                        <Input
                          placeholder="Link to your LinkedIn URL"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="portofolio"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Portofolio URL</FormLabel>
                      <FormControl className="rounded-none">
                        <Input
                          placeholder="Link to your portofolio URL"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="coverLetter"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Additional Information</FormLabel>
                    <FormControl className="rounded-none">
                      <Textarea
                        placeholder="Add a cover letter or anything else you want to share"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <UploadField form={form} />

              <Button className="w-full">Apply</Button>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FormModalApply;
