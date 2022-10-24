import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'



const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0  ' >

      {/* Head: here goes all the metaData of the app, the title fav icon and meta*/}
      <Head>
        <title >Francisco Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
      {/*Header*/}
      <Header />
      {/*Hero*/}
      <section id='hero' className='snap-center'> 
<Hero/>
      </section>
      {/*About*/}
      {/*Experiencie*/}
      {/*Skills*/}
      {/*Projects*/}
      {/*COntactme*/}


    </div>
  )
}

export default Home
