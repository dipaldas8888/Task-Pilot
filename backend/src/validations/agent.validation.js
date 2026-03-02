import { z } from "zod";

export const createAgentSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.email("Invalid email format"),
  mobile: z
    .string()
    .regex(
      /^\+\d{10,15}$/,
      "Mobile must include country code (e.g. +919876543210)",
    ),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const updateAgentSchema = z.object({
  name: z.string().min(2).optional(),
  mobile: z
    .string()
    .regex(/^\+\d{10,15}$/)
    .optional(),
});
