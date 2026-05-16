'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { FanLogo } from './fan-logo'

const navigation = [
  { name: '소개', href: '#about' },
  { name: '진단', href: '#diagnosis' },
  { name: '커뮤니티', href: '#community' },
  { name: '양조장', href: '#brewery' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled 
          ? 'glass shadow-lg' 
          : 'bg-transparent'
      )}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <FanLogo className="w-12 h-8 transition-transform group-hover:scale-105" withWhiteBorder={true} />
            <span className="font-serif text-xl font-semibold gradient-text">문화술술</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative px-4 py-2 text-foreground/70 hover:text-primary transition-all font-medium rounded-full hover:bg-primary/5"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Link 
              href="#diagnosis" 
              className="px-6 py-2.5 bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] text-primary-foreground rounded-full font-medium hover:bg-right transition-all duration-500 glow-purple"
            >
              무료 진단
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-full hover:bg-primary/10 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-4 right-4 mt-2 glass-card rounded-2xl shadow-xl overflow-hidden">
            <div className="p-4 flex flex-col gap-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground/80 hover:text-primary hover:bg-primary/5 transition-all py-3 px-4 font-medium rounded-xl"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Link 
                href="#diagnosis" 
                className="mt-2 px-5 py-3 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-xl font-medium text-center hover:opacity-90 transition-opacity"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                무료 진단
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
