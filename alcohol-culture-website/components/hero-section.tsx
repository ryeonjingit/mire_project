'use client'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/"
          alt="문화술술 - 건전한 술문화"
          fill
          className="object-cover"
          priority
        />
        {/* Dreamy overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-background/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-300/20 via-transparent to-pink-300/20" />
      </div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-white/40 rounded-full blur-sm animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-pink-200/50 rounded-full blur-sm animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-2/3 left-1/3 w-2 h-2 bg-purple-200/60 rounded-full blur-sm animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 right-1/3 w-5 h-5 bg-white/30 rounded-full blur-sm animate-float-slow" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-1/2 left-1/6 w-3 h-3 bg-pink-100/40 rounded-full blur-sm animate-float-slow" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 glass rounded-full mb-8 animate-pulse-glow">
            <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full" />
            <span className="text-sm font-medium text-white/90">건전한 술문화의 새로운 시작</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-white text-glow">
            <span className="text-balance block mb-2">술을 즐기는 문화</span>
            <span className="block bg-gradient-to-r from-purple-200 via-pink-200 to-purple-200 bg-clip-text text-transparent">건강하게 시작하세요</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed text-pretty">
            문화술술은 헬스케어와 연동하여 당신만의 술문화 유형을 진단하고,
            건강한 음주 생활을 위한 맞춤 솔루션을 제공합니다.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="#diagnosis" 
              className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold text-lg hover:from-purple-400 hover:to-pink-400 transition-all flex items-center gap-2 glow-purple"
            >
              무료 진단 시작하기
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="#about" 
              className="group px-8 py-4 glass text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-all flex items-center gap-2"
            >
              더 알아보기
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-3 gap-6 max-w-xl mx-auto">
            <div className="glass-card rounded-2xl p-4 text-center">
              <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">50,000+</div>
              <div className="text-sm text-foreground/60">진단 완료</div>
            </div>
            <div className="glass-card rounded-2xl p-4 text-center">
              <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">200+</div>
              <div className="text-sm text-foreground/60">제휴 양조장</div>
            </div>
            <div className="glass-card rounded-2xl p-4 text-center">
              <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">95%</div>
              <div className="text-sm text-foreground/60">만족도</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center pt-2">
          <div className="w-1.5 h-3 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full" />
        </div>
      </div>
    </section>
  )
}
