import React from 'react';
//importamos los estilos
import style from "./registrarTalle.module.css";
//importamos los iconos utilizados desde mui
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
//importamos lo necesario para usar zod para validaciones
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
//importamos el esquema de validaciones de talle
import { validationsTalle } from './validationsTalle'

//definimos los tipos que va a recibir el formulario
type Inputs={
    talle:string;
    
}

const RegistrarTalle: React.FC = () => {
    const { 
        register, // Función para registrar los campos del formulario y sus validaciones
        handleSubmit, // Función que maneja el evento de envío del formulario
        formState: { errors } // Objeto que contiene el estado del formulario, incluyendo los errores de validación
    } = useForm<Inputs>({ // Inicializamos useForm con un tipo genérico 'Inputs' para tipar los datos del formulario
        resolver: zodResolver(validationsTalle), // Usamos zodResolver para integrar validaciones definidas en el esquema validationsTalle
    });

    console.log(errors) //imprimimos los errores por consola
    
    return (
        <div className={style.body}>
          <form className= {style.form} onSubmit={handleSubmit(data=>{console.log(data)})}>
                <h3 className={style.title}>Registrar Talle</h3> 
                <div className={style.container}>
                <input className={style.size} type="text" placeholder="Talle" {...register('talle')} />
                {
                errors.talle?.message &&<p className={style.alerts}>{errors.talle?.message}</p> //si hay errores los muestra por pantalla
                }
                </div>
                <button className={style.button} type="submit" >< ArrowForwardIcon />Registrar</button>       
            </form>
        </div>
    );
};
export default RegistrarTalle;

 
