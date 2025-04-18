import './globals.css'
import './styles/bootstrap.css'
import dynamic from 'next/dynamic'
import Script from 'next/script'
import Header from './components/Header'
import Footer from './components/Footer'
import Breadcrumb from './components/Breadcrumb'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
// import Bottomnav from './components/Bottomnav'
// test deployment
config.autoAddCss = false
import { Lato } from 'next/font/google'
import { headers } from 'next/headers'

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

// Base URL configuration
const baseUrl = 'https://pranitadewi.vercel.app'

// Generate metadata for the page
export async function generateMetadata() {
  const headersList = headers()
  const pathname = headersList.get('x-pathname') || '/'
  const canonicalUrl = `${baseUrl}${pathname}`

  return {
    title: 'Pranita Dewi - Penulis Puisi, Prosa Liris, dan Cerpenis',
    description: 'Pranita Dewi adalah seorang penulis Indonesia yang mengkhususkan diri dalam puisi, prosa liris, dan cerita pendek',
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      url: canonicalUrl,
      siteName: 'Pranita Dewi',
      locale: 'id_ID',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Pranita Dewi - Penulis Puisi, Prosa Liris, dan Cerpenis',
      description: 'Pranita Dewi adalah seorang penulis Indonesia yang mengkhususkan diri dalam puisi, prosa liris, dan cerita pendek',
    },
  }
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Pranita Dewi",
              "url": baseUrl,
              "description": "Pranita Dewi adalah seorang penulis Indonesia yang mengkhususkan diri dalam puisi, prosa liris, dan cerita pendek",
              "jobTitle": "Penulis",
              "knowsAbout": ["Puisi", "Prosa Liris", "Cerita Pendek"],
              "sameAs": [
                baseUrl
              ]
            })
          }}
        />
      </head>
      <body className={`master_page ${lato.className}`}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-JDD4LN7B6W"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JDD4LN7B6W');
          `}
        </Script>
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
