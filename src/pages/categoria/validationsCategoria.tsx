import {z} from 'zod'
export const validationsCategoria=z.object({ //creamos el objeto z 
    //definimos las validaciones para categoria
    categoria:z
        .string()
        .trim() // Eliminar espacios en blanco al inicio y al final
        .min(3, { message: 'Categoría debe tener al menos 3 caracteres.' })
        .regex(/^[a-zA-Z0-9\s]+$/, { message: 'Categoría no puede contener caracteres especiales.' })
        .regex(/^(?!.*\s{2,}).*$/, {
            message: "Categoría no puede contener espacios consecutivos"
        }),
});

 

