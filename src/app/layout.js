import { Orbitron, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar' ; 
import { HireProvider } from '../components/HireProvider'
import Starfield from '../components/Starfield';
import Footer from '../components/Footer'
import CursorTrail from '../components/CursorTrail'
                                               

// headings: wide, spaced, "space" look
const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['500', '700', '900'],
  variable: '--font-orbitron',
})

// body text: clean and modern
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

// small labels like MISSION_LOG
const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
})

export const metadata = {
  title: 'Wissal Ouboujemaa',
  description: 'Fullstack & Mobile Developer',
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={` ${orbitron.variable} ${spaceGrotesk.variable} ${jetbrains.variable}`}
    >
    <body>
   <HireProvider>
    <Starfield />
    <Navbar />
    {children}                                                       
    <Footer />
    <CursorTrail />
    </HireProvider>
    </body>
   </html>
  )
}