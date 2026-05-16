import type { Metadata } from 'next'
import { Noto_Sans_KR, Noto_Serif_KR } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const notoSansKR = Noto_Sans_KR({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '700'],
  variable: '--font-sans'
})

const notoSerifKR = Noto_Serif_KR({ 
  subsets: ["latin"],
  weight: ['400', '600', '700'],
  variable: '--font-serif'
})

export const metadata: Metadata = {
  title: '문화술술 | 건전한 술문화를 위한 헬스케어 플랫폼',
  description: '문화술술은 건전한 술문화를 지향하며, 헬스케어와 연동하여 나만의 술문화 유형을 진단하고 건강한 음주 생활을 도와드립니다.',
  keywords: ['문화술술', '건전한 술문화', '헬스케어', '술 진단', '양조장', '전통주'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className="bg-background">
      <body className={`${notoSansKR.variable} ${notoSerifKR.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
