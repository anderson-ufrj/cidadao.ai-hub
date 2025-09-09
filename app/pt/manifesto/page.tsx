export default function ManifestoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
          Manifesto Cidadão.AI
        </h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 font-medium">
            Nós, cidadãos brasileiros, acreditamos no poder transformador da transparência e no direito 
            fundamental de acesso à informação pública. Este manifesto declara nossos princípios e 
            compromissos na construção de uma democracia mais participativa através da tecnologia.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Nossos Princípios Fundamentais</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">1. Transparência Radical</h3>
          <p>
            Todo código, algoritmo e processo do Cidadão.AI é aberto e auditável. Acreditamos que a 
            transparência deve começar por nós mesmos. Não há caixas-pretas, apenas luz sobre os dados públicos.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">2. Empoderamento Cidadão</h3>
          <p>
            A informação pública pertence ao povo. Nossa missão é transformar dados complexos em 
            conhecimento acessível, capacitando cada brasileiro a exercer seu papel de fiscal e 
            participante ativo da democracia.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">3. Vigilância Democrática</h3>
          <p>
            Nossos agentes de IA trabalham incansavelmente para monitorar, analisar e reportar 
            irregularidades. Somos os olhos digitais da sociedade, sempre alertas, sempre imparciais.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">4. Tecnologia com Propósito</h3>
          <p>
            A inteligência artificial deve servir ao interesse público. Cada linha de código escrita 
            visa fortalecer nossa democracia e promover justiça social.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">5. Colaboração Aberta</h3>
          <p>
            O conhecimento se multiplica quando compartilhado. Convidamos pesquisadores, desenvolvedores 
            e cidadãos a contribuir, criticar e melhorar nosso sistema.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">Nosso Compromisso</h2>
          
          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg my-6">
            <p className="font-medium text-green-800 dark:text-green-200 mb-4">
              Nós nos comprometemos a:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-green-700 dark:text-green-300">
              <li>Manter o código eternamente aberto e gratuito</li>
              <li>Proteger a privacidade dos cidadãos em conformidade com a LGPD</li>
              <li>Nunca manipular ou distorcer informações</li>
              <li>Servir a todos os brasileiros, sem distinção</li>
              <li>Evoluir continuamente com base no feedback da comunidade</li>
              <li>Combater a desinformação com fatos verificáveis</li>
              <li>Promover a educação cívica através da tecnologia</li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold mt-10 mb-4">O Futuro que Queremos</h2>
          
          <p>
            Imaginamos um Brasil onde cada cidadão tem acesso instantâneo e compreensível aos dados 
            públicos. Onde a corrupção é detectada em tempo real. Onde a participação cidadã é 
            amplificada pela tecnologia. Onde a transparência não é exceção, mas regra.
          </p>

          <p>
            O Cidadão.AI é mais que um projeto tecnológico - é um movimento por uma democracia 
            mais forte, justa e participativa. Cada agente de IA carrega o nome de um herói brasileiro 
            porque acreditamos que a luta pela transparência é a continuação de suas batalhas por liberdade.
          </p>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mt-8">
            <p className="text-blue-800 dark:text-blue-200 font-medium text-center text-lg">
              "A transparência é a luz que ilumina a democracia. A tecnologia é a ferramenta 
              que amplifica essa luz."
            </p>
            <p className="text-blue-600 dark:text-blue-400 text-center mt-2">
              - Manifesto Cidadão.AI, 2024
            </p>
          </div>

          <h2 className="text-2xl font-semibold mt-10 mb-4">Junte-se a Nós</h2>
          
          <p>
            Este é um convite aberto. Se você acredita em transparência, em tecnologia para o bem 
            comum, em uma democracia mais forte - você já é parte do Cidadão.AI. Contribua com código, 
            ideias, críticas ou simplesmente use e compartilhe nossos recursos.
          </p>

          <p className="font-semibold text-green-700 dark:text-green-300 mt-8">
            Juntos, construímos um Brasil mais transparente, uma linha de código por vez.
          </p>

          <div className="text-center mt-10 text-sm text-gray-600 dark:text-gray-400">
            <p>🇧🇷 Feito no Brasil, para o Brasil 🇧🇷</p>
          </div>
        </div>
      </div>
    </div>
  )
}