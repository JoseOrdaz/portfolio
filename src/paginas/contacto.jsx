
import { Link } from 'react-router-dom'
const Contacto = () => {
  return (
    <>
 <div className='relative pt-16 pb-10 px-4 sm:px-6 lg:px-8 mx-auto md:grid items-center'>
            <h1 className="text-gray-600 font-black text-6xl text-center ">Contacta conmigo</h1>
            <p className="mt-4 text-center text-xl text-gray-500">
              Diseño y codifico cosas hermosas y sencillas, y me encanta lo que hago.
            </p>

    </div>
    <div className='shadow bg-white rounded-xl relative w-full max-w-4xl p-16 mb-10 px-4 sm:px-6 lg:px-8 mx-auto md:grid items-center'>
        <form>

        <div className="my-5">
                <label htmlFor="nombre" className="text-gray-600 block text-xl font-bold mb-3">Nombre</label>
                <input type="text" id="password" placeholder="Tu Nombre" className="border border-gray-600 w-full rounded-xl p-3 bg-gray-50" />
            </div>

            <div className="my-5">
                <label htmlFor="email" className="text-gray-600 block text-xl font-bold mb-3">Email</label>
                <input type="email" id="email" placeholder="Email de registro" className="border border-gray-600 w-full rounded-xl p-3 bg-gray-50" />
            </div>
            <div className="my-5">
                <label htmlFor="password" className="text-gray-600 block text-xl font-bold mb-3">Cuentame lo que quieras...</label>
                <textarea type="text" id="password" placeholder="Te escucho..." className="border border-gray-600 w-full rounded-xl p-3 bg-gray-50" />
            </div>
        
        
            <input
                type="submit" value="Enviar" className="bg-[#426db3] text-white hover:cursor-pointer w-full font-bold py-3 px-4 rounded-xl md:w-full"
            />

            {/* <nav className="lg:flex lg:justify-between mt-10">
                <Link to="/" className=" block text-center hover:underline text-gray-500 font-bold">¿Ya tienes una cuenta? Inicia sesión</Link>
                <Link to="/olvidar-password" className=" block text-center hover:underline text-gray-500  font-bold">¿Olvidaste tu contraseña?</Link>
            </nav> */}
        </form>
    </div>
    </>
  ) 
}

export default Contacto;