"use client"
import './globals.css'
import type { Metadata } from 'next'
import { TopComponents } from '@/components/TopComponents'
import { BottomComponents } from '@/components/BottomComponents'




export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>
      <TopComponents />
        <div className='text-center'>{children}</div>
        <BottomComponents />
      </body>
    </html>
  )
}
