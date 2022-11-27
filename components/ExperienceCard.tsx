import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

export default function ExperienceCard({ }: Props) {
    return (
        <article className='flex flex-col rounded-lg  items-center space-y-7 
        flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 
        hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 
        overflow-hidden'>
            <motion.img
                initial={{
                    y: -100,
                    opacity: 0
                }}
                transition={{
                    duration: 1.2
                }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
                src="https://upload.wikimedia.org/wikipedia/commons/e/ee/.NET_Core_Logo.svg" alt="" />

            <div className='px-0 md:px-10'>

                <h4 className='text-4xl font-light'>Altromondo S.A</h4>
                <p className='font-bold text-2xl mt-1'>Full Stack Developer</p>

                <div className='flex space-x-2 my-2'>
                    {/*Stack of Tecnologies*/}
                    <img src="https://upload.wikimedia.org/wikipedia/commons/e/ee/.NET_Core_Logo.svg" className='h-10 w-10 rounded-full' alt="" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/e/ee/.NET_Core_Logo.svg" className='h-10 w-10 rounded-full' alt="" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/e/ee/.NET_Core_Logo.svg" className='h-10 w-10 rounded-full' alt="" />
                </div>
                <p className='uppercase py-5 text-gray-300'>Fecha inicio - Actualmente</p>
                <ul className='list-disc space-y-4 ml-5 text-lg'>
                    <li>Lista de CosaLista de CosaLista de Cosas</li>
                    <li>Lista de CoLista de CosaLista de CosaLista de Cosasas</li>
                    <li>Lista de Lista de CosaLista de CosaLista de CosaCosas</li>
                    <li>Lista de Lista de CosaLista de CosaLista de CosaCosas</li>
                </ul>
            </div>
        </article>
    )
}