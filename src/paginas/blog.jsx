import { useEffect, useState } from "react";
import Spinner from "../components/spinner";
import { Link } from 'react-router-dom';


export const Blog = () => {
    const [entradas, setEntradas] = useState([]);
    const [isLoading, setIsLoading] = useState([]);
    useEffect(() => {
      async function fetchData() {
        setIsLoading(true);
        const response = await fetch('https://joseordaz.com//wp-json/wp/v2/posts?per_page=9')
        const data = await response.json()
        setEntradas(data);
        setIsLoading(false);
       

      }

      fetchData();
    }, []);
    

    
function SpinnerCharging() {
  if (isLoading) {
    return <div className="flex py-10 flex-row justify-center items-center mx-autor"><Spinner /></div>;
  } else {
    return null;
  }
}
  return (
    
    <>
    <div id="trabajos" className="max-w-7xl mx-auto px-4 pb-8 sm:px-6 lg:px-8">
    <div className=" max-w-2xl mx-auto lg:max-w-none">
    <div className='relative pt-8 pb-10 px-4 sm:px-6 lg:px-8 mx-auto md:grid items-center'>
            <h1 className="text-gray-600 font-black text-5xl text-center ">Blog de Informática</h1>
            <p className="mt-4 text-center text-xl text-gray-500">
            Encuentra información del mundo de la informática.
            </p>
            <div className="flex justify-center items-center">
    <p className="mt-4 mb-4 italic text-center text-sm text-gray-500"> Entradas extraidas con REST API de WordPress</p>
    </div>

    </div>
    <SpinnerCharging />

      <div className=" space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
        
        {entradas.map((entrada) => (
          <div key={entrada.title.rendered} className="group relative py-6">
            <div className="relative shadow-2xl w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
            <Link  to={`/entrada/${entrada.id}`}>

            {/* {entrada.yoast_head_json.og_image.map((images) => (
            <img
                src={images.url}
                className="w-full h-full object-center object-cover"
              />
              ))} */}
              </Link>
            </div>
            <Link className="block text-3xl mt-5 font-semibold text-gray-900" to={`/entrada/${entrada.id}`}>
            <h1>{JSON.stringify(entrada.title.rendered)}</h1>
            </Link>
            <p className="mt-6 text-lg text-gray-500">
              <Link to={`/entrada/${entrada.id}`}>
                <span className="inset-0" dangerouslySetInnerHTML= {{__html:entrada.excerpt.rendered}}/>
              </Link>
            </p>
          </div>
        ))}
      
      </div>
    </div>
  </div>
  </>
  
  )
  
}


export default Blog;