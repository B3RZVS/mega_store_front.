import React from 'react';
//Importación de estilos
import style from "./registrarColor.module.css";
//importación de iconos desde mui
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Importación del hook useForm de React Hook Form, que permite manejar formularios
import { useForm } from 'react-hook-form';

// Importación de zodResolver, que conecta Zod con React Hook Form para validar los datos del formulario
import { zodResolver } from '@hookform/resolvers/zod';

// Importación del esquema de validación para color
import {validationsColor} from './validationsColor';

//Componente del Get de colores
import ListaColores from "./getColores"


//Definición de los tipos de datos que recibirá el formulario
type Inputs={  
    nombre:string;
}

const RegistrarColor: React.FC = () => {
    const { 
        register, // Función para registrar los campos del formulario y sus validaciones
        handleSubmit, // Función que maneja el evento de envío del formulario
        formState: { errors } // Objeto que contiene el estado del formulario, incluyendo los errores de validación
    } = useForm<Inputs>({ // Inicializamos useForm con un tipo genérico 'Inputs' para tipar los datos del formulario
        resolver: zodResolver(validationsColor), // Usamos zodResolver para integrar validaciones definidas en el esquema validationsColor
    });

    //POST
    const onSubmit = async (data: Inputs) => {
        try {
          // Enviamos la información al servidor mediante una llamada fetch
          const response = await fetch('http://localhost:8080/products/color', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data), //convertimos los datos recibidos en .json
          });
    
          if (!response.ok) { //si hay un error
            throw new Error('Error al registrar el color: ' + response.statusText);
          }
    
          const result = await response.json();
          console.log('Color registrada con éxito:', result);
        } catch (error) {
          const message = (error as Error).message || 'Error desconocido';
          console.error('Error desconocido:', error);
          alert('Ocurrió un error al registrar el color: ' + message);
        }
      };
    
    return (
        <div className={style.body}> 
           <form className= {style.form} onSubmit={handleSubmit(onSubmit)}>
                <h3 className={style.title}>Registrar Color</h3> 
                <div className={style.container}>
                    <input className={style.color} type="text" placeholder="Color" {...register('nombre')} /> {/** Usamos la función 'register' para vincular este campo al formulario y habilitar su validación*/} 
                    {
                    errors.nombre?.message && <p className={style.alerts}>{errors.nombre?.message}</p> /*// Verificamos si hay un mensaje de error asociado al campo 'color', si lo hay mostramos el mensaje */
                    } 
                </div>
                <button className={style.button} type="submit" >< ArrowForwardIcon />Registrar</button>       
            </form>
            <ListaColores></ListaColores>
        </div>
    
    );  

}
export default RegistrarColor;

 
