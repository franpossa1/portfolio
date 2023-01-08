import { motion } from 'framer-motion'
import React from 'react'
import { urlFor } from '../sanity'
import { Experience } from '../typings'

type Props = {experience:Experience}

export default function ExperienceCard({ experience}: Props) {
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

                className='w-32 h-32 rounded-full xl:w-[300px] xl:h-[200px] object-scale-down object-center'
                src={urlFor(experience.companyImage).url()} alt="" />

            <div className='px-0 md:px-10'>

                <h4 className='text-2xl font-light'>{experience.company}</h4>
                <p className='font-bold text-2xl mt-1'>{experience.jobTitle}</p>

                <div className='flex space-x-2 my-2'>
                    {/*Stack of Tecnologies*/}
                    
                    {experience.technologies.map((tech)=>{
                        return <img src={urlFor(tech.image).url()} key={tech._id} 
                        className='h-10 w-10 rounded-full' alt="" /> 
                    })}
           </div>
                <p  className='uppercase py-5 text-gray-300'>{new Date(experience.dateStarted).toDateString()} -{" "} {experience.isCurrentlyWOrkingHere? "Actualmente" : new Date(experience.dateEnded
                    ).toDateString()}</p>
                <ul className='list-disc space-y-4 ml-5 text-lg'>
                {experience.points.map((point,i)=>{
                    return <li key={i}>{point}</li>
                })}
                   {/*Point debo tener cada uno d elas cosas que hago en el laburo*/} 
                </ul>
            </div>
        </article>
    )
}