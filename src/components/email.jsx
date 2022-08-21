import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Alerta from './alerta';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

export const ContactUs = () => {
  const form = useRef();
  const [alerta, setAlerta] = useState('')

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_yje02c9', 'template_zc0yj07', form.current, 'WjR_zWkFqIgBAkshm')
      .then((result) => {
        if (result.text === 'OK') {
          setAlerta({ msg: 'Gracias por escribirme, me ha llegado el correo y te responderé lo antes posible 🙂 ', error: false });
          e.target.reset();
        }
          console.log(result.text);
      }, (error) => {
          console.log(error.text);

      });
      
    
      
  };

  const { msg } = alerta;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    margin: '10px',
  };
  
  return (
    <>
     <div id="contacto" className='shadow bg-white rounded-xl relative w-full max-w-4xl p-16 mb-10 px-4 sm:px-6 lg:px-8 mx-auto md:grid items-center'>
   {msg && <Alerta alerta={alerta} />}
         <form ref={form} onSubmit={sendEmail}>
        <div className="my-5">
                <label htmlFor="nombre" className="text-gray-600 block text-xl font-bold mb-3">Nombre</label>
                <input required type="text" name="from_name" placeholder="Tu Nombre" className="border border-gray-600 w-full rounded-xl p-3 bg-gray-50" />
            </div>

            <div className="my-5">
                <label htmlFor="email" className="text-gray-600 block text-xl font-bold mb-3">Email</label>
                <input required type="email" name="user_email" id="email" placeholder="Tu Email" className="border border-gray-600 w-full rounded-xl p-3 bg-gray-50" />
            </div>
            <div className="my-5">
                <label htmlFor="password" className="text-gray-600 block text-xl font-bold mb-3">Cuentame lo que quieras...</label>
                <textarea required type="text" name="message" placeholder="Te escucho..." className="border border-gray-600 w-full rounded-xl p-3 bg-gray-50" />
            </div>
            <div className="flex items-start mb-6">
    <div className="flex items-center h-5">
      <input id="terms" type="checkbox" value="" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-[#426db3] dark:ring-offset-gray-800" required/>
    </div>
    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Estoy de acuerdo <a onClick={handleOpen} className="text-[#426db3] hover:cursor hover:cursor-pointer hover:underline dark:text-[#426db3]">con los términos y condiciones</a></label>
  </div>
            <input
                type="submit" value="Enviar" className="bg-[#426db3] text-white hover:cursor-pointer w-full font-bold py-3 px-4 rounded-xl md:w-full"
            />

    
        </form>
    </div>
    
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box className="shadow-sm rounded-md p-4" sx={style}>
  <Popover onClick={handleClose} className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#426db3]">
                        <span className="sr-only">Cerrar Menú</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover>
    <h1 className="text-gray-600 mt-4 px-4 font-black text-4xl ">Términos y condiciones del formulario de contacto</h1>
    
 
   
    <p className=" mt-4 px-4 text-xl text-gray-500">
    Cláusula para el formulario electrónico de contacto del sitio web <a className="font-medium text-[#426db3] hover:underline" href="https://portfolio.joseordaz.com/" target="_blank" rel="noopener">https://portfolio.joseordaz.com/</a>
            </p>
            <p className="mt-4 px-4 text-lg text-gray-500">
            Los datos de carácter personal que nos remita a través de este formulario electrónico de contacto quedarán incorporados en los sistemas de información de EmailJS.
            </p>
            <p className="mt-4 px-4 text-lg text-gray-500">
            EmailJS garantiza la confidencialidad de todos los datos facilitados. Además de los mínimos establecidos por la legislación, la recogida y tratamiento de los datos se efectúan bajo niveles de seguridad que impiden la pérdida o manipulación de los datos.
            </p>
            <p className="mt-4 px-4 text-lg text-gray-500">
            Mediante la indicación de sus datos, y de conformidad con lo establecido en el artículo 6 de la Ley Orgánica 15/1999, de 13 de diciembre, de Protección de Datos de Carácter Personal, usted otorga su consentimiento inequívoco a EmailJS para que proceda, en cumplimiento de los fines mencionados en el apartado anterior, al tratamiento de los datos personales facilitados.
            </p>
            <p className="mt-4 px-4 text-lg text-gray-500">
            Podrá ejercer sus derechos de acceso, rectificación, cancelación y oposición al tratamiento de sus datos, mediante las formas legalmente establecidas, enviando un correo electrónico a traves del formulario de contacto <a className="font-medium text-[#426db3] hover:underline" href="https://www.emailjs.com/contact-us/" target="_blank" rel="noopener">https://www.emailjs.com/contact-us/</a>. En ambos casos el afectado deberá acompañar una prueba de identidad valida en derecho, como por ejemplo, fotocopia de su documento nacional de identidad, pasaporte u otro documento válido que lo identifique, indicando claramente el derecho que desea ejercitar.
            </p>
            
            
            

  </Box>
</Modal>
    </>
  
  );
};

export default ContactUs;