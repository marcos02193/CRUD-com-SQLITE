import {z} from "zod"

export const createuserschemas = z.object({
    name: z.string().min(3,"o nome deve ter pelo menos 3 caractere"),
    email: z.string().email("mail invalido"),
    password: z.string().min(6).regex(/[A-Za-z]/)
})

export const updateuserSchema = z.object({
    name: z.string().min(3, "O nome deve ter pelo menos 3 chars").optional(),
    email: z.string().email("Email Inválido").optional(),
    password: z.string()
        .min(6, "A senha deve ter pelo menos 6 chars")
        .regex(/[A-Z]/, 
            "A senha deve ter pelo menos uma letra maíscula").optional()

})

export const loginschema = z.object({
    email: z.string().email("email invalido. "),
    password: z.string().min(1, "a senha precisa ter mais de 1 caracteris")
})