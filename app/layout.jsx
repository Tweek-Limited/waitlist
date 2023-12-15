import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tweek Waitlist',
  description: 'Tweek Waiting List, join the early beta release of Tweek',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
