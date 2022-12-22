import { motion, MotionConfig } from 'framer-motion'
import React from 'react'

type Props = {
    directionLeft?: boolean
}

export default function SkillU({directionLeft}: Props) {
  return (
    <div className='group relative flex cursor-pointer '>
     <motion.img
     
     src="https://scontent.faep24-2.fna.fbcdn.net/v/t39.30808-6/225293735_10225069267697677_6069929135585573118_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=174925&_nc_ohc=I83zxhA_RyIAX-mgfRD&_nc_ht=scontent.faep24-2.fna&oh=00_AfCtUwfEgp02YgbAcq-I6c_Deb-xStmYmdwGksK_d5uD3w&oe=636DB706" 
     alt="" 
     initial={{
        x: directionLeft ? -200 : 200,
        opacity:0
     }}
     transition={{duration:1}}
     whileInView={{opacity:1,x:0}}
     className="rounded-full boder border-gray-500 object-cover w-24 
     h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
     />   
     <div className=' absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
        <div className='flex items-center justify-center h-full'>
            <p className='text-3xl font-bold text-black opacity-100'>100%</p>
        </div>
     </div>
        
    </div>
  )
}