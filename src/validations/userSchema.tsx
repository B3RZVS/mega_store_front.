import {z} from 'zod'
//usamos esto para comparar lo que nos ingresen en cada campo del form
export const userSchema=z.object({
    marca:z
    .string()
    .max(200,{message:'Marca no debe superar los 200 caracteres'})
    .min(1, { message: 'Marca no puede estar vacío.' })
    .regex(/^[a-zA-Z\s]+$/, { message: 'Marca solo debe contener letras y espacios.' }) ,
    descripcion:z
    .string()
    .max(300,{message:"La descripción no debe superar los 300 caracteres"})
    
});
 

