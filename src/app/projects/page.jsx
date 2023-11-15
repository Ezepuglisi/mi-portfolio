'use client'
import { Card, CardBody, CardHeader, NextUIProvider } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {

    const projects = [
        {
            technologies: ['html', 'css', 'javascript', 'bootstrap'],
            name: 'Timotheé Dezahrt',
            img: 'timothee.png',
            description: '',
            type: 'Study project',
            url:'https://ezepuglisi.github.io/TimotheeDezahrt-JS/'
        },
        {
            technologies: ['html', 'css', 'javascript', 'bootstrap'],
            name: 'Ahorcadus',
            img: 'ahorcadusv2.png',
            type: 'Study project',
            url:'https://ahorcadus-v2.vercel.app/'
        },
        {
            technologies: ['html', 'css', 'javascript', 'react.js', 'node.js'],
            name: 'Screen Recorder',
            img: 'screenrecorder.png',
            type: 'Study project',
            url:'https://heliceagencia.github.io/screenrecorder/'
        },
        // {
        //     technologies: ['html', 'css', 'javascript', 'react.js', 'next.js', 'node.js', 'mongoDB'],
        //     name: 'Echyzos Disfraces',
        //     img: 'ahorcadus.png',
        //     type: 'Freelance project'
        // },
        {
            technologies: ['html', 'css', 'chakraUi', 'javascript', 'react.js', 'firebase'],
            name: 'Indumentaria Zona oeste',
            img: 'ind-zonaoeste.png',
            type: 'Freelance project',
            url:'https://indumentaria-zonaoeste.vercel.app/'
        }
    ]

    return (
        <div className='px-2 lg:px-32 py-10 text-white flex flex-wrap flex-row items-center h-auto gap-8'>
            {projects.map((p, i) => {
                return (
                    <div className="p-4 bg-transparent my-4 w-[600px] shadow-md shadow-[#98B4B2] rounded-xl" key={i}> {/* Agregada la clase shadow-md para la sombra */}
                        <div className="pb-0 pt-2 px-4 flex-col items-start">
                            <p className="text-tiny uppercase font-bold text-[#98B4B2] my-2">{p.type}</p>
                            <div className='max-w-[250px] overflow-hidden my-2'> {/* Limita el ancho del contenedor de tecnologías */}
                                <div className='flex items-center flex-wrap'>
                                    {p.technologies.map((tech, i) => {
                                        return (<img key={i} width={16} className='mr-2 text-xs font-light text-gray-300' src={`/assets/icons/${tech}.png`} />)
                                    })}
                                </div>
                            </div>
                            <h4 className="font-bold text-large my-2">{p.name}</h4>
                        </div>
                        <div className="overflow-visible py-2">
                            <Link target='_blank' href={p.url} passHref>
                                <img
                                    alt="Card background"
                                    className="object-cover rounded-xl max-w-full"
                                    src={`/assets/${p.img}`}
                                    width={600}
                                    height={800}
                                />
                            </Link>
                        </div>
                    </div>
                )
            })}
        </div>


    )
}

export default page