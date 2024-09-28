import React from 'react';
import style from "./registrarSucursal.module.css";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import { validationsABM } from '../../validations/validationsABM';




{/*Pantalla ABM marca */}
type Inputs={
    sucursal:string;
    descripcion:string;
}



const RegistrarSucursal: React.FC = () => {
    const {register, handleSubmit, formState: {errors}}=useForm<Inputs>({
        resolver:zodResolver(validationsABM),
    });

    console.log(errors)
    
    return (
        <div className={style.body}>
           <form className= {style.form} onSubmit={handleSubmit(data=>{console.log(data)})}>
                <h3 className={style.title}>Registrar Sucursal</h3>
                <div className={style.container}>
                    <input className={style.store} type="text" placeholder="Sucursal" {...register('sucursal')} />
                    {
                    errors.sucursal?.message &&<p className={style.alerts}>{errors.sucursal?.message}</p>
                    }  
                </div>
                
                <div className={style.container}>
                <input className={style.store} type="text" placeholder="Descripción" {...register('descripcion')} />
                    {
                    errors.descripcion?.message &&<p className={style.alerts}>{errors.descripcion?.message}</p>
                    }
                
                </div>
                <button className={style.button} type="submit" >< ArrowForwardIcon />Registrar</button>   
               
            </form>
        </div>
   
    
    );
    

};
export default RegistrarSucursal;
