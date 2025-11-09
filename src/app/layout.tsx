import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Alcaraz Construction - Professional Construction & Remodeling Services in San Diego',
  description: 'Professional construction, remodeling, concrete work, drywall, electrical, plumbing, and fencing services in San Diego. Quality craftsmanship at competitive prices.',
  keywords: ['construction', 'remodeling', 'concrete work', 'drywall', 'electrical', 'plumbing', 'fencing', 'San Diego construction', 'home improvement', 'renovation'],
  authors: [{ name: 'Alcaraz Construction' }],
  openGraph: {
    title: 'Alcaraz Construction - Professional Construction Services in San Diego',
    description: 'Professional construction, remodeling, and home improvement services in San Diego.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      {/* Apply unified gradient here instead of per-section */}
      <body className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-blue-50">
        {children}
      </body>
    </html>
  )
}
