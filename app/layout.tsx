import type React from "react"
import type { Metadata } from "next"
import { Cairo, Noto_Sans_Arabic } from "next/font/google"
import "./globals.css"
import Script from "next/script"


export const metadata: Metadata = {
  title: "اتصالات - شركة الاتصالات الرائدة",
  description: "شركة متخصصة في خدمات الاتصالات والتواصل المتقدمة مع أعلى معايير الأمان والخصوصية",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
         <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-5J3M1H0VBN" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5J3M1H0VBN');
          `}
        </Script>
      </head>
      <body >
        {children}
      </body>
    </html>
  )
}
