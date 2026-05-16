'use client'

import { Heart, Users, Leaf, Sparkles } from 'lucide-react'

const values = [
  {
    icon: Heart,
    title: '건강한 음주',
    description: '적정 음주량과 올바른 음주 습관을 통해 건강을 지키면서 술을 즐기는 문화를 만들어갑니다.',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: Users,
    title: '함께하는 문화',
    description: '혼술보다 함께 나누는 술자리, 대화가 있는 건전한 음주 문화를 지향합니다.',
    gradient: 'from-Lightpink-500 to-lightpurple-400'
  },
  {
    icon: Leaf,
    title: '지속가능한 양조',
    description: '전통과 현대를 잇는 국내 양조장들을 발굴하고 지원하여 술 문화의 다양성을 보존합니다.',
    gradient: 'from-purple-400 to-pink-400'
  }
]

export function AboutSection() {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Dreamy Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-purple-50/50 to-background" />
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-pink-200/30 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100/50 mb-6">
            <Sparkles className="w-4 h-4 text-purple-500" />
            <span className="text-sm font-medium gradient-text">About Us</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            문화술술이 지향하는 <span className="gradient-text">가치</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            문화술술은 단순히 술을 마시는 것이 아닌, 건강하고 즐거운 술문화를 만들어가는 
            플랫폼입니다.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {values.map((value, index) => (
            <div 
              key={index}
              className="group p-8 glass-card rounded-3xl hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-500 hover:-translate-y-2"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="relative overflow-hidden rounded-3xl p-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500">
          <div className="bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-2xl" />
            
            <div className="relative z-10">
              <h3 className="font-serif text-2xl md:text-4xl font-bold text-white mb-6 text-balance text-glow">
                {'"'}술은 문화입니다. 함께 즐기되, 건강하게.{'"'}
              </h3>
              <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
                우리는 대한민국의 술문화가 더 건강하고 풍요로워질 수 있다고 믿습니다.
                문화술술과 함께 새로운 술문화를 만들어가세요.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
