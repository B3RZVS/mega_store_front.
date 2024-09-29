import {z} from 'zod'
export const validationsTalle=z.object({
  //definimos las validaciones para talle
    nombre:z
      .string()
      .trim() // Eliminar espacios en blanco al inicio y al final
      .min(3, { message: 'Talle debe tener más de 3 caracteres.' })
      .regex(/^[a-zA-Z0-9\s]+$/, { message: 'Talle no puede contener caracteres especiales.' })
      .regex(/^(?!.*\s{2,}).*$/, {
          message: "Talle no puede contener espacios consecutivos"
      }),
    }); 