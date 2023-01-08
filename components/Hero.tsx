import Link from 'next/link';
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { urlFor } from '../sanity';
import { PageInfo } from '../typings';
import BackgroundCircles from './BackgroundCircles';
type Props = {pageInfo:PageInfo}

export default function Hero({ pageInfo}: Props) {
    const url_Hero = "https://scontent.faep24-2.fna.fbcdn.net/v/t39.30808-6/225293735_10225069267697677_6069929135585573118_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=174925&_nc_ohc=I83zxhA_RyIAX-mgfRD&_nc_ht=scontent.faep24-2.fna&oh=00_AfCtUwfEgp02YgbAcq-I6c_Deb-xStmYmdwGksK_d5uD3w&oe=636DB706";
    const [text, count] = useTypewriter({
        words: [`Mi nombre es ${pageInfo?.name.split(" ")[0].trim()}`,
    `${pageInfo?.role}`,
            "Desarrollador FullStack"],
        loop: true,
        delaySpeed: 2000,
    })
    return (
        <div
            className='h-screen flex flex-col space-y-8 items-center 
        justify-center text-center overflow-hidden'>
            <BackgroundCircles />

            <img className='relative rounded-full h-32 w-32 mx-auto object-cover'
                src={urlFor(pageInfo?.profilePic).url()}
                alt="" />
            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[10px]'> Angular | React | .NET | NodeJS</h2>
                <h1 className='text-5xl lg:text-6xl font-semibold scroll-px-10'><span>{text}</span> <Cursor cursorColor='#F7AB0A' />  </h1>


                <div className='pt-5'>
                    <Link href="#about">
                        <a ><button className='heroButton'>Acerca De</button></a>
                    </Link>

                    <Link href="#skills">
                        <a ><button className='heroButton'>Skills</button></a>
                    </Link>

                    <Link href="#experience">
                        <a ><button className='heroButton'>Experiencia</button></a>
                    </Link>
                    <Link href="#projects">
                        <a ><button className='heroButton'>Projectos</button></a>
                    </Link>
                </div>
            </div>
        </div>
    )
}