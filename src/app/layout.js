import { Playfair_Display, Orbitron, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar' ; 
import { HireProvider } from '../components/HireProvider'
import Starfield from '../components/Starfield';

// old font: kept until the old components are replaced
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-playfair',
})

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
      className={`${playfair.variable} ${orbitron.variable} ${spaceGrotesk.variable} ${jetbrains.variable}`}
    >
      <body>
        <HireProvider>
         <Starfield />
         <Navbar />
         {children}
        </HireProvider>
      </body>
    </html>
  )
}