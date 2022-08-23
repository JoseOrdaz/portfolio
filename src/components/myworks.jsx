import { Link } from 'react-router-dom';
import { Fragment, useRef } from 'react';


const callouts = [
    {
      name: 'Web de peluquería',
      description: 'Web Jesús Peluqueros en Burjassot',
      imageSrc: './jesuspeluquero.es-marco-pc.png',
      imageAlt: 'Proyecto web Peluqueria - Jesús Peluqueros',
      href: 'https://jesuspeluquero.es/',
    },
    {
      name: 'Tienda especializada en venta de cartuchos y tóners.',
      description: 'R.L Ahuir',
      imageSrc: './cartutonerahuir.es-marco-pc.png',
      imageAlt: 'Tienda especializada en venta de cartuchos y tóners.',
      href: 'https://www.cartutonerahuir.es/',
    },   {
      name: 'Web de Clubs de padel en Valencia',
      description: 'Clubs de padel',
      imageSrc: './clubsdepadelvalencia.es-marco-pc.png',
      imageAlt: 'Clubs de padel en Valencia',
      href: 'https://clubsdepadelvalencia.es/',
    },{
      name: 'Sistemas de Carpintería en Aluminio',
      description: 'Grupo de sistemas de carpintería en Aluminio',
      imageSrc: './grupolaminex.com-marco-pc.png',
      imageAlt: 'Sistemas de Carpintería en Aluminio',
      href: 'https://grupolaminex.com/',
    },{
      name: 'Participación Ciudadana Ayuntamiento de Chiva',
      description: 'Participación Ciudadana',
      imageSrc: './participa.chiva.es-marco-pc.png',
      imageAlt: 'Participación Ciudadana Ayuntamiento de Chiva',
      href: 'https://participa.chiva.es/',
    },{
      name: 'Bodegas de vinos',
      description: 'Bodega Natura',
      imageSrc: './bodeganatura.com-marco-pc.png',
      imageAlt: 'Bodegas de vinos',
      href: 'https://bodeganatura.com/',
    }

    
  ]
 


  export const MyWorks = () => {
    const testRef = useRef();
    
    return (
      <>
        <div ref={testRef} id="trabajos" className="max-w-7xl mx-auto pt-8 pb-10">
          <div className=" max-w-2xl mx-auto lg:max-w-none">
          <h1 className="text-gray-600 font-black text-5xl text-center ">Mis trabajos más recientes</h1>
            <p className="mt-4 text-center text-xl text-gray-500">
            Aquí hay algunos proyectos de diseño anteriores en los que he trabajado. ¿Quieres ver más? <Link className='font-medium text-[#426db3] hover:underline' to="/contacto">Envíame un correo electrónico</Link>
            </p>
  
            <div className=" space-y-12 mt-20 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative py-6">
                  <div className="relative w-full rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                  <a target="_blank" className="cursor-pointer" href={callout.href}>
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="w-full cursor-pointer object-center"
                    />
                    </a>
                  </div>
                  <h1 className="text-2xl mb-2 text-center font-semibold text-[#426db3]">
                    <a target="_blank" className="cursor-pointer" href={callout.href}>
                      {callout.name}
                    </a>
                  </h1>
                  <p className="text-center text-xl font-semibold text-gray-400">{callout.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
</>
    )
  }


export default MyWorks;