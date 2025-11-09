import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Izzy Carpet Cleaning - Professional Carpet & Upholstery Cleaning Services',
  description: 'Professional carpet cleaning, upholstery cleaning, and stain removal services. Get your carpets spotless with our expert cleaning team.',
  keywords: ['carpet cleaning', 'upholstery cleaning', 'stain removal', 'professional cleaning', 'carpet care'],
  authors: [{ name: 'Izzy Carpet Cleaning' }],
  openGraph: {
    title: 'Izzy Carpet Cleaning - Professional Cleaning Services',
    description: 'Professional carpet cleaning, upholstery cleaning, and stain removal services.',
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
