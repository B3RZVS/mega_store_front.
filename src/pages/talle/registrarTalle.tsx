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

//Componete Get talles
import ListaTalles from "./getTalles"

//definimos los tipos que va a recibir el formulario
type Inputs={
    nombre:string;
    
}

const RegistrarTalle: React.FC = () => {
    const { 
        register, // Función para registrar los campos del formulario y sus validaciones
        handleSubmit, // Función que maneja el evento de envío del formulario
        formState: { errors } // Objeto que contiene el estado del formulario, incluyendo los errores de validación
    } = useForm<Inputs>({ // Inicializamos useForm con un tipo genérico 'Inputs' para tipar los datos del formulario
        resolver: zodResolver(validationsTalle), // Usamos zodResolver para integrar validaciones definidas en el esquema validationsTalle
    });

    // Función que maneja la consulta al back me
  const onSubmit = async (data: Inputs) => {
    try {
      // Enviamos la información al servidor mediante una llamada fetch
      const response = await fetch('http://localhost:8080/products/talle', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), //convertimos los datos recibidos en .json
      });

      if (!response.ok) { //si hay un error
        throw new Error('Error al registrar el talle: ' + response.statusText);
      }

      const result = await response.json();
      console.log('Talle registrada con éxito:', result);
    } catch (error) {
      const message = (error as Error).message || 'Error desconocido';
      console.error('Error desconocido:', error);
      alert('Ocurrió un error al registrar el talle: ' + message);
    }
  };
    
    return (
        <div className={style.body}>
          <form className= {style.form} onSubmit={handleSubmit(onSubmit)}>
                <h3 className={style.title}>Registrar Talle</h3> 
                <div className={style.container}>
                <input className={style.size} type="text" placeholder="Talle" {...register('nombre')} />
                {
                errors.nombre?.message &&<p className={style.alerts}>{errors.nombre?.message}</p> //si hay errores los muestra por pantalla
                }
                </div>
                <button className={style.button} type="submit" >< ArrowForwardIcon />Registrar</button>       
            </form>
            <ListaTalles></ListaTalles>
        </div>
    );
};
export default RegistrarTalle;

 
