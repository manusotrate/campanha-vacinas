export default function CampanhasPage() {
  const campanhas = [
    {
      nome: "Campanha Nacional de Vacinação Infantil",
      descricao: "Vacinação de rotina para crianças de 0 a 15 anos com foco na recuperação das coberturas vacinais.",
      status: "Ativa",
      periodo: "Todo o ano de 2024",
      publico: "Crianças e adolescentes",
      vacinas: ["BCG", "Hepatite B", "Tríplice Viral", "Meningocócica"]
    },
    {
      nome: "Campanha de Vacinação contra Poliomielite",
      descricao: "Campanha específica para manter a eliminação da poliomielite no Brasil.",
      status: "Concluída",
      periodo: "Agosto a Setembro 2024",
      publico: "Crianças de 1 a 4 anos",
      vacinas: ["VOP (Vacina Oral Poliomielite)"]
    },
    {
      nome: "Vacinação contra HPV",
      descricao: "Campanha de conscientização e vacinação contra o Papilomavírus Humano.",
      status: "Ativa",
      periodo: "Todo o ano",
      publico: "Meninas e meninos de 9 a 14 anos",
      vacinas: ["HPV Quadrivalente"]
    }
  ]

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Campanhas de Vacinação 2024</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Acompanhe as principais campanhas de vacinação em andamento no Brasil
            e mantenha sua família protegida.
          </p>
        </div>

        {/* Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="card text-center">
            <div className="text-2xl font-bold text-medical-blue mb-2">270M+</div>
            <p className="text-gray-600">Doses Distribuídas em 2024</p>
          </div>
          <div className="card text-center">
            <div className="text-2xl font-bold text-medical-green mb-2">3</div>
            <p className="text-gray-600">Campanhas Ativas</p>
          </div>
          <div className="card text-center">
            <div className="text-2xl font-bold text-orange-500 mb-2">92M</div>
            <p className="text-gray-600">Doses nos Últimos 6 Meses</p>
          </div>
        </div>

        {/* Campanhas List */}
        <div className="space-y-6">
          {campanhas.map((campanha, index) => (
            <div key={index} className="card">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <h3 className="text-xl font-semibold mr-3">{campanha.nome}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium $${
                      campanha.status === 'Ativa' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {campanha.status}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{campanha.descricao}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-semibold text-medical-blue mb-1">Período</h4>
                  <p className="text-gray-600">{campanha.periodo}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-medical-blue mb-1">Público-alvo</h4>
                  <p className="text-gray-600">{campanha.publico}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-medical-blue mb-1">Vacinas</h4>
                  <div className="flex flex-wrap gap-1">
                    {campanha.vacinas.map((vacina, vIndex) => (
                      <span key={vIndex} className="bg-medical-gray px-2 py-1 rounded text-sm">
                        {vacina}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-medical-blue text-white rounded-lg p-8 mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Mantenha sua Vacinação em Dia</h2>
          <p className="mb-6">
            Procure a unidade de saúde mais próxima e verifique sua carteira de vacinação.
            A prevenção é o melhor remédio!
          </p>
          <button className="bg-white text-medical-blue px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Encontrar Posto de Saúde
          </button>
        </div>
      </div>
    </div>
  )
}
