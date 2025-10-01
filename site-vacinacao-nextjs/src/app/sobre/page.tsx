export default function SobrePage() {
  const beneficios = [
    {
      titulo: "Proteção Individual",
      descricao: "As vacinas protegem você contra doenças graves, reduzindo significativamente o risco de infecção, hospitalização e morte.",
      icone: "🛡️"
    },
    {
      titulo: "Imunidade Coletiva",
      descricao: "Quando a maioria da população está vacinada, protegemos também quem não pode se vacinar por questões médicas.",
      icone: "🤝"
    },
    {
      titulo: "Prevenção de Surtos",
      descricao: "A vacinação em massa previne o ressurgimento de doenças já eliminadas ou controladas no país.",
      icone: "🏥"
    },
    {
      titulo: "Economia em Saúde",
      descricao: "Prevenir é mais barato que tratar. A vacinação reduz custos com internações e tratamentos complexos.",
      icone: "💰"
    },
    {
      titulo: "Proteção Geracional",
      descricao: "Protegemos as futuras gerações ao eliminar ou controlar doenças que afetaram nossos antepassados.",
      icone: "👨‍👩‍👧‍👦"
    },
    {
      titulo: "Segurança Comprovada",
      descricao: "As vacinas passam por rigorosos testes de segurança e eficácia antes de serem aprovadas e disponibilizadas.",
      icone: "🔬"
    }
  ]

  const mitos = [
    {
      mito: "Vacinas causam autismo",
      realidade: "Não existe nenhuma relação entre vacinas e autismo. Estudos científicos rigorosos confirmam a segurança das vacinas."
    },
    {
      mito: "Imunidade natural é melhor",
      realidade: "A imunidade natural pode ser perigosa, pois requer contrair a doença, que pode causar complicações graves ou morte."
    },
    {
      mito: "Muitas vacinas sobrecarregam o sistema imune",
      realidade: "O sistema imune das crianças pode lidar facilmente com múltiplas vacinas, que contêm apenas fragmentos de vírus/bactérias."
    },
    {
      mito: "Doenças já foram eliminadas",
      realidade: "Muitas doenças ainda existem globalmente e podem retornar se a cobertura vacinal diminuir."
    }
  ]

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">A Importância da Vacinação</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            A vacinação é uma das maiores conquistas da medicina moderna e uma das
            intervenções de saúde pública mais eficazes já desenvolvidas. 
            Entenda por que vacinar-se é fundamental para a saúde individual e coletiva.
          </p>
        </div>

        {/* História */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">História das Vacinas</h2>
              <div className="space-y-4">
                <p className="text-gray-700">
                  A primeira vacina foi desenvolvida em 1796 por Edward Jenner contra a varíola.
                  Desde então, as vacinas salvaram milhões de vidas e eliminaram doenças
                  que antes eram comuns e devastadoras.
                </p>
                <p className="text-gray-700">
                  No Brasil, o Programa Nacional de Imunizações (PNI) foi criado em 1973
                  e é considerado um dos melhores programas de vacinação do mundo,
                  oferecendo vacinas gratuitas para toda a população.
                </p>
              </div>
            </div>

            <div className="card bg-gradient-to-r from-medical-blue to-medical-green text-white">
              <h3 className="text-xl font-semibold mb-4">Conquistas do PNI</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="mr-3">🏆</span>
                  Eliminação da poliomielite (1994)
                </li>
                <li className="flex items-center">
                  <span className="mr-3">🏆</span>
                  Eliminação do sarampo (2016)
                </li>
                <li className="flex items-center">
                  <span className="mr-3">🏆</span>
                  Controle da rubéola e síndrome da rubéola congênita
                </li>
                <li className="flex items-center">
                  <span className="mr-3">🏆</span>
                  Redução de 99% da mortalidade infantil por difteria
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Benefícios */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Por que Vacinar?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beneficios.map((beneficio, index) => (
              <div key={index} className="card text-center">
                <div className="text-4xl mb-4">{beneficio.icone}</div>
                <h3 className="text-xl font-semibold mb-3 text-medical-blue">{beneficio.titulo}</h3>
                <p className="text-gray-600">{beneficio.descricao}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Mitos vs Realidade */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Mitos vs Realidade</h2>
          <div className="space-y-6">
            {mitos.map((item, index) => (
              <div key={index} className="card">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                    <h3 className="font-semibold text-red-800 mb-2">❌ MITO</h3>
                    <p className="text-red-700">{item.mito}</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                    <h3 className="font-semibold text-green-800 mb-2">✅ REALIDADE</h3>
                    <p className="text-green-700">{item.realidade}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Dados Científicos */}
        <section className="mb-16">
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-center mb-8">Evidências Científicas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-medical-blue mb-2">2-3M</div>
                <p className="text-gray-600">Vidas salvas por ano globalmente</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-medical-green mb-2">95%</div>
                <p className="text-gray-600">Redução de doenças preveníveis</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">50+</div>
                <p className="text-gray-600">Anos de uso seguro</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">99,9%</div>
                <p className="text-gray-600">Taxa de segurança</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-medical-blue to-medical-green text-white rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-4">Proteja-se e Proteja Quem Você Ama</h2>
            <p className="text-xl mb-6">
              A vacinação é um ato de amor próprio e coletivo. 
              Consulte seu médico e mantenha sua carteira de vacinação atualizada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-medical-blue px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Encontrar Posto de Vacinação
              </button>
              <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-medical-blue transition-colors">
                Download Calendário Vacinal
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
