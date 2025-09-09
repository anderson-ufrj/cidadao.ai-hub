'use client'

import { getTranslations } from '@/lib/i18n'
import { InstallPWA } from '@/components/install-pwa'
import { agents } from '@/data/agents'
import Image from 'next/image'
import Link from 'next/link'

export default function PTPage() {
  const t = getTranslations('pt')
  
  return (
    <>
      {/* Hero Section */}
      <section className="hero relative min-h-screen flex items-center justify-center bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="hero-container max-w-5xl mx-auto px-6 py-24 text-center relative z-10">
          <div className="hero-badge inline-flex items-center px-4 py-2 bg-green-100 dark:bg-green-900 rounded-full text-green-800 dark:text-green-200 font-medium mb-6">
            🇧🇷 Transparência Pública com IA
          </div>
          
          <h1 className="hero-title text-5xl sm:text-7xl font-bold mb-4 bg-gradient-to-r from-green-600 via-yellow-500 to-blue-600 bg-clip-text text-transparent">
            Cidadão.AI
          </h1>
          
          <p className="hero-subtitle-large text-2xl sm:text-3xl font-medium text-gray-800 dark:text-gray-200 mb-6">
            Hub Oficial de Documentação
          </p>
          
          <p className="hero-mission text-xl text-gray-700 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
            Este é o ponto de encontro entre tecnologia, cidadania e responsabilidade pública.
          </p>
          
          <p className="hero-description text-lg text-gray-600 dark:text-gray-400 max-w-4xl mx-auto">
            O Cidadão.AI reúne múltiplas inteligências artificiais brasileiras trabalhando em rede 
            para democratizar o acesso aos dados públicos, fortalecer a transparência e empoderar 
            cada cidadão com informação clara, acessível e auditável.
          </p>
        </div>
      </section>

      {/* Agents Carousel Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Conheça Nossas IAs Brasileiras
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
            Cada agente é uma inteligência artificial especializada, trabalhando 24/7 pela transparência pública
          </p>
          
          {/* Simple Agent Grid for now */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {agents.slice(0, 12).map((agent) => (
              <div key={agent.id} className="text-center group cursor-pointer">
                <div className="relative w-24 h-24 mx-auto mb-3 rounded-full overflow-hidden ring-4 ring-transparent group-hover:ring-green-500 transition-all duration-300">
                  <Image
                    src={`/agents/${agent.image}`}
                    alt={agent.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-medium text-sm">{agent.name}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">{agent.role.pt}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link href="/pt/agents" className="inline-block px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg font-medium hover:shadow-lg transition-shadow">
              Entenda nossos agentes de IA
            </Link>
          </div>
        </div>
      </section>

      {/* Links Sections */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          {/* Repositórios */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Repositórios</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="https://github.com/anderson-ufrj/cidadao.ai-backend" 
                    className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-lg mb-2">cidadao.ai-backend</h3>
                <p className="text-gray-600 dark:text-gray-400">Sistema backend com FastAPI e agentes de IA</p>
              </Link>
              <Link href="https://github.com/anderson-ufrj/cidadao.ai-frontend" 
                    className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-lg mb-2">cidadao.ai-frontend</h3>
                <p className="text-gray-600 dark:text-gray-400">Interface web moderna (em desenvolvimento)</p>
              </Link>
            </div>
          </div>

          {/* Aplicações */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Aplicações</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="https://neural-thinker-cidadao-ai-backend.hf.space/" 
                    className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-shadow border-l-4 border-green-500">
                <h3 className="font-bold text-lg mb-2">🌐 Web App</h3>
                <p className="text-gray-600 dark:text-gray-400">Frontend moderno para interação com os agentes</p>
              </Link>
              <Link href="https://neural-thinker-cidadao-ai-backend.hf.space/api" 
                    className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-shadow border-l-4 border-blue-500">
                <h3 className="font-bold text-lg mb-2">🔌 API Backend</h3>
                <p className="text-gray-600 dark:text-gray-400">API RESTful para integração com sistemas</p>
              </Link>
            </div>
          </div>

          {/* Documentação & Pesquisa */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Documentação & Pesquisa</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="https://anderson-ufrj.github.io/cidadao.ai-docs/" 
                    className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-lg mb-2">📚 Hub de Documentação</h3>
                <p className="text-gray-600 dark:text-gray-400">Central oficial de documentação do projeto</p>
              </Link>
              <Link href="https://cidadao-ai-frontend.vercel.app/Notas-de-Pesquisa.pdf" 
                    className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-lg mb-2">📄 Notas de Pesquisa</h3>
                <p className="text-gray-600 dark:text-gray-400">Documento técnico detalhado (PDF)</p>
              </Link>
            </div>
          </div>

          {/* Outros Links */}
          <div>
            <h2 className="text-2xl font-bold mb-8">🔗 Outros Links</h2>
            
            {/* Sistema & Status */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-red-600">🔴 Sistema & Status</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="https://neural-thinker-cidadao-ai-backend.hf.space/health" 
                      className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow">
                  <h4 className="font-medium mb-1">Saúde do Sistema</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Verifique o status operacional</p>
                </Link>
                <Link href="https://neural-thinker-cidadao-ai-backend.hf.space/metrics" 
                      className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow">
                  <h4 className="font-medium mb-1">Métricas</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Prometheus metrics endpoint</p>
                </Link>
              </div>
            </div>

            {/* API & Documentação */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-600">📚 API & Documentação</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="https://neural-thinker-cidadao-ai-backend.hf.space/docs" 
                      className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow">
                  <h4 className="font-medium mb-1">Swagger UI</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Documentação interativa da API</p>
                </Link>
                <Link href="https://neural-thinker-cidadao-ai-backend.hf.space/redoc" 
                      className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow">
                  <h4 className="font-medium mb-1">ReDoc</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Documentação alternativa da API</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contexto Acadêmico */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contexto Acadêmico</h3>
              <p className="text-gray-400 mb-2">Projeto para obtenção de título de Bacharel em Ciência da Computação</p>
              <p className="text-gray-400">IFSULDEMINAS - Campus Muzambinho</p>
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

            {/* Stack Tecnológico */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Stack Tecnológico</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-800 rounded text-sm">FastAPI</span>
                <span className="px-3 py-1 bg-blue-800 rounded text-sm">LangChain</span>
                <span className="px-3 py-1 bg-purple-800 rounded text-sm">CrewAI</span>
                <span className="px-3 py-1 bg-orange-800 rounded text-sm">PostgreSQL</span>
                <span className="px-3 py-1 bg-red-800 rounded text-sm">Redis</span>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400">© 2024 Cidadão.AI - Projeto de código aberto sob licença MIT</p>
            <p className="text-sm text-gray-500 mt-2">
              Comprometido com a transparência, ética e responsabilidade social através da tecnologia
            </p>
          </div>
        </div>
      </footer>

      <InstallPWA />
    </>
  )
}