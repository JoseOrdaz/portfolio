import { Outlet } from "react-router-dom";
import { Link } from 'react-router-dom';
import ScrollBody from '../components/scrollToTop';

export const AuthLayout = () => {
  return (
   
    <>
    
        <main className="mx-auto md:grid items-center">
        <div className="relative py-6 px-4 sm:px-6 lg:px-8">
          <nav className="relative flex items-center justify-around sm:h-[8rem] lg:justify-around" aria-label="Global">
            <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
              <div className="flex items-center justify-between w-full md:w-auto">
                <Link className="flex" to="/">
                  <img alt="Workflow" className="h-[6rem] rounded-full" src="./jose-ordaz.jpg"/>
               
                <h3 className="text-[#426db3] font-black text-3xl p-2 text-left text-logo ">Jose Ordaz</h3>
                </Link>
  
              </div>
            </div>
            <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
              <Link to="/blog" className="border hover:border-[#426db3] text-gray-500 hover:cursor-pointer w-full font-bold py-3 px-4 rounded-xl hover:text-[#426db3]">Blog</Link>
              <Link to="/contacto" className="hover:bg-[#426db3] border border-[#426db3] hover:text-white text-[#426db3] hover:cursor-pointer w-full font-bold py-3 px-4 rounded-xl md:w-auto">Dime Hola</Link>
              
            </div>
          </nav>
        </div>
        <Outlet />

       </main>
      
       <footer className="mx-auto mt-18 w-full max-w-container px-4 sm:px-6 lg:px-8">
        <div className="border-t border-slate-900/5 py-10">
        <div className="flex items-center justify-center">
        <a href="#">
                  <img alt="Workflow" className="h-[4rem] rounded-full" src="./jose-ordaz.jpg"/>
                </a>
                </div>
          <p className="mt-5 mb-5 text-center text-sm leading-6 text-slate-500">© 2023 Jose Ordaz Developer. Todos los derechos reservados.</p>
          <div className="flex items-center justify-center text-slate-400 dark:text-slate-500">
          <a href="https://github.com/joseordaz" className="hover:text-slate-500 dark:hover:text-slate-400">
          <span className="sr-only">GitHub</span><svg width="25" height="24" fill="currentColor">
          <path fillRule="evenodd" clipRule="evenodd" d="M12.846 0c-6.63 0-12 5.506-12 12.303 0 5.445 3.435 10.043 8.205 11.674.6.107.825-.262.825-.585 0-.292-.015-1.261-.015-2.291-3.015.569-3.795-.754-4.035-1.446-.135-.354-.72-1.446-1.23-1.738-.42-.23-1.02-.8-.015-.815.945-.015 1.62.892 1.845 1.261 1.08 1.86 2.805 1.338 3.495 1.015.105-.8.42-1.338.765-1.645-2.67-.308-5.46-1.37-5.46-6.075 0-1.338.465-2.446 1.23-3.307-.12-.308-.54-1.569.12-3.26 0 0 1.005-.323 3.3 1.26.96-.276 1.98-.415 3-.415s2.04.139 3 .416c2.295-1.6 3.3-1.261 3.3-1.261.66 1.691.24 2.952.12 3.26.765.861 1.23 1.953 1.23 3.307 0 4.721-2.805 5.767-5.475 6.075.435.384.81 1.122.81 2.276 0 1.645-.015 2.968-.015 3.383 0 .323.225.707.825.585a12.047 12.047 0 0 0 5.919-4.489 12.537 12.537 0 0 0 2.256-7.184c0-6.798-5.37-12.304-12-12.304Z"></path></svg></a>
          </div>
          <div className="mt-10 flex items-center justify-center space-x-4 text-sm font-semibold leading-6 text-slate-700">
          <a href="/">Politica de privacidad</a><div className="h-4 w-px bg-slate-500/20"></div><Link to="/contacto">Dime Hola</Link></div>
        </div>

        <a
        href="https://api.whatsapp.com/send/?phone=34680851926&text&type=phone_number&app_absent=0"
        className="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
  class="w-6 h-6 text-green-400 fill-current"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 448 512">
  <path
    d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
  ></path>
</svg>
      </a>
       </footer>
       <ScrollBody />

       
    </>


  )
}

export default AuthLayout;
