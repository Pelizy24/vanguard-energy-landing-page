import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "Vanguard Energy - Leading Energy Solutions",
  description: "Vanguard Energy provides innovative and sustainable energy solutions for the future.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="font-sans">
        <Suspense fallback={<div className="min-h-screen bg-background" />}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
