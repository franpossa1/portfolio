import { motion, MotionConfig } from 'framer-motion'
import React from 'react'

type Props = {}

function About({ }: Props) {
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
                src="https://scontent.faep24-1.fna.fbcdn.net/v/t1.6435-9/34755374_10215317693114407_3064840730590576640_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=e3f864&_nc_ohc=W0Ssy9HNPBEAX86QyUC&_nc_ht=scontent.faep24-1.fna&oh=00_AfCf_rkP55UTA5-0dN4oyNk0wcdh5ra-50GStbEWIQwmYQ&oe=6382778A"
                className='-mb-20 p-20 md:mb-0 flex-shrink-0 w-70 h-56 object-cover  md:rounded-lg md:w-75 md:w-95 xl:w-[700px] xl:h-[600px]'

            />
            <div>
                <h4 className='text-4xl font-semibold'>A little of <span className='underline decoration-[#F7AB0A]/50'>Me</span> </h4>
                <p className='text-base '>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Consectetur quisquam expedita officia dolorem. Ullam harum deserunt consequuntur quo ex itaque eum,
                    molestias repellendus culpa! Id delectus vero nihil explicabo inventore!   Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Consectetur quisquam expedita officia dolorem. Ullam harum deserunt
                    consequuntur quo ex itaque eum, molestias repellendus culpa! Id delectus vero nihil explicabo inventore!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur quisquam expedita officia dolorem.
                    Ullam harum deserunt consequuntur quo ex itaque eum, molestias repellendus culpa! Id delectus vero
                    nihil explicabo inventore!
                </p>
            </div>


        </motion.div>
    )
}

export default About