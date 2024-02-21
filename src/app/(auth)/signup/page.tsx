"use client";

import React from "react";
import { Button } from "@/components/ui/button";
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
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { formSignUpSchema } from "@/lib/form-schema";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

const SignUpPage = () => {
  const form = useForm<z.infer<typeof formSignUpSchema>>({
    resolver: zodResolver(formSignUpSchema),
  });

  const { toast } = useToast();
  const router = useRouter();

  const onSubmit = async (values: z.infer<typeof formSignUpSchema>) => {
    try {
      await fetch("/api/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      toast({
        title: "Sucess",
        description: "Account created succesfully",
      });

      router.push("/signin");
    } catch (error) {
      toast({
        title: "Error",
        description: "Please try again",
      });
    }
  };

  return (
    <div>
      <div className="text-3xl text-center font-semibold mb-7">
        Get More Opportunities
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your name" {...field} />
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
                <FormControl>
                  <Input placeholder="Enter your email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">
            Sign Up
          </Button>
        </form>
      </Form>
      <div className="text-gray-500 text-sm mt-6">
        Already have an account?{" "}
        <Link href="/signin" className="text-primary font-medium">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default SignUpPage;
