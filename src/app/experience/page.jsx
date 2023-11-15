import React from 'react'

const page = () => {
    return (
        <div className='px-2 lg:px-32 py-10 text-white flex-col items-center justify-center h-auto gap-8'>
            {/* <img width={400} src='/assets/perfil.jpg' className='rounded-xl border-2 border-[#98B4B2]' /> */}
            <div className='flex-initial'>
                <h2 className='text-[#98B4B2] font-bold text-lg'>nular.</h2>
                <p className='text-xs font-light'>jun-2022 | sep-2023</p>

                <p className='text-xl mt-3'>Desarrollo full-stack de una herramienta SaaS para experiencia de usuario.</p>
                <p className='text-xl mt-3'>Tareas realizadas:</p>
                <ul className='mt-3 flex flex-col gap-2'>
                    <li><span className='text-xs'>○</span> Desarrollo de dos aplicaciones front-end en React.js y Redux</li>
                    <li><span className='text-xs'>○</span> Diseño de componentes utilizando el CSS de Chakra UI</li>
                    <li><span className='text-xs'>○</span> Manejo de la Web API de media recorder para el grabado de sesiones de las investigaciones</li>
                    <li><span className='text-xs'>○</span> Implementación de Firebase como base de datos y AWS S3 para almacenamiento de multimedia.</li>
                    <li><span className='text-xs'>○</span> Creación de un mapa de calor en base a los datos que brindaba la investigación realizada.</li>
                </ul>
            </div>

            <div className='w-96 text-xl border-b-2 border-[#98B4B2] my-10 mx-auto'></div>

            <div className='flex-initial'>
                <h2 className='text-[#98B4B2] font-bold text-lg'>Godixital</h2>
                <p className='text-xs font-light'>mar-2021 | jun-2022</p>

                <p className='text-xl mt-3'>Desarrollador web de una agencia de marketing.</p>
                <p className='text-xl mt-3'>Tareas realizadas:</p>
                <ul className='mt-3 flex flex-col gap-2'>
                    <li><span className='text-xs'>○</span> Diseño y desarrollo de landing pages atractivas y funcionales como parte de campañas de marketing.</li>
                    <li><span className='text-xs'>○</span> HTML, CSS y Javascript como tecnologías principales para el desarrollo de las páginas.</li>
                </ul>
            </div>

            <div className='w-96 text-xl border-b-2 border-[#98B4B2] my-10 mx-auto'></div>

            <div className='flex-initial'>
                <h2 className='text-[#98B4B2] font-bold text-lg'>Coderhouse</h2>
                <p className='text-xs font-light'>feb-2021 | jun-2022</p>

                <p className='text-xl mt-3'>Tutoría en los cursos de Javascript.</p>
                <p className='text-xl mt-3'>Tareas realizadas:</p>
                <ul className='mt-3 flex flex-col gap-2'>
                    <li><span className='text-xs'>○</span> Asistencia en clases online a consultas.</li>
                    <li><span className='text-xs'>○</span> Corrección de desafios semanales.</li>
                    <li><span className='text-xs'>○</span> Corrección de desafios integradores.</li>
                    <li><span className='text-xs'>○</span> Dictado de clases de repaso sobre un tópico en específico.</li>


                </ul>
            </div>
        </div>
    )
}

export default page