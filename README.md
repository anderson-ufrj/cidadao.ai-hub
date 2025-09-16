# 🏛️ Cidadão.AI Hub

<div align="center">
  <img src="public/forum-icon.png" alt="Cidadão.AI" width="120" height="120" />
  
  <h3>Sistema Multi-Agente de IA para Transparência Pública Brasileira</h3>
  <p>🇧🇷 Feito no Brasil, para o Brasil 🇧🇷</p>
  
  [![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
  [![PWA](https://img.shields.io/badge/PWA-Ready-5A0FC8?logo=pwa)](https://web.dev/progressive-web-apps/)
  [![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
</div>

## 📋 Sobre o Projeto

O **Cidadão.AI Hub** é a central de documentação e portal principal do projeto Cidadão.AI, uma iniciativa de código aberto que utiliza inteligência artificial para democratizar o acesso a dados públicos e fortalecer a transparência governamental no Brasil.

### 🎯 Objetivos

- 📊 **Transparência**: Tornar dados públicos acessíveis e compreensíveis
- 🤖 **IA Ética**: Uso responsável de inteligência artificial para o bem público
- 🌐 **Acessibilidade**: Interface intuitiva e disponível para todos
- 📱 **Mobile-First**: Experiência otimizada para dispositivos móveis

## 🚀 Funcionalidades

- ✅ **17 Agentes de IA** com personalidades de figuras históricas brasileiras
- ✅ **PWA** - Instalável como app nativo
- ✅ **Bilíngue** - Português e Inglês
- ✅ **Tema Claro/Escuro** com detecção automática
- ✅ **Animações Suaves** e experiência moderna
- ✅ **Offline First** - Funciona sem conexão
- ✅ **Performance Otimizada** - Core Web Vitals A+

## 🛠️ Stack Tecnológica

- **Framework**: [Next.js 15](https://nextjs.org/) com App Router
- **Linguagem**: [TypeScript](https://www.typescriptlang.org/)
- **Estilização**: [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **PWA**: [next-pwa](https://github.com/shadowwalker/next-pwa)
- **Internacionalização**: [next-intl](https://next-intl-docs.vercel.app/)
- **Deploy**: [Vercel](https://vercel.com/)

## 🏗️ Estrutura do Projeto

```
cidadao.ai-hub/
├── app/                  # Next.js App Router
│   ├── pt/              # Páginas em português
│   ├── en/              # Páginas em inglês
│   └── theme-script.tsx # Script de tema
├── components/          # Componentes React
│   ├── header.tsx      # Navegação principal
│   ├── theme-toggle.tsx # Alternador de tema
│   └── loading-screen.tsx # Tela de carregamento PWA
├── data/               # Dados estáticos
│   └── agents.ts      # Informações dos agentes
├── public/            # Assets públicos
│   ├── agents/        # Imagens dos agentes
│   └── icons/         # Ícones PWA
├── messages/          # Arquivos de tradução
│   ├── pt.json       # Português
│   └── en.json       # Inglês
└── styles/           # Estilos globais
```

## 🎨 Design System

### Cores Principais
- 🟢 **Verde**: #10b981 (Esperança e Brasil)
- 🟡 **Amarelo**: #eab308 (Riqueza e energia)
- 🔵 **Azul**: #3b82f6 (Confiança e tecnologia)

### Tipografia
- **Font**: Inter (System UI fallback)
- **Headings**: Bold com gradiente animado
- **Body**: Regular com alto contraste

## 📱 Progressive Web App

O Cidadão.AI Hub é um PWA completo com:

- 📲 **Instalável** em qualquer dispositivo
- 💾 **Funciona Offline** com service worker
- 🔔 **Notificações** (em breve)
- 📸 **Tela de Splash** personalizada
- 🎯 **Ícone** do fórum grego

## 🌐 Links Importantes

### Aplicações
- 🌍 [Web App](https://neural-thinker-cidadao-ai-backend.hf.space/)
- ⚡ [Backend API](https://huggingface.co/spaces/neural-thinker/cidadao.ai-backend)
- 📚 [Documentação Técnica](https://anderson-ufrj.github.io/cidadao.ai-technical-docs/docs/intro)

### Repositórios
- [Backend](https://github.com/anderson-ufrj/cidadao.ai-backend)
- [Frontend](https://github.com/anderson-ufrj/cidadao.ai-frontend)
- [Technical Docs](https://github.com/anderson-ufrj/cidadao.ai-technical-docs)
<!-- - [ML Models](https://github.com/anderson-ufrj/cidadao.ai-models) -->

## 🚦 Começando

### Pré-requisitos

- Node.js 18+ 
- npm ou yarn
- Git

### Instalação

```bash
# Clone o repositório
git clone https://github.com/anderson-ufrj/cidadao.ai-hub.git

# Entre no diretório
cd cidadao.ai-hub

# Instale as dependências
npm install

# Rode o servidor de desenvolvimento
npm run dev
```

### Scripts Disponíveis

```bash
npm run dev      # Servidor de desenvolvimento
npm run build    # Build de produção
npm run start    # Servidor de produção
npm run lint     # Linting
npm run type-check # Verificação de tipos
```

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Por favor:

1. Fork o projeto
2. Crie sua feature branch (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'feat: adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

### Convenções de Commit

Seguimos o padrão [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` Nova funcionalidade
- `fix:` Correção de bug
- `docs:` Documentação
- `style:` Formatação
- `refactor:` Refatoração
- `test:` Testes
- `chore:` Tarefas gerais

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🎓 Contexto Acadêmico

Projeto desenvolvido como Trabalho de Conclusão de Curso (TCC) para obtenção do título de Bacharel em Ciência da Computação.

**Instituição**: [IFSULDEMINAS - Campus Muzambinho](https://www.muz.ifsuldeminas.edu.br/)  
**Aluno**: Anderson Henrique da Silva  
**Orientadora**: Profa. Dra. Aracele Garcia de Oliveira Fassbinder

## 📬 Contato

**Anderson Henrique da Silva**
- 📧 Email: anderson.henrique@alunos.ifsuldeminas.edu.br
- 💼 LinkedIn: [anderson-h-silva95](https://www.linkedin.com/in/anderson-h-silva95/)
- 🐙 GitHub: [@anderson-ufrj](https://github.com/anderson-ufrj)
- 📅 [Agendar Reunião](https://andersonhenrique.youcanbook.me/)

---

<div align="center">
  <p>Feito com ❤️ no Brasil</p>
  <p>© 2025 Cidadão.AI - Transparência, Ética e Responsabilidade Social através da Tecnologia</p>
</div>