import React from 'react';
{/*Importación de estilos*/}
import style from "./registrarColor.module.css";
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
    color:string;
}



const RegistrarColor: React.FC = () => {
    const { 
        register, // Función para registrar los campos del formulario y sus validaciones
        handleSubmit, // Función que maneja el evento de envío del formulario
        formState: { errors } // Objeto que contiene el estado del formulario, incluyendo los errores de validación
    } = useForm<Inputs>({ // Inicializamos useForm con un tipo genérico 'Inputs' para tipar los datos del formulario
        resolver: zodResolver(validationsABM), // Usamos zodResolver para integrar validaciones definidas en el esquema 'userSchema'
    });

    console.log(errors)
    
    return (
        <div className={style.body}> 
           <form className= {style.form} onSubmit={handleSubmit(data=>{console.log(data)})}>
                <h3 className={style.title}>Registrar Color</h3> 
                <div className={style.container}>
                    <input className={style.color} type="text" placeholder="Color" {...register('color')} /> {/** Usamos la función 'register' para vincular este campo al formulario y habilitar su validación*/} 
                    {
                    errors.color?.message && <p className={style.alerts}>{errors.color?.message}</p> /*// Verificamos si hay un mensaje de error asociado al campo 'color', si lo hay mostramos el mensaje */
                    } 
                </div>
                <button className={style.button} type="submit" >< ArrowForwardIcon />Registrar</button>       
            </form>
        </div>
    
    );  

};
export default RegistrarColor;

 
