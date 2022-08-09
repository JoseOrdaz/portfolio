import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { AuthLayout } from './layout/AuthLayout';
import Inicio  from './paginas/inicio';
import Contacto from './paginas/contacto';
import Blog from './paginas/blog';

function App() {

  return (

    <BrowserRouter>
     
    <Routes>

      <Route path="/" element={<AuthLayout/>}>

          <Route index element={<Inicio/>} />
          <Route path="contacto" element={<Contacto/>} />
          <Route path="blog" element={<Blog/>} />
         
        </Route>
    </Routes>
    </BrowserRouter>
    

    )
}

export default App
