'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

interface HeaderProps {
  locale: 'pt' | 'en'
}

export function Header({ locale }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  
  const navigation = locale === 'pt' 
    ? [
        { name: 'Início', href: '/pt' },
        { name: 'Agentes', href: '/pt/agents' },
        { name: 'Sobre', href: '/pt/about' },
        { name: 'Manifesto', href: '/pt/manifesto' },
        { name: 'Sistema', href: '/pt/system' },
      ]
    : [
        { name: 'Home', href: '/en' },
        { name: 'Agents', href: '/en/agents' },
        { name: 'About', href: '/en/about' },
        { name: 'Manifesto', href: '/en/manifesto' },
        { name: 'System', href: '/en/system' },
      ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <nav className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-green-600 via-yellow-500 to-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">AI</span>
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Cidadão.AI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-green-600 ${
                  pathname === item.href 
                    ? 'text-green-600' 
                    : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Language Switcher Desktop */}
            <div className="flex gap-2 ml-6 pl-6 border-l border-gray-300 dark:border-gray-700">
              <Link
                href="/pt"
                className={`px-2 py-1 rounded text-sm font-medium transition-colors ${
                  locale === 'pt' 
                    ? 'bg-green-600 text-white' 
                    : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
                }`}
              >
                PT
              </Link>
              <Link
                href="/en"
                className={`px-2 py-1 rounded text-sm font-medium transition-colors ${
                  locale === 'en' 
                    ? 'bg-green-600 text-white' 
                    : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
                }`}
              >
                EN
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-800">
            <div className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-3 py-2 rounded-lg text-base font-medium transition-colors ${
                    pathname === item.href 
                      ? 'bg-green-50 text-green-600 dark:bg-green-900/20' 
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Language Switcher Mobile */}
              <div className="flex gap-2 px-3 pt-3 mt-3 border-t border-gray-200 dark:border-gray-800">
                <Link
                  href="/pt"
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-3 py-1 rounded text-sm font-medium ${
                    locale === 'pt' 
                      ? 'bg-green-600 text-white' 
                      : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300'
                  }`}
                >
                  Português
                </Link>
                <Link
                  href="/en"
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-3 py-1 rounded text-sm font-medium ${
                    locale === 'en' 
                      ? 'bg-green-600 text-white' 
                      : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300'
                  }`}
                >
                  English
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}