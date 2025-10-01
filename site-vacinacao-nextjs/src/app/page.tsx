import Link from 'next/link'

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-medical-blue to-medical-green text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Proteja-se e Proteja Quem Você Ama
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              A vacinação é uma das principais formas de prevenção de doenças.
              Juntos, podemos construir uma sociedade mais saudável e protegida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/campanhas" className="btn-primary">
                Ver Campanhas Ativas
              </Link>
              <Link href="/tipos-vacinas" className="btn-secondary">
                Conheça as Vacinas
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Resultados da Vacinação no Brasil em 2024
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="text-4xl font-bold text-medical-blue mb-2">270M+</div>
              <p className="text-gray-600">Doses Distribuídas</p>
            </div>

            <div className="card text-center">
              <div className="text-4xl font-bold text-medical-green mb-2">95,69%</div>
              <p className="text-gray-600">Cobertura Tríplice Viral</p>
            </div>

            <div className="card text-center">
              <div className="text-4xl font-bold text-medical-blue mb-2">91,73%</div>
              <p className="text-gray-600">Cobertura BCG</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Por que a Vacinação é Importante?
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-medical-green text-xl mr-3">✓</span>
                  <span>Previne doenças graves e potencialmente fatais</span>
                </li>
                <li className="flex items-start">
                  <span className="text-medical-green text-xl mr-3">✓</span>
                  <span>Protege a comunidade através da imunidade coletiva</span>
                </li>
                <li className="flex items-start">
                  <span className="text-medical-green text-xl mr-3">✓</span>
                  <span>Reduz os riscos de surtos e epidemias</span>
                </li>
                <li className="flex items-start">
                  <span className="text-medical-green text-xl mr-3">✓</span>
                  <span>Segurança e eficácia cientificamente comprovadas</span>
                </li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Encontre seu Posto de Vacinação</h3>
              <p className="text-gray-600 mb-4">
                Localize o posto de saúde mais próximo de você e mantenha sua
                carteira de vacinação em dia.
              </p>
              <button className="btn-primary w-full">
                Buscar Posto de Saúde
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
