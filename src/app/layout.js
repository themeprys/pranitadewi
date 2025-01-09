import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
// import Bottomnav from './components/Bottomnav'
config.autoAddCss = false
import { Open_Sans } from 'next/font/google'

//👇 Configure our font object
const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
})


export const metadata = {
  title: 'Pranita Dewi - Penulis Puisi, Prosa Liris, dan Cerpenis',
  description: 'Pranita Dewi adalah seorang penulis Indonesia yang mengkhususkan diri dalam puisi, prosa liris, dan cerita pendek',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={openSans.className}>
      <body className="master_page">
        <div className='col-lg-8 mx-auto p-4 pt-md-5'>
        <Header /> 
        {children}
        {/* <Bottomnav /> */}
        <Footer />
        </div>        
        </body>
    </html>
  )
}
