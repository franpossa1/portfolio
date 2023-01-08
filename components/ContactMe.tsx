import React from 'react'
import { PhoneIcon, MapIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { SubmitHandler, useForm } from 'react-hook-form';
import Link from 'next/link';

type Props = {}
type Inputs = {
  name: string,
  email: string,
  subject: string,
  message: string,
};
export default function ContactMe({ }: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = formData =>{ 
  window.location.href=`mailto:franpossa1@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} Contact : ${formData.email}`
  
  }
  return (
    <div className='h-screen relative flex flex-col overflow-hidden  text-center md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center z-0'>

      <h3 className='absolute top-10 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Contacto</h3>


      <div className='flex flex-col space-y-10 '>
        <h4 className='text-4xl font-semibold text-center'>
          Contactame y {" "}
          <span className='decoration-[#F7AB0A]/50 underline'>Charlemos</span>
        </h4>


        <div className='space-y-10'>

          <div className='flex items-center space-x-5 justify-center'>
            <PhoneIcon className=' text-[#F7AB0A]/50 h-7 w-7 animate-pulse' />
            <p className='text-2xl'>+54 11 6601 6492</p>
          </div>
          <div className='flex items-center space-x-5 justify-center'>
            <EnvelopeIcon className=' text-[#F7AB0A]/50 h-7 w-7 animate-pulse' />
            <p className='text-2xl'>franpossa1@gmail.com</p>
          </div>

          <div className='flex items-center space-x-5 justify-center'>
            <MapIcon className=' text-[#F7AB0A]/50 h-7 w-7 animate-pulse' />
            <p className='text-2xl'>Buenos Aires, Argentina</p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
          <div className='flex space-x-2'>
            <input {...register('name')} placeholder='Nombre' type="text" className='contactInput' />
            <input {...register('email')} placeholder='Email' type="email" className='contactInput' />
          </div>

          <input {...register('subject')} placeholder='Asunto' type="text" className='contactInput' />
          <textarea {...register('message')} placeholder='Mensaje' className='contactInput' />
          <button type='submit' className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg'>Enviar</button>
        </form>

      </div>
   
    </div>
  )
}