import React, { useState } from 'react';
//Importación de estilos
import style from "./registrarCategoria.module.css";
//Importación de los iconos utilizados desde mui
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
//Importación de lo necesario para utilizar zod para validaciones
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
//Importación del esquema de validaciones de categoría
import { validationsCategoria } from './validationsCategoria';
import ListaCategoria from '../../components/categorias/getCategoria'

// Definición de los tipos que se esperan en el formulario
type Inputs = {
  nombre: string;
};

const RegistrarCategoria: React.FC = () => {
  // Configuramos el hook useForm, integrando las validaciones de Zod
  const { 
    register,
    reset,
    setError, // Función para registrar los campos del formulario y sus validaciones
    handleSubmit, // Función que maneja el evento de envío del formulario
    formState: { errors } // Objeto que contiene el estado del formulario, incluyendo los errores de validación
} = useForm<Inputs>({ // Inicializamos useForm con un tipo genérico 'Inputs' para tipar los datos del formulario
    resolver: zodResolver(validationsCategoria), // Usamos zodResolver para integrar validaciones definidas en el esquema validationsCategoria
});

  const [refresh, setRefresh] = useState(false);
  
  

  // Función que maneja la consulta al back me
  const onSubmit = async (data: Inputs) => {
    try {
      // Enviamos la información al servidor mediante una llamada fetch
      const response = await fetch('http://localhost:8080/products/categoria', {
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
        alert("Categoría registrada con éxito") //mensaje de éxito
        setRefresh(!refresh); //cambia el estado refresh 
      }
    } catch (errors) {
      const message = (errors as Error).message || 'Error desconocido';
      console.error('Error desconocido:', errors);
      alert('Ocurrió un error al registrar la categoría: ' + message);
    }
  };


  return (
    <div className={style.body}>
      <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
        <h3 className={style.title}>Nueva Categoría</h3>
        <div className={style.container}>
          <input 
            className={style.category} 
            type="text" 
            placeholder="Categoría" 
            {...register('nombre')}  // Vinculamos el input a react-hook-form
          />
          {
            errors.nombre?.message && 
            <p className={style.alerts}>{errors.nombre.message}</p> // Mostramos el error si existe
          }
        </div>
        <button className={style.button} type="submit">
          <ArrowForwardIcon />Registrar
        </button>
      </form>
      <ListaCategoria refresh={refresh}></ListaCategoria>
    </div>
  );
};

export default RegistrarCategoria;


