import './App.css'
import { Route, Routes } from 'react-router-dom'; 
import Prueba from './pages/Prueba';
import Menu from './components/menu/menu.tsx';

function App() {
  
  return (
    <Routes>
      <Route element={<Prueba />} path="/" />
      <Route element={<Menu/>} path="/menu"/>
    </Routes>
  )
}

export default App
