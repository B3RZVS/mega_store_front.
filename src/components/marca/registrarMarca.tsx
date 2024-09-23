import React from 'react';
import "./registrarMarca.css";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

{/*Pantalla ABM marca */}

export const RegistrarMarca: React.FC = () => {
    return (
        <div className="screen"> {/*Pantalla de administración */}
            <button className="navigation"> < ArrowBackIcon  />  {/* Agrega el ícono dentro del botón */}</button>{/* Botón de navegación */}
            <h2 className="title">REGISTRAR MARCA</h2> 
           <form>
                <input className="brand" type="text" placeholder="Marca" />
                <br />
                <input className="description" type="text" placeholder="Descripción" />
                <br />
                <div className="buttons">
                    <button className="button" type="submit">Registrar</button>
                    <button className="button" type="button">Ver marcas</button>
                </div>              
            </form>
        </div>
    );
};