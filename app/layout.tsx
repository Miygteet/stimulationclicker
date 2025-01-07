import './globals.css'
import { Inter } from 'next/font/google'
import Header from '../components/Header'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Stimulation Clicker - The Ultimate Clicker Game Experience',
  description: 'Dive into the chaotic world of Stimulation Clicker, a satirical online clicker game that mirrors the overstimulation of modern internet life. Click, upgrade, and experience digital overload!',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
       <link rel="alternate" hrefLang="x-default" href="https://stimulationclicker.xyz/"/>
       <link rel="canonical" href="https://stimulationclicker.xyz/"/>
       <script async src="https://www.googletagmanager.com/gtag/js?id=G-75CH6DCGDY"></script>
        <script>
           {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-75CH6DCGDY');
          `}
        </script>
        
     </head>
     
      <body className={`${inter.className} bg-gray-900 text-white`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

