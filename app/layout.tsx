import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vibha Homes | Building Dreams, Creating Homes',
  description: 'VIBHA HOMES delivers exceptional construction services with precision, quality, and innovation. Your vision, our expertise.',
  generator: 'Next.js',
  icons: {
    icon: '/vibha-logo.svg',
    apple: '/apple-icon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <title>Vibha Homes | Building Dreams, Creating Homes</title>
        <link rel="icon" href="/vibha-logo.svg" />
      </head>
      <body>{children}</body>
    </html>
  )
}
