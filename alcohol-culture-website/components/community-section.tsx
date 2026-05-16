'use client'

import { MessageSquare, BookOpen, Calendar, Users, ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'

const communityFeatures = [
  {
    icon: MessageSquare,
    title: '술술 토크',
    description: '전통주, 와인, 위스키 등 다양한 주제로 대화를 나눠보세요.',
    members: '2.3만',
    gradient: 'from-purple-500 to-purple-600'
  },
  {
    icon: BookOpen,
    title: '술 이야기',
    description: '술에 얽힌 역사와 문화, 양조 이야기를 공유합니다.',
    members: '1.8만',
    gradient: 'from-pink-500 to-purple-500'
  },
  {
    icon: Calendar,
    title: '시음회 & 모임',
    description: '전국 각지의 양조장 투어와 시음회 정보를 확인하세요.',
    members: '9.5천',
    gradient: 'from-purple-400 to-pink-500'
  },
  {
    icon: Users,
    title: '건강한 음주 모임',
    description: '적정 음주를 실천하는 사람들과 함께 하는 커뮤니티입니다.',
    members: '5.2천',
    gradient: 'from-pink-400 to-purple-400'
  }
]

const recentPosts = [
  {
    category: '시음 후기',
    title: '경기도 전통주 투어 후기 - 이천 막걸리의 매력',
    author: '술술이',
    comments: 24,
    likes: 156
  },
  {
    category: '건강 정보',
    title: '적정 음주량, 과연 얼마일까? 전문가의 조언',
    author: '헬스케어',
    comments: 45,
    likes: 203
  },
  {
    category: '양조장 소식',
    title: '신규 크래프트 양조장 오픈 - 부산 해운대',
    author: '양조장투어',
    comments: 18,
    likes: 89
  }
]

export function CommunitySection() {
  return (
    <section id="community" className="py-32 relative overflow-hidden">
      {/* Dreamy Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-purple-50/30 to-background" />
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-100/80 mb-6">
            <Sparkles className="w-4 h-4 text-pink-500" />
            <span className="text-sm font-medium gradient-text">Community</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            함께 만들어가는 <span className="gradient-text">술문화</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            건전한 술문화를 함께 만들어가는 사람들과 소통하세요.
            다양한 정보와 경험을 나누고, 새로운 친구를 만날 수 있습니다.
          </p>
        </div>

        {/* Community Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {communityFeatures.map((feature, index) => (
            <Link
              key={index}
              href="#"
              className="group glass-card p-6 rounded-3xl hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-500 hover:-translate-y-2"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:gradient-text transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                {feature.description}
              </p>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                  <Users className="w-3.5 h-3.5 text-purple-600" />
                </div>
                <span className="text-muted-foreground">{feature.members}명 참여중</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Recent Posts */}
        <div className="glass-card rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-serif text-2xl font-bold gradient-text">인기 게시글</h3>
            <Link href="#" className="text-purple-500 font-medium flex items-center gap-1 hover:gap-2 transition-all">
              전체보기 <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="space-y-4">
            {recentPosts.map((post, index) => (
              <Link
                key={index}
                href="#"
                className="flex items-start gap-4 p-5 rounded-2xl hover:bg-gradient-to-r hover:from-purple-50/50 hover:to-pink-50/50 transition-all group"
              >
                <span className="px-4 py-1.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-medium rounded-full whitespace-nowrap shadow-sm">
                  {post.category}
                </span>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-foreground group-hover:gradient-text transition-colors truncate">
                    {post.title}
                  </h4>
                  <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                    <span>{post.author}</span>
                    <span>댓글 {post.comments}</span>
                    <span>좋아요 {post.likes}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
