import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function AccordionUsage() {
  const entidades = [
    {"nombre": "Marca", "ruta": "/registrarMarca"},
    {"nombre": "Sucursal", "ruta": "/menu"},
    {"nombre": "Color", "ruta": "/menu"},
    {"nombre": "Talle", "ruta": "/menu"},
  ]
  const navigate = useNavigate(); // Hook para navegar a otras rutas
  
  const handleNavigation = (ruta: string) => {
    navigate(ruta); // Navegar a la ruta especificada
  };

  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Registrar
        </AccordionSummary>
        {entidades.map((entidad,idx)=>(
          
          <AccordionDetails key={idx}>
            <Button onClick={() => handleNavigation(entidad.ruta)}>
            {entidad.nombre}
            </Button>
          </AccordionDetails>
        ))}
        
      </Accordion>
    </div>
  );
}
