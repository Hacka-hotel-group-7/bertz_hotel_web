import { z } from 'zod'

export const LoginSchema = z.object({
    username: z.string().email({ message: 'Email inválido' }),
    password: z.string().min(6, { message: 'Senha é obrigatória' })
})

export type TLogin = z.infer<typeof LoginSchema>