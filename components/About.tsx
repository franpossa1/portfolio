import { motion, MotionConfig } from 'framer-motion'
import React from 'react'
import { urlFor } from '../sanity'
import { PageInfo } from '../typings'

type Props = {pageInfo:PageInfo}

function About({ pageInfo }: Props) {
    return (
        <motion.div
            initial={{
                opacity: 0
            }}
            whileInView={{ opacity: 1 }}
            transition={{
                duration: 1.5
            }}

            className=' flex flex-col relative  h-screen  text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>

            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                About</h3>
            <motion.img
                initial={{
                    x: -200
                }}
                transition={{
                    duration: 1.2
                }}
                whileInView={{ x: 0 }}
                viewport={{ once: true }}
              src={urlFor(pageInfo.heroImage).url()}
                className='-mb-20 p-20 md:mb-0 flex-shrink-0 w-70 h-56 object-cover  md:rounded-lg md:w-75 md:w-95 xl:w-[700px] xl:h-[600px]'

            />
            <div>
                <h4 className='text-4xl font-semibold'>A little of <span className='underline decoration-[#F7AB0A]/50'>Me</span> </h4>
                <p className='text-base '>
               {pageInfo?.backgroundInformation}
                </p>
            </div>


        </motion.div>
    )
}

export default About