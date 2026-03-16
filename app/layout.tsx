import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://eldoctorbarber.vercel.app'),
  title: 'El Doctor Barber Shop | Cairo, Egypt',
  description:
    'Premium barbershop in Cairo. Haircuts, beard grooming & styling. Book your appointment on WhatsApp.',
  keywords: 'barber cairo, barbershop egypt, haircut cairo, el doctor barber',
  openGraph: {
    title: 'El Doctor Barber Shop',
    description: 'Premium barbershop in Cairo, Egypt.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    locale: 'en_EG',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HairSalon',
  name: 'El Doctor Barber Shop',
  image: 'https://eldoctorbarber.vercel.app/og-image.jpg',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Full street address',
    addressLocality: 'Cairo',
    addressCountry: 'EG',
  },
  telephone: '+20XXXXXXXXXX',
  url: 'https://eldoctorbarber.vercel.app',
  openingHours: ['Mo-Sa 10:00-23:00', 'Su 12:00-21:00'],
  sameAs: [
    'https://www.facebook.com/p/El-Doctor-Barber-shop-100089560577635/',
    'https://www.instagram.com/eldoctor_barbershop',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body bg-brand-dark text-brand-cream antialiased">
        {children}
      </body>
    </html>
  )
}
