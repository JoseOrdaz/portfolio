import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Spinner from "../components/spinner";
import Blog from "./blog";

export const Entrada = () => {
  const [isLoading, setIsLoading] = useState([]);
  const [titlePost, setTitle] = useState();
  const [imageUrl, setImageUrl] = useState();
  const [bodyContent, setBodyContent] = useState();
  const [entradas, setEntradas] = useState([]);
  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const response = await fetch('https://joseordaz.com//wp-json/wp/v2/posts')
      const data = await response.json()
      setEntradas(data);
      setIsLoading(false);
    }

    fetchData();
  }, []);

  const id = useParams().id;

  useEffect(() => {
    async function fetchData() {
    setIsLoading(true);
    await fetch(`https://joseordaz.com//wp-json/wp/v2/posts/${id}`)
    .then((response) => response.json())
    .then((entrada) => {
      setTitle(entrada.title.rendered); // ⬅️ Guardar datos
      setImageUrl(entrada.yoast_head_json.og_image[0].url); // ⬅️ Guardar datos
      setBodyContent(entrada.content.rendered); // ⬅️ Guardar datos
      setIsLoading(false); // ⬅️ Desactivar modo "cargando"
      
       
    });


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
    
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className=" max-w-2xl mx-auto lg:max-w-none">
          <div className="relative pt-8 pb-10 px-4 sm:px-6 lg:px-8 mx-auto md:grid items-center">
            <h1 className="text-gray-600 font-black text-5xl text-center ">
              Entrada Blog
            </h1>
            <p className="mt-4 text-center text-xl text-gray-500">
              Encuentra información del mundo de la informática.
            </p>
          </div>
          <SpinnerCharging />
          <div className="flex justify-center items-center">
          <Link  to={`/blog`}>
           <button className="bg-[#426db3] hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
          Volver al Blog
        </button>
        </Link>
        </div>
          <div className=" space-y-12 lg:space-y-0 lg:gap-x-6">
            <div key={titlePost} className="group relative py-6">
              <div className="relative shadow-2xl w-full bg-white rounded-lg overflow-hidden group-hover:opacity-75">
                <img
                  src={imageUrl}
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <h1 className="block text-3xl mt-5 font-semibold text-gray-900">{JSON.stringify(titlePost)}</h1>

              <p className="mt-6 text-lg text-gray-500">
              <span className="inset-0" dangerouslySetInnerHTML= {{__html:bodyContent}}/>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}



export default Entrada;