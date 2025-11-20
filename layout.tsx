import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Course - Stát se nenahraditelným',
  description: '4týdenní transformační program',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs">
      <body>{children}</body>
    </html>
  )
}
