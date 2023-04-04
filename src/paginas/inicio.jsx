import MyWorks  from '../components/myworks';
import Skills from '../components/skills';
import Contacto from '../paginas/contacto';


export const Inicio = () => {
  return (

    <>
    
    <div id="header" className='relative py-16  px-6 mx-auto md:grid items-center'>
            <h1 className="text-gray-600 font-black text-5xl text-center ">Diseñador y FrontEnd Developer</h1>
            <p className="mt-4 text-center text-xl text-gray-500">
              Diseño y codifico cosas hermosas y sencillas. Además me encanta lo que hago.
            </p>
            
            <div className="max-w-4xl flex items-center justify-center mt-20 mx-auto">
            <img src='./hero-devices.svg' alt='foto'/>

            </div>
          
            <div className="bg-[#fbdd3c] max-w-6xl mt-20 p-10 shadow-md rounded-xl items-center">
 
            <p className="mb-4 text-4xl flex xl:text-5xl font-bold leading-tight">
            <svg class="w-16 h-16 animate-wave" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg"><path fill="#FCEA2B" d="M18.657 19.24a3.531 3.531 0 1 0-5.563 4.25l11.533 15.1 2.688 3.387-7.89-10.331a3.531 3.531 0 1 0-5.564 4.249l7.891 10.331 6.27 7.899c5.468 6.273 14.515 5.93 20.787.465a19.617 19.617 0 0 0 6.515-12.31c.386-4.233.807-15.301.807-15.301-.182-2.601-3.135-4.524-3.515-3.18l-4.894 9.757-3.366-4.223 3.366 4.223-3.366-4.223-13.465-17.208a3.531 3.531 0 1 0-5.563 4.249l4.249 5.563L36 30.417l-13.419-17.68a3.531 3.531 0 1 0-5.563 4.248L31.689 36"></path><g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M18.657 19.24a3.531 3.531 0 1 0-5.563 4.25l11.533 15.1 2.688 3.387-7.89-10.331a3.531 3.531 0 1 0-5.564 4.249l7.891 10.331 6.27 7.899c5.468 6.273 14.515 5.93 20.787.465a19.617 19.617 0 0 0 6.515-12.31c.386-4.233.807-15.301.807-15.301-.182-2.601-3.135-4.524-3.515-3.18l-4.894 9.757-3.366-4.223 3.366 4.223-3.366-4.223-13.465-17.208a3.531 3.531 0 1 0-5.563 4.249l4.249 5.563L36 30.417l-13.419-17.68a3.531 3.531 0 1 0-5.563 4.248L31.689 36"></path><path stroke-miterlimit="10" d="M11.673 42.872c0 2.566 1.747 4.643 3.905 4.643M7.061 42.437c0 5.596 3.81 10.124 8.517 10.124M45.262 21.238c0-2.567-1.747-4.643-3.906-4.643M49.873 21.673c0-5.596-3.81-10.124-8.517-10.124"></path></g></svg> Hola, soy Jose.
            </p>


            <p className="mt-4 mb-8 text-xl text-gray-900">
               Soy web developer en Valencia, España. Actualmente trabajo como Desarrollador Web en una empresa local, <a className="font-medium text-[#426db3] underline" href="https://www.digitalvalue.es/" target="_blank" rel="noopener">Digital Value S.L</a>. En mi tiempo libre disfruto del padel,
                jugando y entrenando en cualquier club de Valencia. Mis herramientas preferidas son JavaScript, Mithril JS, REACT, CSS, HTML y CMS como Drupal y WordPress.
            </p>

            <p className="mt-4 text-xl text-black">
                Estoy en <a className="font-medium text-[#426db3] underline" href="https://github.com/JoseOrdaz" target="_blank">GitHub</a>, <a className="font-medium text-[#426db3] underline" href="https://twitter.com/josele_ordaz" target="_blank">Twitter</a> y <a className="font-medium text-[#426db3] underline" href="https://www.instagram.com/josele.ordaz/" target="_blank">Instagram</a>.
            </p>
     
          </div>



    </div>
    
    
<Skills/>
<div className='relative py-16 '>

 <MyWorks />
</div>
<Contacto/>

 </>
  )
}

export default Inicio;