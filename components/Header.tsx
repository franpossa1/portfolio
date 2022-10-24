import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion"
type Props = {}

export default function Header({ }: Props) {
  return (
    
    <header className='sticky top-0 p-5 flex items-start 
    justify-between max-w-7xl mx-auto z-20'
  

    >
        {/*Social Icons*/}
      <motion.div 
      initial={{
        x:-500,
        opacity: 0,
        scale: 0.5
      }}
      animate ={{
        x:0,
        opacity:1,
        scale:1
      }}
      transition={{
        duration:1.5
      }}
      className='flex flex-row items-center'>


        <SocialIcon bgColor='transparent' fgColor='gray'
          url="https://www.linkedin.com/in/franpossa1/"  target='_blank'/>
        <SocialIcon bgColor='transparent' fgColor='gray'
          url="https://github.com/franpossa1" target='_blank' />
      </motion.div>
      <motion.div
       initial={{
        x:500,
        opacity: 0,
        scale: 0.5
      }}
      animate ={{
        x:0,
        opacity:1,
        scale:1
      }}
      transition={{
        duration:1.5
      }}
      
      className='flex flex-row items-center text-gray-300 cursor-pointer'>

        <SocialIcon bgColor='transparent' fgColor='gray' network='email'
          url="franpossa1@gmail.com" />

        <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>
          Get in touch!
        </p>

      </motion.div>


    </header>
  )
}