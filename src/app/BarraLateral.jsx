'use client'
import React from 'react'


const BarraLateral = () => {

    const tecnologias = [
        {
            name: 'HTML',
            category: 'design',
            img:'icons/html.png'
        },
        {
            name: 'CSS',
            category: 'design',
            img:'icons/css.png'
        },
        {
            name: 'Chakra UI',
            category: 'design',
            img:'icons/chakraui.png'
        },
        {
            name: 'Bootstrap CSS',
            category: 'design',
            img:'icons/bootstrap.png'
        },
        {
            name: 'Tailwind CSS',
            category: 'design',
            img:'icons/tailwind.png'
        },
        {
            name: 'JavaScript',
            category: 'code',
            img:'icons/javascript.png'
        },
        {
            name: 'TypeScript',
            category: 'code',
            img:'icons/typescript.png'
        },
        {
            name: 'React.js',
            category: 'code',
            img:'icons/react.js.png'
        },
        {
            name: 'Next.js',
            category: 'code',
            img:'icons/next.js.png'
        },
        {
            name: 'Node.js',
            category: 'code',
            img:'icons/node.js.png'
        },
        {
            name: 'Firebase',
            category: 'db',
            img:'icons/firebase.png'
        },
        {
            name: 'MongoDB',
            category: 'db',
            img:'icons/mongodb.png'
        },
        {
            name: 'Amazon Web Services',
            category: 'db',
            img:'icons/aws.png'
        },
        {
            name: 'Illustrator',
            category: 'software',
            img:'icons/illustrator.png'
        },
        {
            name: 'Photoshop',
            category: 'software',
            img:'icons/photoshop.png'
        },
        {
            name: 'Figma',
            category: 'software',
            img:'icons/figma.png'
        },
    ];


    const responsiveBarra = 'w-0 lg:w-60 xl:w-72 2xl:w-72'
    const visibilityBarra = 'hidden lg:flex xl:flex 2xl:flex'


    return (
        <div className={`${visibilityBarra} items-center flex-col h-full fixed ${responsiveBarra} z-10 top-0 left-0 overflow-x-hidden bg-[#272727] p-9 text-white`}>
            <img src='/assets/perfil-square.jpeg' width='69' height='69' className='rounded-full' />

            <h2 className='mt-14 text-xl'>Habilidades</h2>
            <div className='w-20 text-xl border-b-2 border-[#98B4B2]'></div>

            <div>

                <div className="design py-4 mt-5">
                    {
                        tecnologias.map((tech, i) => {
                            if(tech.category === 'design'){
                                return <div key={i} className='flex items-center flex-row gap-2 my-px'><img width={20} src={`/assets/${tech.img}`} /> <p>{tech.name}</p></div>
                            }
                        })
                    }
                </div>
                <hr />
                <div className="code py-4">
                    {
                        tecnologias.map((tech, i) => {
                            if(tech.category === 'code'){
                                return <div key={i} className='flex items-center flex-row gap-2 my-px'><img width={20} src={`/assets/${tech.img}`} /> <p>{tech.name}</p></div>
                            }
                        })
                    }
                </div>
                <hr />

                <div className="db py-2">
                    {
                        tecnologias.map((tech, i) => {
                            if(tech.category === 'db'){
                                return <div key={i} className='flex items-center flex-row gap-2 my-px'><img width={20} src={`/assets/${tech.img}`} /> <p>{tech.name}</p></div>
                            }
                        })
                    }
                </div>
                <hr />

                <div className="software py-4">
                    {
                        tecnologias.map((tech, i) => {
                            if(tech.category === 'software'){
                                return <div key={i} className='flex items-center flex-row gap-2 my-px'><img width={20} src={`/assets/${tech.img}`} /> <p>{tech.name}</p></div>
                            }
                        })
                    }
                </div>
            </div>

            {/* <h2 className='mt-14 text-xl'>Contacto</h2>
            <div className='w-20 text-xl border-b-2 border-[#98B4B2]'></div>
            <div className="contacto flex items-start flex-col gap-2 py-5">
                <a href='mailto:ezepuglisi@gmail.com'>ezepuglisi@gmail.com </a>
                <a>+54 9 11-2460-1196</a>
                <a href='https://linkedin.com/in/ezequiel-puglisi' target='_blank'>Ezequiel Puglisi</a>
                <a href='https://github.com/ezepuglisi' target='_blank'>Ezepuglisi</a>

            </div> */}

        </div>
    )
}

export default BarraLateral