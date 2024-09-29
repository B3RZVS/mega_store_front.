import React from 'react';
//Importación de los estilos
import style from "./registrarSucursal.module.css";
//Importación de los íconos utilizados desde mui
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
//Importación de lo necesario para utilizar zod para validaciones
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
//Importación del esquema de validaciones de sucursal
import { validationsSucursal } from './validationsSucursal';

//Definición de los tipos de datos que va a recibir el formulario
type Inputs={
    sucursal:string;
    descripcion:string;
}

const RegistrarSucursal: React.FC = () => {
    const { 
        register, // Función para registrar los campos del formulario y sus validaciones
        handleSubmit, // Función que maneja el evento de envío del formulario
        formState: { errors } // Objeto que contiene el estado del formulario, incluyendo los errores de validación
    } = useForm<Inputs>({ // Inicializamos useForm con un tipo genérico 'Inputs' para tipar los datos del formulario
        resolver: zodResolver(validationsSucursal), // Usamos zodResolver para integrar validaciones definidas en el esquema validationsSucursal
    });
    console.log(errors) //para ver los errores de validación por consola
    
    return (
        <div className={style.body}>
           <form className= {style.form} onSubmit={handleSubmit(data=>{console.log(data)})}>
                <h3 className={style.title}>Registrar Sucursal</h3>
                <div className={style.container}>
                    <input className={style.store} type="text" placeholder="Sucursal" {...register('sucursal')} />
                    {
                    errors.sucursal?.message &&<p className={style.alerts}>{errors.sucursal?.message}</p> //si hay errores, los muestra por pantalla
                    }  
                </div> 
                <div className={style.container}>
                <input className={style.store} type="text" placeholder="Descripción" {...register('descripcion')} />
                    {
                    errors.descripcion?.message &&<p className={style.alerts}>{errors.descripcion?.message}</p> //si hay errores los muestra por pantalla
                    }
                
                </div>
                <button className={style.button} type="submit" >< ArrowForwardIcon />Registrar</button>   
            </form>
        </div>
    );
};
export default RegistrarSucursal;
