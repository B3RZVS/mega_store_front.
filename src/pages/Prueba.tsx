import { useState } from 'react'
import '../App.css'
import { Button} from '@mui/material';
import Componente1 from '../components/componentePrueba/Componenteprueba'
import Componente2 from "../components/componentePrueba2/Componente2"

type Props = {}

function Prueba({}: Props) {
    const [count, setCount] = useState(0)

    return (
      <>
        <h1 style={{fontSize:'4rem'}}>Rami estuvo aqui</h1>

        <Componente2></Componente2> 

        <div className="card">

            <Componente1></Componente1>
            
            <Button variant="contained" color="primary"
                onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </Button>
          
  
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
  
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </>
    )
}

export default Prueba