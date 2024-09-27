import React from 'react';
import style from "./registrarMarca.module.css";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import { userSchema } from '../../validations/userSchema';
import { useNavigate } from 'react-router-dom';



{/*Pantalla ABM marca */}
type Inputs={
    marca:string;
    descripcion:string;
}



export const RegistrarMarca: React.FC = () => {
    const {register, handleSubmit,watch, formState: {errors}}=useForm<Inputs>({
        resolver:zodResolver(userSchema),
    });

    console.log(errors)
    const navigate = useNavigate(); // Hook para navegar

  // Función para manejar el clic en el botón de la flecha
  const handleBackClick = () => {
    navigate('/menu'); // Redirige a la ruta "/menu", ajusta según la ruta de tu menú
  };
    
    return (
        <div className={style.body}>
        <div className={style.screen}> {/*Pantalla de administración */}
            <button className={style.navigation} onClick={handleBackClick}> < ArrowBackIcon  />  {/* Agrega el ícono dentro del botón */}</button>{/* Botón de navegación */}
            <h2 className={style.title}>REGISTRAR MARCA</h2> 
           <form onSubmit={handleSubmit(data=>{console.log(data)})}>
            <div>
            <input className={style.brand} type="text" placeholder="Marca"
                {...register('marca')} />
                {
                    
                    errors.marca?.message &&<p className={style.alerts}>{errors.marca?.message}</p>
                }

            </div>
                <br />
            <div>
                <input className={style.description} type="text" placeholder="Descripción"
                    {...register('descripcion')} />
                    {
                        errors.descripcion?.message &&<p className={style.alerts}>{errors.descripcion?.message}</p>
                    }
            </div> 
                <br />
                <div className={style.buttons}>
                    <button className={style.button} type="submit">Registrar</button>
                    <button className={style.button} type="button">Ver marcas</button>
                </div>              
            </form>
        </div>
        <div>
            {JSON.stringify(watch(),null,2)} {/*es para ver los errores*/}
        </div>
    </div>
    
    );
    

}

 
