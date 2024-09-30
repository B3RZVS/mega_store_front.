import React, {useState} from 'react';
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
        register,
        reset, // Función para registrar los campos del formulario y sus validaciones
        handleSubmit,
        setError, // Función que maneja el evento de envío del formulario
        formState: { errors } // Objeto que contiene el estado del formulario, incluyendo los errores de validación
    } = useForm<Inputs>({ // Inicializamos useForm con un tipo genérico 'Inputs' para tipar los datos del formulario
        resolver: zodResolver(validationsColor), // Usamos zodResolver para integrar validaciones definidas en el esquema validationsColor
    });
    const [refresh, setRefresh] = useState(false);


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
            const errorData = await response.json(); // Captura la respuesta del error
            console.log(errorData);
    
            if (errorData && errorData.errors) { //si existe un error desde el back
                setError('nombre', { 
                type: 'manual',
                message: errorData.errors,   //recuperamos el atributo errors del json, que es el que contiene el mensaje de error desde el back
              });
              
              alert(errorData.errors); // Muestra el mensaje de error en una alerta
            } else {
              alert('Error desconocido'); //si el error no coincide con ninguno del back, es error desconcido
            }
            return;
          }
          else{ //si no hay errores
            reset() //limpiamos el input
            alert("Color registrado con éxito") //mensaje de éxito
            setRefresh(!refresh); //cambia el estado refresh 
          }
        } catch (errors) {
          const message = (errors as Error).message || 'Error desconocido';
          console.error('Error desconocido:', errors);
          alert('Ocurrió un error al registrar el color: ' + message);
        }
      };
    return (
        <div className={style.body}> 
           <form className= {style.form} onSubmit={handleSubmit(onSubmit)}>
                <h3 className={style.title}>Nuevo Color</h3> 
                <div className={style.container}>
                    <input className={style.color} type="text" placeholder="Color" {...register('nombre')} /> {/** Usamos la función 'register' para vincular este campo al formulario y habilitar su validación*/} 
                    {
                    errors.nombre?.message && <p className={style.alerts}>{errors.nombre?.message}</p> /*// Verificamos si hay un mensaje de error asociado al campo 'color', si lo hay mostramos el mensaje */
                    } 
                </div>
                <button className={style.button} type="submit" >< ArrowForwardIcon />Registrar</button>       
            </form>
            <ListaColores refresh={refresh}></ListaColores>
        </div>
    
    );  

}
export default RegistrarColor;

 
