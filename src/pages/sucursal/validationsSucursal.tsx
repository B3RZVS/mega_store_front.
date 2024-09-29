import {z} from 'zod'
//usamos esto para comparar lo que nos ingresen en cada campo del form
export const validationsSucursal=z.object({
nombre:z
    .string()
    .max(200,{message:'Sucursal no debe superar los 200 caracteres'})
    .min(2, { message: 'Sucursal no puede estar vacío.' })
    .regex(/^[a-zA-Z0-9\s]+$/, { message: 'Sucursal solo debe contener letras, números y espacios.' })
    .regex(/^(?!.*\s{2,}).*$/, {
        message: "Sucursal no puede contener espacios consecutivos"
    })
    .trim(), // Eliminar espacios en blanco al inicio y al final
    descripcion:z
    .string()
    .min(2,{message:"La descripción no puede tener menos de dos caracteres"})
    .max(300,{message:"La descripción no debe superar los 300 caracteres"}),
    });