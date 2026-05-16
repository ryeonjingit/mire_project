'use client'

import { MapPin, Star, ArrowRight, Wine, Sparkles } from 'lucide-react'
import Link from 'next/link'

const breweries = [
  {
    name: '경복궁 전통주',
    location: '서울 종로구',
    rating: 4.8,
    reviews: 324,
    specialty: '막걸리, 전통 약주',
    featured: true
  },
  {
    name: '한강 브루어리',
    location: '서울 마포구',
    rating: 4.6,
    reviews: 156,
    specialty: '크래프트 맥주',
    featured: false
  },
  {
    name: '청담 와이너리',
    location: '경기 이천시',
    rating: 4.9,
    reviews: 412,
    specialty: '국산 와인',
    featured: true
  },
  {
    name: '제주 소주 양조장',
    location: '제주 서귀포시',
    rating: 4.7,
    reviews: 289,
    specialty: '증류 소주',
    featured: false
  },
  {
    name: '순창 전통주 마을',
    location: '전북 순창군',
    rating: 4.5,
    reviews: 178,
    specialty: '전통 탁주',
    featured: false
  },
  {
    name: '부산 해운대 브루어리',
    location: '부산 해운대구',
    rating: 4.4,
    reviews: 203,
    specialty: '수제 맥주, 하이볼',
    featured: true
  }
]

const regions = ['전체', '서울', '경기', '강원', '충청', '전라', '경상', '제주']

export function BrewerySection() {
  return (
    <section id="brewery" className="py-32 relative overflow-hidden">
      {/* Dreamy Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-background to-pink-50/50" />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-pink-100/40 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100/80 mb-6">
            <Sparkles className="w-4 h-4 text-purple-500" />
            <span className="text-sm font-medium gradient-text">Brewery Map</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            전국 <span className="gradient-text">양조장</span> 탐방
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            대한민국 곳곳에 숨겨진 양조장들을 발견하세요.
            전통주부터 크래프트 맥주까지, 다양한 술의 세계가 기다립니다.
          </p>
        </div>

        {/* Region Filter */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {regions.map((region, index) => (
            <button
              key={index}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                index === 0 
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg glow-purple' 
                  : 'glass-card hover:shadow-lg hover:-translate-y-0.5'
              }`}
            >
              {region}
            </button>
          ))}
        </div>

        {/* Brewery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {breweries.map((brewery, index) => (
            <Link
              key={index}
              href="#"
              className="group glass-card rounded-3xl overflow-hidden hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image Placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-purple-100 via-pink-50 to-purple-50 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent" />
                <Wine className="w-16 h-16 text-purple-300 group-hover:scale-110 transition-transform duration-500" />
                {brewery.featured && (
                  <span className="absolute top-4 left-4 px-4 py-1.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-medium rounded-full shadow-lg">
                    추천
                  </span>
                )}
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-lg text-foreground group-hover:gradient-text transition-colors">
                      {brewery.name}
                    </h3>
                    <div className="flex items-center gap-1.5 text-sm text-muted-foreground mt-1">
                      <MapPin className="w-4 h-4 text-purple-400" />
                      {brewery.location}
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-sm bg-yellow-50 px-2.5 py-1 rounded-full">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium text-foreground">{brewery.rating}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  <span className="gradient-text font-medium">대표주:</span> {brewery.specialty}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Map CTA */}
        <div className="relative overflow-hidden rounded-3xl p-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500">
          <div className="bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900 rounded-3xl p-12 text-center relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl animate-pulse-glow" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
            
            <div className="relative z-10">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-4 text-glow">
                지도에서 양조장 찾기
              </h3>
              <p className="text-white/70 mb-8 max-w-xl mx-auto">
                인터랙티브 지도에서 내 주변 양조장을 찾고, 방문 예약까지 한번에!
              </p>
              <Link 
                href="#" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-600 rounded-full font-semibold hover:bg-white/90 transition-colors shadow-xl"
              >
                <MapPin className="w-5 h-5" />
                지도로 보기
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
