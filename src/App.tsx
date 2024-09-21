import { Route, Routes } from 'react-router-dom'; 
import Menu from './components/menu/menu.tsx';

function App() {
  
  return (
    <Routes>
      <Route element={<Menu/>} path="/"/>
    </Routes>
  )
}

export default App
