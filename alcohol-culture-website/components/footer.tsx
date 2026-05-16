'use client'

import Link from 'next/link'
import { Phone, Mail, MapPin, Instagram, Youtube, Facebook } from 'lucide-react'
import { FanLogo } from './fan-logo'

const footerLinks = {
  서비스: [
    { name: '헬스케어 진단', href: '#diagnosis' },
    { name: '술문화 유형 테스트', href: '#' },
    { name: '전문의 상담', href: '#' },
    { name: '맞춤 건강 플랜', href: '#' },
  ],
  커뮤니티: [
    { name: '술술 토크', href: '#community' },
    { name: '시음회 & 모임', href: '#' },
    { name: '양조장 투어', href: '#brewery' },
    { name: '건강한 음주 모임', href: '#' },
  ],
  회사: [
    { name: '소개', href: '#about' },
    { name: '파트너십', href: '#' },
    { name: '채용', href: '#' },
    { name: '문의하기', href: '#' },
  ],
  고객지원: [
    { name: 'FAQ', href: '#' },
    { name: '이용약관', href: '#' },
    { name: '개인정보처리방침', href: '#' },
    { name: '공지사항', href: '#news' },
  ],
}

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'Youtube' },
  { icon: Facebook, href: '#', label: 'Facebook' },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950 via-purple-900 to-purple-950" />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-3xl" />
      
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <FanLogo className="w-16 h-10" />
              <span className="font-serif text-xl font-semibold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">문화술술</span>
            </Link>
            <p className="text-white/60 mb-6 leading-relaxed">
              건전한 술문화를 위한 헬스케어 플랫폼.
              <br />
              나만의 술문화 유형을 진단하고 건강한 음주 생활을 시작하세요.
            </p>
            <div className="space-y-3 text-sm">
              <a href="tel:02-1234-5678" className="flex items-center gap-2 text-white/60 hover:text-purple-300 transition-colors">
                <Phone className="w-4 h-4" />
                02-1234-5678
              </a>
              <a href="mailto:hello@sulcul.kr" className="flex items-center gap-2 text-white/60 hover:text-purple-300 transition-colors">
                <Mail className="w-4 h-4" />
                hello@sulcul.kr
              </a>
              <div className="flex items-start gap-2 text-white/60">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                서울특별시 강남구 테헤란로 123, 문화술술빌딩 5층
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-white mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-white/60 hover:text-purple-300 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10 relative z-10">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            © 2024 문화술술. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all text-white/60 hover:text-white"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="border-t border-white/5 relative z-10">
        <div className="container mx-auto px-6 py-4">
          <p className="text-xs text-white/30 text-center">
            과도한 음주는 건강에 해롭습니다. 문화술술은 건전한 음주문화를 권장하며, 
            미성년자의 음주는 법으로 금지되어 있습니다.
          </p>
        </div>
      </div>
    </footer>
  )
}
