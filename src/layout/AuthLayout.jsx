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
               
                <h3 className="text-[#426db3] font-black text-4xl p-2 text-left text-logo ">Jose Ordaz</h3>
                </Link>
                <div className="-mr-2 flex items-center md:hidden">
                  <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
                    <span className="sr-only">Abrir Menu</span>
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>
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
          <a href="/privacy-policy">Politica de privacidad</a><div className="h-4 w-px bg-slate-500/20"></div><a href="/changelog">Dime Hola</a></div>
        </div>
       </footer>
       <ScrollBody />

       
    </>


  )
}

export default AuthLayout;
