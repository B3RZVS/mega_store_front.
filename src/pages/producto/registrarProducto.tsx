import style from './registrarProducto.module.css';
import React, { useState } from 'react';
import { TextField, Button, Select, MenuItem, InputLabel, FormControl } from '@mui/material';


const RegistrarProducto = () => {
        // Estados para almacenar las selecciones del formulario
        const [nombre, setNombre] = useState('');
        const [descripcion, setDescripcion] = useState('');
        const [precio, setPrecio] = useState('');
        const [peso, setPeso] = useState('');
        const [categoria, setCategoria] = useState('');
        const [sucursal, setSucursal] = useState('');
        const [marca, setMarca] = useState('');
        const [talle, setTalle] = useState('');
        const [color, setColor] = useState('');
        const [foto, setFoto] = useState<File | null>(null);  // Estado para almacenar la imagen
        const [preview, setPreview] = useState<string | null>(null);  // Estado para la previsualización 
        const [fileName, setFileName] = useState('');  // Para mostrar el nombre del archivo seleccionado   
    
        // Listas de opciones para las categorías, sucursales, marcas, talles y colores (simuladas)
        const categorias = ['Jean', 'Remera', 'Pollera', 'Musculosa'];
        const sucursales = ['Sucursal 1', 'Sucursal 2', 'Sucursal 3'];
        const marcas = ['Marca A', 'Marca B', 'Marca C'];
        const talles = ['XS', 'S', 'M', 'L', 'XL'];
        const colores = ['Rojo', 'Azul', 'Verde', 'Negro'];

// Función para el envío del formulario
const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    //Lógica para enviar los datos al backend
    console.log({ nombre, descripcion, categoria, sucursal, marca, talle, color, foto});
};

// Función para manejar la carga de imagen y la previsualización
const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];  // Obtenemos el primer archivo seleccionado
    if (file) {
        setFoto(file);  //Se guarda el archivo en el estado
        setFileName(fileName); //Se guarda el nombre del archivo

        //FileReader: para mostrar la previsualización de la imagen
        const reader = new FileReader();
        reader.onloadend = () => {
            setPreview(reader.result as string);  //Se guarda el resultado de la lectura como previsualización
        };
        reader.readAsDataURL(file);  // Lee el archivo como una URL de datos
    }
};
return (
    <div className={style.container}>
        <h1>Registrar Producto</h1>
        <form className={style.form} onSubmit={handleSubmit}>

        {/* Campo para ingresar el nombre del producto */}
        <TextField 
            className={style.input}
            label="Nombre"
            variant="outlined"
            fullWidth
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            margin="normal"
        >
        </TextField>
        {/*Campo para ingresar la descripcion del producto*/}
        <TextField
            className={style.input}
            label="Descripción"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            margin="normal"
        >
        </TextField>
        <TextField
            className={style.input}
            label="Precio"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            margin="normal"
        >
        </TextField>
        <TextField 
            className={style.input}
            label="Peso"
            value={peso}
            onChange={(e) => setPeso(e.target.value)} 
            margin="normal"
            >
        </TextField>
        {/* Select para Categoría */}
        <FormControl fullWidth margin="normal">
                <InputLabel className={style.input} id="categoria-label">Categoría</InputLabel>
                <Select
                    labelId="categoria-label"
                    value={categoria}
                    onChange={(e) => setCategoria(e.target.value)}
                    label="Categoría"
                >
                    {categorias.map((cat, index) => (
                        <MenuItem key={index} value={cat}>
                            {cat}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            {/* Select para Sucursal */}
            <FormControl fullWidth margin="normal">
                <InputLabel className={style.input} id="sucursal-label">Sucursal</InputLabel>
                <Select
                    labelId="sucursal-label"
                    value={sucursal}
                    onChange={(e) => setSucursal(e.target.value)}
                    label="Sucursal"
                >
                    {sucursales.map((suc, index) => (
                        <MenuItem key={index} value={suc}>
                            {suc}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

             {/* Select para Marca */}
            <FormControl fullWidth margin="normal">
                <InputLabel className={style.input} id="marca-label">Marca</InputLabel>
                <Select
                    labelId="marca-label"
                    value={marca}
                    onChange={(e) => setMarca(e.target.value)}
                    label="Marca"
                >
                    {marcas.map((m, index) => (
                        <MenuItem key={index} value={m}>
                            {m}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            {/* Select para Talle */}
            <FormControl fullWidth margin="normal">
                <InputLabel className={style.input} id="talle-label">Talle</InputLabel>
                <Select
                    labelId="talle-label"
                    value={talle}
                    onChange={(e) => setTalle(e.target.value)}
                    label="Talle"
                >
                    {talles.map((t, index) => (
                        <MenuItem key={index} value={t}>
                            {t}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            {/* Select para Color */}
            <FormControl fullWidth margin="normal">
                <InputLabel className={style.input} id="color-label">Color</InputLabel>
                <Select
                    labelId="color-label"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    label="Color"
                >
                    {colores.map((c, index) => (
                        <MenuItem key={index} value={c}>
                            {c}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            {/* Campo personalizado para subir archivo */}
            <FormControl fullWidth margin="normal">
                    <input
                        type="file"
                        accept="image/*"
                        id="file-upload"
                        style={{ display: 'none' }}  // Ocultamos el input original
                        onChange={handleImageChange}
                    />
                    <label htmlFor="file-upload">
                        <Button 
                            sx={{
                                alignItems:'center',
                                backgroundColor: '#c49dd7', // Color lila
                                color: 'white',
                                '&:hover': {
                                    backgroundColor: '#b284c4', // Color lila más oscuro al pasar el mouse
                                },
                            }}
                            variant="contained"
                            component="span"  // Actúa como disparador del input
                        >
                            {fileName || 'Cargar imagen'}
                        </Button>
                    </label>
                </FormControl>

            {/* Previsualización de la imagen seleccionada */}
            {preview && (
                <div>
                    <img src={preview} alt="Previsualización" style={{ maxHeight: '200px', marginTop: '10px' }} />
                </div>
            )}
            {/* Botón para enviar el formulario */}
            <Button  
                type="submit" 
                variant="contained" 
                disableElevation 
                fullWidth 
                sx={{
                    backgroundColor: '#c49dd7',  // Color lila de fondo
                    color: 'white',  // Color del texto
                    fontWeight: 'bold',
                    padding: '10px',
                    borderRadius: '5px',
                    textTransform: 'uppercase',
                    '&:hover': {
                      backgroundColor: '#b284c4',  // Lila más oscuro al hacer hover
                    }
                }}
            >
                Registrar Producto
            </Button>
            </form>
    </div>


);
};

export default RegistrarProducto;
