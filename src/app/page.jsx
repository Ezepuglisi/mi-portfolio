'use client'
import React from 'react'
import { Divider, Image, NextUIProvider } from '@nextui-org/react'
import { Code } from "@nextui-org/react";
import Navbar from './navbar';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { tecnologias } from './tecnologias';

const page = () => {



  return (


    <div className='px-2 lg:px-32 py-2 text-white flex flex-col lg:flex-row lg:items-center justify-center h-auto lg:h-full gap-8'>
      <img width={400} src='/assets/perfil.jpg' className='rounded-xl border-2 border-[#98B4B2]' />
      <div className='flex-initial w-auto lg:w-[600px]'>
        <h2 className='text-[#98B4B2] font-bold'>Ezequiel Puglisi</h2>
        <p className='text-xl'>Soy un apasionado desarrollador front end con experiencia en el mundo de la programación. Mi habilidad para trabajar con tecnologías clave como JavaScript, React Node.js, Firebase y AWS me ha permitido crear soluciones innovadoras y escalables. Siempre estoy buscando desafío emocionantes para seguir creciendo y aprendiendo en este fascinante campo.
        </p>
        <div className='my-4 flex flex-row items-center gap-4'>
          <Link target='_blank' href="https://wa.me/5491124601196" passHref>
            <img width={36} src='assets/icons/whatsapp.png' />
          </Link>

          <Link target='_blank' href="https://linkedin.com/in/ezequiel-puglisi" passHref>
            <img width={36} src='assets/icons/linkedin.png' />
          </Link>

          <Link target='_blank' href="https://github.com/ezepuglisi" passHref>
            <img width={36} src='assets/icons/github.png' />
          </Link>

          <Link target='_blank' href="https://instagram.com/eze.puglisi" passHref>
            <img width={36} src='assets/icons/instagram.png' />
          </Link>

        </div>


      </div>

      <div className='flex flex-col lg:hidden'>
        <h2 className='mt-2 text-xl'>Habilidades</h2>
        <div className='w-20 text-xl border-b-2 border-[#98B4B2]'></div>

        <div className="design py-4 mt-5 flex flex-row flex-wrap">
          {
            tecnologias.map((tech, i) => {
              return <div key={i} className='flex items-center flex-row my-px w-1/2'><img width={20} src={`/assets/${tech.img}`} className='mr-px' /> <p>{tech.name}</p></div>

            })
          }
        </div>
      </div>

    </div>



  )
}

export default page