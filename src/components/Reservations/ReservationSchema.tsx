import { z } from 'zod'

export const reservationSchema = z.object({
    check_in: z.date(),
    total: z.number(),
    bedroom: z.string(),
})

export type TReservationSchema = z.infer<typeof reservationSchema>