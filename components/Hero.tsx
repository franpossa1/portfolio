import Link from 'next/link';
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
type Props = {}

export default function Hero({ }: Props) {
    const [text, count] = useTypewriter({
        words: ["Hi, my name is Francisco",
            "FullStack Developer",
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
                src="https://scontent.faep24-1.fna.fbcdn.net/v/t39.30808-6/299954835_10227135868921416_8899195597688991014_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=mDDUSEC8_UYAX8oEd26&_nc_oc=AQlbuo1Whum5sWgza3wPkzw0OMhdIhu2Vsh_ud06-IwCAYlP7qFJuS-AQvbxBxf9xM8&_nc_ht=scontent.faep24-1.fna&oh=00_AT_jXL3E8aXm7F9Ez2ot2eLlow20FHSgVhQes3oRy8EFrw&oe=6359EEAB"
                alt="" />
            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[10px]'> Angular | React | .NET | NodeJS</h2>
                <h1 className='text-5xl lg:text-6xl font-semibold scroll-px-10'><span>{text}</span> <Cursor cursorColor='#F7AB0A' />  </h1>


                <div className='pt-5'>
                    <Link href="#about">
                        <a ><button className='heroButton'>About</button></a>
                    </Link>

                    <Link href="#skills">
                        <a ><button className='heroButton'>Skills</button></a>
                    </Link>

                    <Link href="#experience">
                        <a ><button className='heroButton'>Experience</button></a>
                    </Link>
                    <Link href="#experience">
                        <a ><button className='heroButton'>Projects</button></a>
                    </Link>
                </div>
            </div>
        </div>
    )
}