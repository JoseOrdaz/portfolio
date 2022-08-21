import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Alerta from './alerta';

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

  return (
   
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
    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Estoy de acuerdo <a href="#" className="text-[#426db3] hover:underline dark:text-[#426db3]">con los términos y condiciones</a></label>
  </div>
            <input
                type="submit" value="Enviar" className="bg-[#426db3] text-white hover:cursor-pointer w-full font-bold py-3 px-4 rounded-xl md:w-full"
            />

    
        </form>
    </div>
  
  );
};

export default ContactUs;