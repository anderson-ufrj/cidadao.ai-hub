import Link from 'next/link'

interface FooterProps {
  locale: 'pt' | 'en'
}

export function Footer({ locale }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contexto Acadêmico */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contexto Acadêmico</h3>
            <p className="text-gray-400 mb-2">Projeto para obtenção de título de Bacharel em Ciência da Computação</p>
            <Link href="https://www.muz.ifsuldeminas.edu.br/" target="_blank" rel="noopener"
                  className="text-green-400 hover:text-green-300 hover:underline">
              IFSULDEMINAS - Campus Muzambinho
            </Link>
            <p className="text-sm text-gray-500 mt-2">Aluno: Anderson Henrique da Silva</p>
            <p className="text-sm text-gray-500">Orientadora: Profa. Dra. Aracele Garcia de Oliveira Fassbinder</p>
          </div>

          {/* Autor */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Autor</h3>
            <p className="font-medium">Anderson Henrique da Silva</p>
            <p className="text-gray-400">Graduando em Ciência da Computação</p>
            <p className="text-sm text-gray-500 mt-2">anderson.henrique@alunos.ifsuldeminas.edu.br</p>
            <div className="mt-4 flex flex-col gap-2">
              <Link href="https://andersonhenrique.youcanbook.me/" target="_blank" rel="noopener" 
                    className="text-sm text-green-400 hover:text-green-300">
                📅 Agendar Reunião
              </Link>
              <Link href="https://github.com/anderson-ufrj" target="_blank" rel="noopener" 
                    className="text-sm text-blue-400 hover:text-blue-300">
                💻 GitHub
              </Link>
              <Link href="https://www.linkedin.com/in/anderson-h-silva95/" target="_blank" rel="noopener" 
                    className="text-sm text-blue-400 hover:text-blue-300">
                💼 LinkedIn
              </Link>
              <Link href="mailto:andersonhs27@gmail.com" 
                    className="text-sm text-gray-400 hover:text-gray-300">
                ✉️ andersonhs27@gmail.com
              </Link>
            </div>
          </div>

          {/* Mapa do Site */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Mapa do Site</h3>
            <div className="flex flex-col gap-2">
              <Link href={`/${locale}`} className="text-sm text-gray-400 hover:text-gray-300">
                {locale === 'pt' ? 'Início' : 'Home'}
              </Link>
              <Link href={`/${locale}/agents`} className="text-sm text-gray-400 hover:text-gray-300">
                {locale === 'pt' ? 'Agentes de IA' : 'AI Agents'}
              </Link>
              <Link href={`/${locale}/about`} className="text-sm text-gray-400 hover:text-gray-300">
                {locale === 'pt' ? 'Sobre o Projeto' : 'About'}
              </Link>
              <Link href={`/${locale}/manifesto`} className="text-sm text-gray-400 hover:text-gray-300">
                {locale === 'pt' ? 'Manifesto' : 'Manifesto'}
              </Link>
              <Link href={`/${locale}/system`} className="text-sm text-gray-400 hover:text-gray-300">
                {locale === 'pt' ? 'Sistema' : 'System'}
              </Link>
              <Link href={`/${locale}/privacy`} className="text-sm text-gray-400 hover:text-gray-300">
                {locale === 'pt' ? 'Política de Privacidade' : 'Privacy Policy'}
              </Link>
              <Link href={`/${locale}/cookies`} className="text-sm text-gray-400 hover:text-gray-300">
                {locale === 'pt' ? 'Política de Cookies' : 'Cookie Policy'}
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">© 2024 Cidadão.AI - Projeto de código aberto sob licença MIT</p>
          <p className="text-sm text-gray-500 mt-2">
            {locale === 'pt' 
              ? 'Comprometido com a transparência, ética e responsabilidade social através da tecnologia'
              : 'Committed to transparency, ethics and social responsibility through technology'
            }
          </p>
        </div>
      </div>
    </footer>
  )
}