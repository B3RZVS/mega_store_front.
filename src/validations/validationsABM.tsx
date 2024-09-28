import {z} from 'zod'
//usamos esto para comparar lo que nos ingresen en cada campo del form
export const validationsABM=z.object({
    marca:z
    .string()
    .trim() // Eliminar espacios en blanco al inicio y al final
    .max(200,{message:'Marca no debe superar los 200 caracteres'})
    .min(2, { message: 'Marca no puede estar vacío.' })
    .regex(/^[a-zA-Z0-9\s]+$/, { message: 'La marca solo debe contener letras, números y espacios.' })
    .regex(/^(?!.*\s{2,}).*$/, {
        message: "La cadena no puede contener espacios consecutivos"
      }),
    descripcion:z
    .string()
    .min(2,{message:"La descripción no puede tener menos de dos caracteres"})
    .max(300,{message:"La descripción no debe superar los 300 caracteres"}),
    sucursal:z
    .string()
    .max(200,{message:'Sucursal no debe superar los 200 caracteres'})
    .min(2, { message: 'Sucursal no puede estar vacío.' })
    .regex(/^[a-zA-Z0-9\s]+$/, { message: 'Sucursal solo debe contener letras, números y espacios.' })
    .regex(/^(?!.*\s{2,}).*$/, {
        message: "Sucursal no puede contener espacios consecutivos"
      })
    .trim(), // Eliminar espacios en blanco al inicio y al final
    talle:z
    .string()
    .trim() // Eliminar espacios en blanco al inicio y al final
    .max(200,{message:'Talle no debe superar los 200 caracteres'})
    .min(2, { message: 'Talle no puede estar vacío.' })
    .regex(/^[a-zA-Z0-9\s]+$/, { message: 'Talle solo debe contener letras, números y espacios.' })
    .regex(/^(?!.*\s{2,}).*$/, {
        message: "Talle no puede contener espacios consecutivos"
      }),
    color:z
      .string()
      .trim() // Eliminar espacios en blanco al inicio y al final
      .max(200,{message:'Color no debe superar los 200 caracteres'})
      .min(2, { message: 'Color no puede estar vacío.' })
      .regex(/^[a-zA-Z0-9\s]+$/, { message: 'Color solo debe contener letras, números y espacios.' })
      .regex(/^(?!.*\s{2,}).*$/, {
          message: "Color no puede contener espacios consecutivos"
        }),
      categoria:z
      .string()
      .trim() // Eliminar espacios en blanco al inicio y al final
      .max(200,{message:'Categoría no debe superar los 200 caracteres'})
      .min(2, { message: 'Categoría no puede estar vacío.' })
      .regex(/^[a-zA-Z0-9\s]+$/, { message: 'Categoría solo debe contener letras, números y espacios.' })
      .regex(/^(?!.*\s{2,}).*$/, {
          message: "Categoría no puede contener espacios consecutivos"
        }),



});
 

