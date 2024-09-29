import {z} from 'zod'
export const validationsColor=z.object({
    //definimos las validaciones para color
    color:z
      .string()
      .trim() // Eliminar espacios en blanco al inicio y al final
      .min(3, { message: 'Color debe tener al menos 3 caracteres.' })
      .regex(/^[a-zA-Z0-9\s]+$/, { message: 'Color no puede contener caracteres especiales.' })
      .regex(/^(?!.*\s{2,}).*$/, {
          message: "Color no puede contener espacios consecutivos"
      }),
});