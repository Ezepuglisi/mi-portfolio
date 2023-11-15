'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {

    const pathname = usePathname()

    const routes = [
        {
            text: 'Home',
            route: '/'
        },
        // {
        //     text: 'Sobre mí',
        //     route: '/aboutme'
        // },
        {
            text: 'Experiencia',
            route: '/experience'
        },
        {
            text:'Proyectos',
            route:'/projects'
        }
    ]


    return (
        <nav className="flex items-center lg:items-end justify-evenly flex-col gap-8 px-8 text-white py-5 border-b-2 border-[#98B4B2]">
            {/* <div className='flex items-center gap-5'>
                <img src='/assets/perfil-square.jpeg' width='48' height='48' className='rounded-full' />
                <p>Ezequiel Puglisi</p>
            </div> */}

            <ul className='flex gap-8 flex-row'>
                {routes.map((e, i) => {
                    return (
                        <li key={i} className={`px-2 py-1 cursor-pointer rounded-xl ${pathname === e.route ? 'bg-green-200 text-black' : 'hover:bg-green-200/75 hover:text-black transition-all'}`}>
                            <Link href={e.route}>
                                {`${e.text}`}
                            </Link>
                        </li>
                    )
                })}
            </ul>

        </nav>
    )
}

export default Navbar
