import z, { email } from "zod";

export const UserFormValidation = z.object({
    name: z.string()
        .min(2, "name must be at least 2 characters.")
        .max(50, 'name must be at most 50 characters.'),
    email: z.email('invalid email address'),
    phone: z.string().refine((phone)=> /^\+?[1-9]\d{1,14}$/.test(phone), 'phone must be at least 10 characters.')
})
