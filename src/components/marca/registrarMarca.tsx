import React from 'react';
import "./registrarMarca.css";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export const RegistrarMarca: React.FC = () => {
    return (
        <div className="pantalla">
            <h2 className="titulo">Registrar marca</h2>
            <button>
                <ArrowBackIosIcon />  {/* Agrega el ícono dentro del botón */}
            </button>
               
            <form>
                <input className="marca" type="text" placeholder="Marca" />
                <br />
                <input className="descripcion" type="text" placeholder="Descripción" />
                <br />
                <div className="botones">
                    <button className="boton" type="submit">Registrar</button>
                    <button className="boton" type="button">Ver marcas</button>
                </div>
                
            </form>
        </div>
    );
};