import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Style from "./todasCategorias.module.css"
import { useEffect, useState } from 'react';

interface Data {
  id: number;
  nombre: string;
  fechaEliminacion:Date ;
}
export default function CheckboxList() {
  const [checked, setChecked] = React.useState([0]);
  const [data, setData] =useState<Data[]>([]);

  //GET
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:9090/products/categorias');
      const jsonData: Data[] = await response.json();
      console.log(jsonData)
      setData(jsonData); 
    };

    fetchData();
  }, []);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (

    <List className={Style.list}>

      {(data ?? [1,2,3]).map ((categoria, idx) => {

        const labelId = `checkbox-list-label-${idx}`;

        return (
          <ListItem
            key={idx}
            disablePadding
          >
            <ListItemButton role={undefined} onClick={handleToggle(idx)} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.includes(idx)}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`${categoria.nombre}`} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}