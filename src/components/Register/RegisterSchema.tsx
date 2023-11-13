import { z } from 'zod';

export const guestRegisterSchema = z.object({
    name: z
    .string({
        required_error: 'O nome é obrigatório',
      })
    .min(2, 'O nome deve contar no minimo 2 caracteres'),

    country_code: z
    .string()
    .max(4),

    contact_info: z
    .string()
    .max(16, 'O telefone deve conter no maximo 16 digitos'),

    document_type: z
    .string({
        required_error: 'O tipo de documento é obrigatório',
    }),

    document_number: z
    .string({
        required_error: 'O documento é obrigatorio',
    }),

    username: z
    .string()
    .min(1,'O email é obrigatorio')
    .email('Forneça um email valido'),

    password: z
    .string()
    .min(8,'A senha deve conter ao menos 8 caracteres' )
    .regex(/(?=.*?[A-Z])/, 'A senha deve conter ao menos uma letra maiuscula')
    .regex(/(?=.*?[a-z])/, 'A senha deve conter ao menos uma letra minuscula')
    .regex(/(?=.*?[0-9])/, 'A senha deve conter ao menos um numero')
    .regex(/(?=.*[@!#$%^&*()/\\])/, 'A senha deve conter ao menos um caracter especial'),

    confirmPassword: z
    .string()
    .min(1,'A senha deve conter ao menos 8 caracteres'),
    

}).partial().refine(({password, confirmPassword}) => password === confirmPassword,{
    message:'As senhas precisam ser iguais',
    path:['confirmPassword']
})

export type TGuestRegisterSchema = z.infer<typeof guestRegisterSchema>;