import { Routes, Route } from 'react-router-dom';
import Menu from './components/menu/menu.tsx';
import  {RegistrarMarca}  from './components/marca/registrarMarca.tsx';


function App() {
  
  return (
    <>
      <Routes>
        <Route element={<Menu/>} path="/menu"/>
        <Route element={<RegistrarMarca/>} path="/registrarMarca"/>
      </Routes>
      </>
  )
}

export default App
