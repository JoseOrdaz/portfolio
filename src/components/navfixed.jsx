import {useEffect} from 'react';
import { Link } from 'react-router-dom';

function fixNav() {

    useEffect(() => {
      
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      
        var scrollposnav = window.scrollY;
        const menuPrincipal = document.getElementsByClassName("menu-principal");
        
        function add_class_on_fixNav() {
          menuPrincipal[0].classList.add("activo");
        }
        
        function remove_class_on_fixNav() {
          menuPrincipal[0].classList.remove("activo");
        }
        window.addEventListener('scroll', function(){ 
            //Here you forgot to update the value
            scrollposnav = window.scrollY;
        
            if(scrollposnav > 400){
                add_class_on_fixNav();
            }
            else {
                remove_class_on_fixNav();
            }
        });
  
  
    }, []);
    
  return (
    <>
    <nav className="menu-principal relative flex items-center justify-around sm:h-[8rem] lg:justify-around activo" aria-label="Global">
    <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
      <div className="flex items-center justify-between w-full md:w-auto">
        <Link className="flex" to="/">
          <img alt="jose-ordaz" className="h-[6rem] rounded-full" src="./jose-ordaz.jpg"/>
        <h3 className="text-[#426db3] font-black text-3xl p-2 text-left text-logo ">Jose <span className="text-gray-500">Ordaz</span></h3>
        </Link>

      </div>
    </div>
  
    <Popover>
    <div className="relative pt-0  px-4 sm:px-6 lg:px-8">
      <nav className="  relative flex items-top justify-between sm:h-10 lg:justify-start" aria-label="Global">
        <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
          <div className="flex items-top justify-between w-full md:w-auto">
            <a href="#">
              <span className="sr-only">Jose Ordaz Developer</span>
             
            </a>
            <div className="-mr-2 flex items-center md:hidden"> 
              <Popover.Button className="bg-white rounded-md border p-2 inline-flex items-center justify-center text-gray-700 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#426db3]">
                <span className="sr-only">Abrir Menú</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
          </div>
        </div>
        <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
          {navigation.map((item) => (
            <Link key={item.name} to={item.href} className="font-medium text-gray-500 hover:text-gray-900">
              {item.name}
            </Link>
          ))}
          <Link to="contacto" className="font-medium border p-2 rounded-md border-[#426db3] hover:bg-[#426db3]  text-[#426db3] hover:text-white">
            ¡Dime Hola!
          </Link>
        </div>
      </nav>
    </div>

    <Transition
      as={Fragment}
      enter="duration-150 ease-out"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="duration-100 ease-in"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <Popover.Panel
        focus
        className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
      >
        <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
          <div className="px-5 pt-4 flex items-center justify-between">
            <div>
              <img
                className="h-8 w-auto"
                src="./jose-ordaz.jpg"
                alt=""
              />
            </div>
            <div className="-mr-2">
              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#426db3]">
                <span className="sr-only">Cerrar Menú</span>
                <XIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
          </div>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                {item.name}
              </Link>
              
            ))}
            <Link to="contacto" className="block px-3 py-2 font-medium text-[#426db3] hover:text-gray-500">
            ¡Dime Hola!
          </Link>
          </div>
        
        </div>
      </Popover.Panel>
    </Transition>
  </Popover>
  </nav>
  </>
  );

}

export default fixNav;




