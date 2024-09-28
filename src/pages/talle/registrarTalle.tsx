import React from 'react';
import style from "./registrarTalle.module.css";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import { validationsABM } from '../../validations/validationsABM';




{/*Pantalla ABM marca */}
type Inputs={
    talle:string;
    
}



const RegistrarTalle: React.FC = () => {
    const {register, handleSubmit, formState: {errors}}=useForm<Inputs>({
        resolver:zodResolver(validationsABM),
    });

    console.log(errors)
    
    return (
        <div className={style.body}>
          <form className= {style.form} onSubmit={handleSubmit(data=>{console.log(data)})}>
                <h3 className={style.title}>Registrar Talle</h3> 
                <div className={style.container}>
                <input className={style.size} type="text" placeholder="Talle" {...register('talle')} />
                {
                errors.talle?.message &&<p className={style.alerts}>{errors.talle?.message}</p>
                }
                </div>
                <button className={style.button} type="submit" >< ArrowForwardIcon />Registrar</button>       
            </form>
        </div>
    );
    

};
export default RegistrarTalle;

 
