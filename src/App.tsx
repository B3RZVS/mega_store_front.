import './App.css'
import { Route, Routes } from 'react-router-dom'; 
import Prueba from './pages/Prueba';

function App() {
  
  return (
    <Routes>
      <Route element={<Prueba />} path="/" />
    </Routes>
  )
}

export default App
