import * as z from "zod";

export const LoginValidationSchema = z.object({
  username: z.string().min(1, "Username is required").max(20),
  password: z.string().min(1, "Password is required").max(30),
});

export type LoginValidationZodSchema = z.infer<typeof LoginValidationSchema>;
