import React from 'react';
{/*Importación de estilos*/}
import style from "./registrarCategoria.module.css";
{/*importación de iconos desde mui */}
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

//importación de componentes usados para las validaciones 
// Importacón del hook useForm de React Hook Form, que permite manejar formularios
import { useForm } from 'react-hook-form';

// Importación de zodResolver, que conecta Zod con React Hook Form para validar los datos del formulario
import { zodResolver } from '@hookform/resolvers/zod';

// Importación del esquema de validación userSchema definido en un archivo separado
import {validationsABM} from '../../validations/validationsABM';


{/*Pantalla ABM Color */}

type Inputs={  // Definimos que color es un campo de texto, y es lo que se va a esperar en el form
    categoria:string;
}


const RegistrarCategoria: React.FC = () => {
    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm<Inputs>({
        resolver: zodResolver(validationsABM),
    });
    return (
        <div className={style.body}> 
           <form className= {style.form}  >
                <h3 className={style.title}>Registrar Categoría</h3> 
                <div className={style.container}>
                    <input className={style.category} type="text" placeholder="Categoría" {...register('categoria')} /> {/** Usamos la función 'register' para vincular este campo al formulario y habilitar su validación*/} 
                    {
                    errors.categoria?.message && <p className={style.alerts}>{errors.categoria?.message}</p> /*// Verificamos si hay un mensaje de error asociado al campo 'color', si lo hay mostramos el mensaje */
                    } 
                </div>
                <button className={style.button} type="submit"  >< ArrowForwardIcon />Registrar</button>       
            </form>
        </div>
    
    );  

};
export default RegistrarCategoria;

 


