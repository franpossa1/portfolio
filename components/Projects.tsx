import { motion } from 'framer-motion';
import React from 'react'
import { Project } from '../typings';

type Props = {
    projects:Project[]
}

export default function Projects({projects }: Props) {
    const projectcount = [1, 2, 3, 4, 5];
    return (
        <motion.div
            initial={{
                opacity: 0
            }}
            whileInView={{ opacity: 1 }}
            transition={{
                duration: 1.5
            }}
            className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>


            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Projectos</h3>

            <div className='relative w-fyll flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 '>
                {
                    projectcount.map((x, i) => {
                        return (<div key={i} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>

                            <motion.img
                                initial={{
                                    opacity: 0,
                                    y: -300
                                }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 1.2
                                }}
                                viewport={{ once: true }}

                                width={300} height={300} src="https://developers.turing.com/images/hero_easy_1.jpg" alt="" />

                            <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                                <h4 className='text-4xl font-semibold text-center'>
                                    <span className='underline decoration-[#F7AB0A]/50'>
                                        Caso de studio {i + 1} de {projectcount.length}
                                    </span>
                                </h4>
                                <p className='text-lg text-center md:text-left'>
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


                        </div>)
                    })
                }
            </div>
            <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>

        </motion.div>
    )
}