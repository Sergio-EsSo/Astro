import { defineAction } from "astro:actions";
import { z } from "astro/zod";
import type { deleteProduct } from "../lib/db";


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
    }),
    productDelete: defineAction({
        input: z.object({
            id: z.number()
        }),
        handler: async (input, context)=>{
            await deleteProduct(input.id)
            return{
                success: true,
                message: "Se ha borrado el producto correctamente"
            }
        }
    })
}