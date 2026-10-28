import { defineAction } from "astro:actions";
import { z } from "astro/zod";


export const server = {
    newsletter: defineAction({
        input: z.object({
            email: z.string()
        }),
        handler: async (input, context)=>{
            //guardar email en la BD
            console.log("Email guardado")

            return{
                success: true,
                message: "Te has suscrito, OK"
            }
        }
    })
}