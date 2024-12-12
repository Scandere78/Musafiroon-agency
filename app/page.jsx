"use client"

import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import Image from 'next/image';
import Link from 'next/link';

const Home = () => {
  return (
    <>
    <header className='min-h-[70vh] bg-[url(/backgrounds/mecque-3.png)] bg-cover relative z-10 bg-center'>
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-tl to-[#00000083] from-transparent -z-10'></div>
      <div className='max-w-[900px] m-auto py-12'>
        <span className='text-white text-center block mt-24 font-playfair'>VOTRE CHEMIN POUR L'AVENIR</span>
        <h1 className='text-white text-5xl text-center m-auto font-playfair mt-6'>Votre Expérience Omra, Réinventée et Personnalisée</h1>
        <p className='text-white texte-center mt-8'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores quam ullam eligendi reprehenderit itaque magni dolorum quisquam repellendus quaerat numquam, quas obcaecati, dolore cum molestias nostrum quo ex debitis a!</p>
      <div className='flex items-center justify-center gap-4 mt-8'>
      <div className='flex items-center w-fit'> 
        <Image 
        className='rounded-full' 
        src={"/assets/profil-picture/img1.png"}
        alt='profil-pictures'
        width={35}
        height={35}
        />
        <Image
        className='rounded-full'
        src={"/assets/profil-picture/img4.png"}
        alt='profil-pictures'
        width={35}
        height={35}
        />
         <Image 
        className='rounded-full'
        src={"/assets/profil-picture/img3.png"}
        alt='profil-pictures'
        width={35}
        height={35}
        />
         <Image 
        className='rounded-full'
        src={"/assets/profil-picture/img2.png"}
        alt='profil-pictures'
        width={35}
        height={35}
        />
        </div>
        <p className='text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>

      </div>
      <div className='flex gap-2 justify-center items-center mt-6 relative z-20'>
        <button type='button' className="text-white bg-[#0b132b] hover:bg-[#1b263b] py-2 rounded flex items-center gap-4 hover:gap-8 px-8 duration-300">
          Explore les Packs
          <FaArrowRight />
        </button>
        <button className="text-white bg-[#0b132b] hover:bg-[#1b263b] py-2 px-4 rounded transition duration-300">
          En s'avoir plus
        </button>
      </div>

      </div>
    </header>
    <main className='min-h-[300px] flex flex-wrap justify-center gap-[1px]'>
      <div className='basis-[300px] p-8 h-[250px] grow  bg-bleu-nuit'>
        <h3 className='text-white font-playfair m-8 text-xl'>Lorem ipsum dolor sit amet consectetur</h3>
        <p className='text-white text-xs font-serif'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ab optio vero nesciunt odit fugit iure, iusto, ad animi tempore</p>
        <Link href="/">Visa Arabi-Saoudite</Link>
      </div>
      <div className='basis-[300px] p-8 h-[250px] grow  bg-bleu-nuit'>
      <h3 className='text-white font-playfair m-8 text-xl'>Lorem ipsum dolor sit amet consectetur</h3>
      <p className='text-white text-xs font-serif'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ab optio vero nesciunt odit fugit iure, iusto, ad animi tempore</p>
      <Link href="/">Visa Arabi-Saoudite</Link>
      </div>
      <div className='basis-[300px] p-8 h-[250px] grow bg-orange-100'>
      <h3 className='text-black font-playfair m-8 text-xl'>Lorem ipsum dolor sit amet consectetur</h3>
      <p className='text-black text-xs font-serif'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ab optio vero nesciunt odit fugit iure, iusto, ad animi tempore</p>
      <Link href="/">Visa Arabi-Saoudite</Link>
      </div>

    </main>
    </>
  )
}

export default Home