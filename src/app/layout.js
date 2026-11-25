import { Playfair_Display } from 'next/font/google'
import './globals.css'
import Maintenance from '../components/Maintenance'
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-playfair',
})
const isMaintenance = process.env.MAINTENANCE_MODE === 'true'
export const metadata = {
  title: 'Wissal Ouboujemaa',
  description: 'Fullstack & Mobile Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={playfair.variable}>
      <body>{isMaintenance ? <Maintenance /> : children}</body>
    </html>
  )
}