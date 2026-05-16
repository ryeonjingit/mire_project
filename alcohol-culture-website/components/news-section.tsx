'use client'

import { ArrowRight, Calendar, Sparkles } from 'lucide-react'
import Link from 'next/link'

const news = [
  {
    category: '공지',
    date: '2024.03.15',
    title: '문화술술 앱 2.0 업데이트 안내',
    description: '새로운 헬스케어 연동 기능과 개선된 진단 시스템을 만나보세요.',
    featured: true
  },
  {
    category: '이벤트',
    date: '2024.03.12',
    title: '봄맞이 전통주 시음회 - 참가자 모집',
    description: '전국 유명 양조장의 봄 신상품을 미리 만나보는 특별한 기회!',
    featured: true
  },
  {
    category: '뉴스',
    date: '2024.03.10',
    title: '건전한 음주문화 캠페인 "술술하게" 런칭',
    description: '정부 및 의료계와 협력하여 건전한 음주문화 확산 캠페인을 시작합니다.',
    featured: false
  },
  {
    category: '파트너십',
    date: '2024.03.08',
    title: '주요 대학병원과 헬스케어 연동 협약 체결',
    description: '서울대병원, 연세대병원 등 5개 대학병원과 진료 연계 협약을 맺었습니다.',
    featured: false
  }
]

export function NewsSection() {
  return (
    <section id="news" className="py-32 relative overflow-hidden">
      {/* Dreamy Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-pink-50/30 to-background" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl" />
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-pink-200/30 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-100/80 mb-6">
              <Sparkles className="w-4 h-4 text-pink-500" />
              <span className="text-sm font-medium gradient-text">News & Events</span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground text-balance">
              <span className="gradient-text">새소식</span>
            </h2>
          </div>
          <Link 
            href="#" 
            className="text-purple-500 font-medium flex items-center gap-1 hover:gap-2 transition-all"
          >
            전체보기 <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* News Grid */}
        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          {/* Featured News */}
          {news.filter(n => n.featured).map((item, index) => (
            <Link
              key={index}
              href="#"
              className="group relative overflow-hidden glass-card rounded-3xl p-8 md:p-10 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-200/40 to-pink-200/40 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-4 py-1.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-medium rounded-full shadow-sm">
                    {item.category}
                  </span>
                  <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 text-purple-400" />
                    {item.date}
                  </span>
                </div>
                <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:gradient-text transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Regular News List */}
        <div className="glass-card rounded-3xl divide-y divide-purple-100/50 overflow-hidden shadow-lg">
          {news.filter(n => !n.featured).map((item, index) => (
            <Link
              key={index}
              href="#"
              className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 hover:bg-gradient-to-r hover:from-purple-50/50 hover:to-pink-50/50 transition-all group"
            >
              <div className="flex items-start md:items-center gap-4">
                <span className="px-4 py-1.5 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-600 text-xs font-medium rounded-full whitespace-nowrap">
                  {item.category}
                </span>
                <div>
                  <h4 className="font-medium text-foreground group-hover:gradient-text transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mt-1 hidden md:block">
                    {item.description}
                  </p>
                </div>
              </div>
              <span className="text-sm text-muted-foreground whitespace-nowrap">
                {item.date}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
