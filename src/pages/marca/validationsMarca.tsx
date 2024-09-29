import {z} from 'zod'
//usamos esto para comparar lo que nos ingresen en cada campo del form
export const validationsMarca=z.object({
marca:z
    
.string()
.trim() // Eliminar espacios en blanco al inicio y al final
.min(3, { message: 'Marca debe tener más de 3 caracteres.' })
.regex(/^[a-zA-Z0-9\s]+$/, { message: 'Marca no puede contener caracteres especiales.' })
.regex(/^(?!.*\s{2,}).*$/, {
    message: "Marca no puede contener espacios consecutivos"
  }),


});