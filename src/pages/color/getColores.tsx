import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Style from '../../components/categorias/todasCategorias.module.css';
import { useEffect, useState } from 'react';

interface Data {
  id: number;
  nombre: string;
  fechaEliminacion:Date ;
}
export default function CheckboxList({ refresh }: { refresh: boolean }) {

  const [data, setData] =useState<Data[]>([]);

  //GET
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:8080/products/colores');
      const jsonData = await response.json();
      //console.log(jsonData);
      setData(jsonData.data); 
    };
    fetchData();
    
  }, [refresh]);


  return (

    <List className={Style.list}>

      {(data ?? [1,2,3]).map ((color, idx) => {

        const labelId = `checkbox-list-label-${idx}`;

        return (
        <div className={Style.container}>
          <ListItem
            key={idx}
            disablePadding
            className={Style.contCategorias}
            
          > 
              <ListItemText id={labelId} primary={`${color.nombre}`} className={Style.item}  />
          </ListItem >
          </div>
          
        );
      })}
    </List>
  
  );
  
}