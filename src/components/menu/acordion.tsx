import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';


export default function AccordionUsage() {
  const entidades = [
    {"nombre": "Marca"},
    {"nombre": "Sucursal"},
    {"nombre": "Color"},
    {"nombre": "Talle"},
  ]
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
          <Button> {entidad.nombre}</Button>
          </AccordionDetails>
        ))}
        
      </Accordion>
    </div>
  );
}
