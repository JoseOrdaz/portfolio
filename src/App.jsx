import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { AuthLayout } from './layout/AuthLayout';
import Inicio  from './paginas/inicio';
import Contacto from './paginas/contacto';

function App() {

  return (

    <BrowserRouter>
     
    <Routes>

      <Route path="/" element={<AuthLayout/>}>

          <Route index element={<Inicio/>} />
          <Route path="contacto" element={<Contacto/>} />
         
        </Route>
    </Routes>
    </BrowserRouter>
    

    )
}

export default App
