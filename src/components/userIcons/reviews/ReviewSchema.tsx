import { z } from 'zod'

export const reviewSchema = z.object({
    classification: z.number().max(5),
    comments: z.string()
})

export type TReviewSchema = z.infer<typeof reviewSchema>
 