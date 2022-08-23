import MyWorks  from '../components/myworks';
import Skills from '../components/skills';

export const Inicio = () => {
  return (

    <>
    
    <div id="header" className='relative pt-8 pb-10 px-4 sm:px-6 lg:px-8 mx-auto md:grid items-center'>
            <h1 className="text-gray-600 font-black text-5xl text-center ">Diseñador y Desarrollador Frontend</h1>
            <p className="mt-4 text-center text-xl text-gray-500">
              Diseño y codifico cosas hermosas y sencillas. Además me encanta lo que hago.
            </p>
            
            <div className="max-w-4xl flex items-center justify-center mt-20 mx-auto">
            <img src='./hero-devices.svg' alt='foto'/>

            </div>
          
            <div className="bg-white max-w-6xl mt-20 p-10 shadow-md rounded-xl items-center">
 
            <p className="mb-8 text-5xl text-gray-500">
                👋 Hola, soy Jose.
            </p>

            <p className="mt-4 mb-8 text-xl text-gray-500">
               Soy web developer en Valencia, España. Actualmente trabajo como Desarrollador Web en una empresa local,
                <a className="font-medium text-[#426db3] hover:underline" href="https://www.digitalvalue.es/" target="_blank" rel="noopener"> Digital Value S.L</a>. En mi tiempo libre disfruto del padel,
                jugando y entrenando en cualquier club de Valencia. Mis herramientas preferidas son JavaScript, Mithril JS, REACT, CSS, HTML y CMS como Drupal y WordPress.
            </p>

            <p className="mt-4 text-xl text-gray-500">
                Estoy en <a className="font-medium text-[#426db3] hover:underline" href="https://github.com/JoseOrdaz" target="_blank">GitHub</a>, <a className="font-medium text-[#426db3] hover:underline" href="https://twitter.com/josele_ordaz" target="_blank">Twitter</a> y <a className="font-medium text-[#426db3] hover:underline" href="https://www.instagram.com/josele.ordaz/" target="_blank">Instagram</a>.
            </p>
     
          </div>



    </div>
    
    
<Skills/>
<div className='relative pt-8 pb-10 px-4 '>

 <MyWorks />
</div>
 </>
  )
}

export default Inicio;