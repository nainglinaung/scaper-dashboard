import { z } from "zod"


export const keywordSchema = z.object({
    name: z.string().min(3),
})