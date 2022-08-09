import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

export const Blog = () => {

    const [entradas, setEntradas] = useState([]);

    useEffect(() => { 
     async function fetchData() {
        const response = await fetch('https://joseordaz.com//wp-json/wp/v2/posts')
        const data = await response.json()
        setEntradas(data);
  
        
        
      }

      fetchData();
    }, []);


  return (
    <div id="trabajos" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className=" max-w-2xl mx-auto lg:max-w-none">
    <div className='relative pt-16 pb-10 px-4 sm:px-6 lg:px-8 mx-auto md:grid items-center'>
            <h1 className="text-gray-600 font-black text-6xl text-center ">Blog de Informática</h1>
            <p className="mt-4 text-center text-xl text-gray-500">
            Encuentra información del mundo de la informática.
            </p>

    </div>
      <div className=" space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
        {entradas.map((entrada) => (
          <div key={entrada.title.rendered} className="group relative py-6">
            <div className="relative shadow-2xl w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
            <a target="_blank" href={entrada.link}>
            <img 
                src={entrada.yoast_head_json.og_image[0].url}
                className="w-full h-full object-center object-cover"
              />
              </a>
            </div>
            <a className="block text-3xl mt-5 font-semibold text-gray-900" target="_blank" href={entrada.link}>
            <h1>{JSON.stringify(entrada.title.rendered)}</h1>
            </a>
            <p className="mt-6 text-lg text-gray-500">
              <a target="_blank" href={entrada.link}>
                <span className="inset-0" dangerouslySetInnerHTML= {{__html:entrada.excerpt.rendered}}/>
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Blog;