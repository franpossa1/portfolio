import { motion } from 'framer-motion'
import React from 'react'
import Skill from './Skill'

type Props = {}

export default function Skills({ }: Props) {
    return (
        <motion.div className=' flex relative flex-col text-center 
    md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen    justify-center 
    xl:space-y-0 mx-auto items-center overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 '>

            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Habilidades</h3>


            <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'> 
            ¡Descubre cada habilidad!</h3>
            <div className='grid grid-cols-4 gap-5 '>
            <Skill/>    
            <Skill/>  
            <Skill/>  
            <Skill/>  
            <Skill/>  
            <Skill/>  

            <Skill/>  
            <Skill/>  
            <Skill/>  
            <Skill/>  
            <Skill/>  


               
               
                      </div>
        </motion.div>
    )
}