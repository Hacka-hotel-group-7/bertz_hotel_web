import { z } from 'zod'

export const editUserSchema = z.object({
    name: z.string().optional(),
    username: z.string().email().optional(),
    country_code: z.string().optional(),
    contact_info: z.string().optional(),
    document_type: z.string().optional(),
    document_number: z.string().optional(),
})

export type TEditUserSchema = z.infer<typeof editUserSchema>