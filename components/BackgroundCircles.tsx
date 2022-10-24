import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

export default function BackgroundCircles({ }: Props) {
    return (
        <motion.div
            initial={{
                opacity: 0,

            }}
            animate={{
                scale: [1, 2, 2, 3, 1],
                opacity: [0.1, .2, .4, .8, 1],
                borderRadius: ['20%', '20%', '50%', '80%', '20%']
            }}
            transition={{
                duration: 2.5
            }}
            className='relative flex justify-center items-center'>

            <div className='absolute border border-[#333333] rounded-full 
                        h-[200px] w-[200px] mt-52 animate-ping' />

            <div className='rounded-full border border-[#333333]  absolute
                        h-[300px] w-[300px] mt-52 animate-ping' />

            <div className='rounded-full border-[#F7AB0A]  absolute
                        h-[500px] w-[500px] mt-52 animate-ping' />

            <div className='rounded-full  border-[#333333] opacity-20  absolute
                        h-[650px] w-[650px] mt-52 animate-ping' />

            <div className='rounded-full  border-[#333333]  absolute
                        h-[800px] w-[800px] mt-52 animate-ping' />


        </motion.div>
    )
}