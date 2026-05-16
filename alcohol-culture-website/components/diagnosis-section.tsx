'use client'

import { useState } from 'react'
import { Activity, Brain, Stethoscope, ArrowRight, CheckCircle, Sparkles } from 'lucide-react'
import Link from 'next/link'

const diagnosisTypes = [
  {
    icon: Activity,
    title: '음주 패턴 분석',
    description: '나의 음주 빈도, 주량, 음주 시간대 등을 분석하여 음주 습관을 파악합니다.',
    features: ['주간 음주량 분석', '음주 시간대 패턴', '선호 주종 분석'],
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Brain,
    title: '술문화 유형 진단',
    description: '당신은 어떤 유형의 음주자인가요? 8가지 술문화 유형을 진단해드립니다.',
    features: ['성격 기반 유형 분류', '맞춤 음주 가이드', '추천 주종 제안'],
    color: 'from-pink-500 to-purple-500'
  },
  {
    icon: Stethoscope,
    title: '헬스케어 연동',
    description: '건강 상태와 연동하여 위험 요소를 파악하고 필요시 진료를 연계합니다.',
    features: ['건강 위험도 평가', '전문의 상담 연계', '맞춤 건강 플랜'],
    color: 'from-purple-400 to-pink-500'
  }
]

export function DiagnosisSection() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="diagnosis" className="py-32 relative overflow-hidden">
      {/* Dreamy Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100/50 via-pink-50/30 to-purple-50/50" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-200/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-pink-200/40 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100/80 mb-6">
            <Sparkles className="w-4 h-4 text-purple-500" />
            <span className="text-sm font-medium gradient-text">Healthcare Diagnosis</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            나만의 <span className="gradient-text">술문화 유형</span>을 진단하세요
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            헬스케어와 연동된 종합 진단 시스템으로 당신의 음주 습관을 분석하고,
            건강한 술문화를 위한 맞춤 솔루션을 제공합니다.
          </p>
        </div>

        {/* Diagnosis Types */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Tabs */}
          <div className="space-y-4">
            {diagnosisTypes.map((type, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`w-full text-left p-6 rounded-3xl transition-all duration-500 ${
                  activeTab === index 
                    ? 'bg-gradient-to-r ' + type.color + ' text-white shadow-xl glow-purple scale-[1.02]' 
                    : 'glass-card hover:shadow-lg hover:-translate-y-1'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all ${
                    activeTab === index ? 'bg-white/20' : 'bg-gradient-to-br from-purple-100 to-pink-100'
                  }`}>
                    <type.icon className={`w-7 h-7 ${activeTab === index ? 'text-white' : 'text-purple-600'}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-semibold text-lg mb-1 ${activeTab === index ? 'text-white' : 'text-foreground'}`}>
                      {type.title}
                    </h3>
                    <p className={`text-sm ${activeTab === index ? 'text-white/80' : 'text-muted-foreground'}`}>
                      {type.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Right - Details */}
          <div className="glass-card rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-200/50 to-pink-200/50 rounded-full blur-2xl" />
            
            <div className={`w-20 h-20 bg-gradient-to-br ${diagnosisTypes[activeTab].color} rounded-3xl flex items-center justify-center mb-8 shadow-lg animate-float-slow`}>
              {(() => {
                const IconComponent = diagnosisTypes[activeTab].icon
                return <IconComponent className="w-10 h-10 text-white" />
              })()}
            </div>
            <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
              {diagnosisTypes[activeTab].title}
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {diagnosisTypes[activeTab].description}
            </p>
            <ul className="space-y-4 mb-10">
              {diagnosisTypes[activeTab].features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3 text-foreground">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
            <Link 
              href="#" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-medium hover:from-purple-400 hover:to-pink-400 transition-all glow-purple"
            >
              진단 시작하기
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="relative overflow-hidden rounded-3xl p-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-serif text-2xl font-bold gradient-text mb-2">
                지금 바로 무료 진단을 받아보세요
              </h3>
              <p className="text-muted-foreground">
                5분이면 나의 술문화 유형과 건강 상태를 확인할 수 있습니다.
              </p>
            </div>
            <Link 
              href="#" 
              className="whitespace-nowrap px-10 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold hover:from-purple-400 hover:to-pink-400 transition-all glow-purple"
            >
              무료 진단 시작
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
