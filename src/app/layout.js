import './globals.css'
import './styles/bootstrap.css'
import dynamic from 'next/dynamic'
import Header from './components/Header'
import Footer from './components/Footer'
import Breadcrumb from './components/Breadcrumb'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
// import Bottomnav from './components/Bottomnav'
// test deployment
config.autoAddCss = false
import { Lato } from 'next/font/google'

//👇 Configure our font object with preload
const lato = Lato({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '700'],
  preload: true,
  adjustFontFallback: true,
  variable: '--font-lato',
})

// Dynamically import Bottomnav
const Bottomnav = dynamic(() => import('./components/Bottomnav'), {
  loading: () => <div className="loading-placeholder" />,
  ssr: false
})

export const metadata = {
  title: 'Pranita Dewi - Penulis Puisi, Prosa Liris, dan Cerpenis',
  description: 'Pranita Dewi adalah seorang penulis Indonesia yang mengkhususkan diri dalam puisi, prosa liris, dan cerita pendek',
}

// Main layout component with Lato font
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${lato.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`master_page ${lato.className}`}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <Header />
              <Breadcrumb />
              <main className="py-4">
                {children}
              </main>
              <Bottomnav />
              <Footer />
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
