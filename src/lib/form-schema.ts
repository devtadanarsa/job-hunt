import { z } from "zod";

export const formFilterSchema = z.object({
  categories: z.array(z.string()),
});

export const formFilterCompanySchema = z.object({
  industry: z.array(z.string()),
});

export const formApplySchema = z.object({
  resume: z
    .any()
    .refine((file: any) => file?.name, "Please uplaod your resume"),
  fullName: z
    .string({ required_error: "Full name is required" })
    .min(5, { message: "Full name have minimum of 5 characters" }),
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Email is not valid" }),
  phone: z.string().min(6, { message: "Phone have minimum of 5 characters" }),
  previousJobTitle: z.string(),
  linkedIn: z.string(),
  portofolio: z.string(),
  coverLetter: z.string(),
});

export const formSignInSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Email is not valid" }),
  password: z.string({ required_error: "Password is required" }),
});

export const formSignUpSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Email is not valid" }),
  password: z.string({ required_error: "Password is required" }),
  name: z
    .string({ required_error: "Name is required" })
    .min(3, { message: "Name should have at least 3 characters" }),
});
