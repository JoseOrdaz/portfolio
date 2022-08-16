import React from 'react'

export const alerta = ({alerta}) => {
  return (
    <div className={`${alerta.error ? ' from-red-400 to-red-600' : ' from-green-400 to-green-600'}
    
    bg-gradient-to-r text-white font-bold py-3 px-4 rounded-xl md:w-full`}>

    {alerta.msg}</div>
  )
};
export default alerta;