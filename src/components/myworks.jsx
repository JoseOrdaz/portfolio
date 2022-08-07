
const callouts = [
    {
      name: 'Web de peluquería',
      description: 'Web Jesús Peluqueros en Burjassot',
      imageSrc: './jesuspeluquero.es.png',
      imageAlt: 'Proyecto web Peluqueria - Jesús Peluqueros',
      href: 'https://jesuspeluquero.es/',
    },
    {
      name: 'Tienda especializada en venta de cartuchos y tóners.',
      description: 'R.L Ahuir',
      imageSrc: './cartutonerahuir.es.png',
      imageAlt: 'Tienda especializada en venta de cartuchos y tóners.',
      href: 'https://www.cartutonerahuir.es/',
    },   {
      name: 'Web de Clubs de padel en Valencia',
      description: 'Clubs de padel',
      imageSrc: './clubsdepadelvalencia.es.png',
      imageAlt: 'Clubs de padel en Valencia',
      href: 'https://clubsdepadelvalencia.es/',
    },{
      name: 'Sistemas de Carpintería en Aluminio',
      description: 'Grupo de sistemas de carpintería en Aluminio',
      imageSrc: './grupolaminex.com.png',
      imageAlt: 'Clubs de padel en Valencia',
      href: 'https://clubsdepadelvalencia.es/',
    },{
      name: 'Participación Ciudadana Ayuntamiento de Chiva',
      description: 'Participación Ciudadana',
      imageSrc: './participa.chiva.es.png',
      imageAlt: 'Participación Ciudadana Ayuntamiento de Chiva',
      href: 'https://clubsdepadelvalencia.es/',
    },{
      name: 'Bodegas de vinos',
      description: 'Bodega Natura',
      imageSrc: './bodeganatura.com.png',
      imageAlt: 'Clubs de padel en Valencia',
      href: 'https://clubsdepadelvalencia.es/',
    }

    
  ]
 
  export const MyWorks = () => {
    return (

        <div id="trabajos" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className=" max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
          <h1 className="text-gray-600 font-black text-5xl text-center mb-20">Mis Trabajos</h1>
  
            <div className=" space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative py-6">
                  <div className="relative shadow-2xl w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="w-full h-full object-center object-cover"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

    )
  }


export default MyWorks;