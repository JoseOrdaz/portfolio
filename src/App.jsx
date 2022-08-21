import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { AuthLayout } from './layout/AuthLayout';
import Inicio  from './paginas/inicio';
import Contacto from './paginas/contacto';
import Blog from './paginas/blog';
import Entrada from './paginas/entrada';
import ScrollToTop from './components/scrollToTop';

function App() {


  return (

    <BrowserRouter>
     <ScrollToTop />
    <Routes>

      <Route path="/" element={<AuthLayout/>}>
          <Route index element={<Inicio/>} />
          <Route path="contacto" element={<Contacto/>} />
          <Route path="blog" element={<Blog/>} />
          <Route exact path="entrada" element={<Entrada/>} />
          <Route path="entrada/:id" element={<Entrada/>} />
          
         
        </Route>
    </Routes>
    </BrowserRouter>
    

    )
}

export default App
