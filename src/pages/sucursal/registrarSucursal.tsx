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

//Get de sucursales
import ListaSucursales from './getSucursal'

//Definición de los tipos de datos que va a recibir el formulario
type Inputs={
    nombre:string;
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
    
    // Función que maneja la consulta al back me
  const onSubmit = async (data: Inputs) => {
    try {
      // Enviamos la información al servidor mediante una llamada fetch
      const response = await fetch('http://localhost:8080/products/sucursal', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), //convertimos los datos recibidos en .json
      });

      if (!response.ok) { //si hay un error
        throw new Error('Error al registrar la sucursal: ' + response.statusText);
      }

      const result = await response.json();
      console.log('Sucursal registrada con éxito:', result);
    } catch (error) {
      const message = (error as Error).message || 'Error desconocido';
      console.error('Error desconocido:', error);
      alert('Ocurrió un error al registrar la sucursal: ' + message);
    }
  };
    
    return (
        <div className={style.body}>
           <form className= {style.form} onSubmit={handleSubmit(onSubmit)}>
                <h3 className={style.title}>Registrar Sucursal</h3>
                <div className={style.container}>
                    <input className={style.store} type="text" placeholder="Sucursal" {...register('nombre')} />
                    {
                    errors.nombre?.message &&<p className={style.alerts}>{errors.nombre?.message}</p> //si hay errores, los muestra por pantalla
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
            <ListaSucursales></ListaSucursales>
        </div>
    );
};
export default RegistrarSucursal;
