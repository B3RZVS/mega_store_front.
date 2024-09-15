import { useState } from 'react'
import '../App.css'
import Categorias from "../components/categorias/TodasCategorias/TodasCategorias"

type Props = {}

function Prueba({}: Props) {

    return (
      <>
        <h1>CATEGORIAS</h1>
        <Categorias></Categorias>
      </>
    )
}

export default Prueba