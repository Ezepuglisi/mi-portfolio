import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './navbar'
import BarraLateral from './BarraLateral'
import { isMobile, isTablet } from 'react-device-detect'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ezequiel Puglisi',
  description: 'Generated by create next app',
}

const marginSection = 'ml-0 lg:ml-60 xl:ml-72 2xl:ml-72 '

// const [isBarraVisible, setIsBarraVisible] = useState(false)

console.log(isMobile)

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {
          isMobile || isTablet ?
          <div>Sitio en construccion para dispositivos mobiles</div>
          :
          <main className='h-screen'>
          <BarraLateral />
          <div className='flex flex-col flex-1 bg-[#121212] h-full'>
            <Navbar />
            <section className={`${marginSection} flex-1 overflow-hidden overflow-y-auto h-full`}>
              {/* Contenido de la sección */}
              {children}
            </section>
          </div>
        </main>
        }

      </body>
    </html>
  )
}
