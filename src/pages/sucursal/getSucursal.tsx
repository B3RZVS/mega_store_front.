import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import Style from "../../components/categorias/TodasCategorias/todasCategorias.module.css"
import { useEffect, useState } from 'react';

interface Data {
  id: number;
  nombre: string;
  fechaEliminacion:Date ;
}
export default function CheckboxList() {

  const [data, setData] =useState<Data[]>([]);

  //GET
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:8080/products/sucursales');
      const jsonData = await response.json();
      //console.log(jsonData);
      setData(jsonData.data); 
    };

    fetchData();
    
  }, []);


  return (

    <List className={Style.list}>

      {(data ?? [1,2,3]).map ((sucursal, idx) => {

        const labelId = `checkbox-list-label-${idx}`;

        return (
          <ListItem
            key={idx}
            disablePadding
            className={Style.contCategorias}
          > 
              <ListItemText id={labelId} primary={`${sucursal.nombre}`} className={Style.item}/>
          </ListItem>
        );
      })}
    </List>
  );
}