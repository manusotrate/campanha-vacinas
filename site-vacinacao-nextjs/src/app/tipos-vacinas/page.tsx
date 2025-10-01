export default function TiposVacinasPage() {
  const vacinas = [
    {
      nome: "BCG",
      doenca: "Tuberculose",
      idade: "Ao nascer",
      doses: "1 dose",
      descricao: "Previne as formas graves da tuberculose, principalmente meningite tuberculosa e tuberculose miliar.",
      tipo: "Atenuada",
      cor: "bg-blue-100"
    },
    {
      nome: "Hepatite B",
      doenca: "Hepatite B",
      idade: "Ao nascer, 2 e 6 meses",
      doses: "3 doses",
      descricao: "Previne a hepatite B, uma infecção viral que afeta o fígado e pode causar cirrose e câncer hepático.",
      tipo: "Recombinante",
      cor: "bg-green-100"
    },
    {
      nome: "Tríplice Viral",
      doenca: "Sarampo, Caxumba e Rubéola",
      idade: "12 meses e 15 meses",
      doses: "2 doses",
      descricao: "Protege contra três doenças virais altamente contagiosas que podem causar complicações graves.",
      tipo: "Atenuada",
      cor: "bg-purple-100"
    },
    {
      nome: "HPV Quadrivalente",
      doenca: "Papilomavírus Humano",
      idade: "9 a 14 anos",
      doses: "2 doses",
      descricao: "Previne os tipos de HPV que causam câncer de colo do útero, vulva, vagina, ânus e verrugas genitais.",
      tipo: "Recombinante",
      cor: "bg-pink-100"
    },
    {
      nome: "Pneumocócica 10",
      doenca: "Pneumonia e Meningite",
      idade: "2, 4 e 6 meses + reforço",
      doses: "3 + 1 reforço",
      descricao: "Protege contra pneumonias, meningites e outras infecções causadas pelo pneumococo.",
      tipo: "Conjugada",
      cor: "bg-yellow-100"
    },
    {
      nome: "Meningocócica C",
      doenca: "Meningite Meningocócica",
      idade: "3 e 5 meses + reforço",
      doses: "2 + 1 reforço",
      descricao: "Previne a meningite e outras infecções graves causadas pela bactéria meningococo C.",
      tipo: "Conjugada",
      cor: "bg-red-100"
    },
    {
      nome: "Hepatite A",
      doenca: "Hepatite A",
      idade: "15 meses",
      doses: "1 dose",
      descricao: "Previne a hepatite A, uma infecção viral que afeta o fígado e é transmitida via fecal-oral.",
      tipo: "Inativada",
      cor: "bg-indigo-100"
    },
    {
      nome: "Varicela",
      doenca: "Catapora",
      idade: "15 meses",
      doses: "1 dose",
      descricao: "Protege contra a varicela (catapora), doença viral altamente contagiosa com complicações possíveis.",
      tipo: "Atenuada",
      cor: "bg-teal-100"
    }
  ]

  const tiposVacina = [
    {
      tipo: "Atenuadas",
      descricao: "Contêm microorganismos vivos enfraquecidos que não causam doença, mas estimulam imunidade duradoura."
    },
    {
      tipo: "Inativadas",
      descricao: "Contêm microorganismos mortos ou fragmentos que induzem resposta imune sem risco de infecção."
    },
    {
      tipo: "Recombinantes",
      descricao: "Produzidas através de engenharia genética, são muito seguras e específicas."
    },
    {
      tipo: "Conjugadas",
      descricao: "Combinam antígenos com proteínas para melhorar a resposta imune, especialmente em crianças."
    }
  ]

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Tipos de Vacinas</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça as principais vacinas disponíveis no Sistema Único de Saúde (SUS)
            e proteja-se em todas as fases da vida.
          </p>
        </div>

        {/* Tipos de Vacina Info */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Como as Vacinas Funcionam</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tiposVacina.map((tipo, index) => (
              <div key={index} className="card text-center">
                <h3 className="font-semibold text-medical-blue mb-2">{tipo.tipo}</h3>
                <p className="text-sm text-gray-600">{tipo.descricao}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Vacinas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {vacinas.map((vacina, index) => (
            <div key={index} className={`card ${vacina.cor}`}>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{vacina.nome}</h3>
                  <p className="text-medical-blue font-medium">{vacina.doenca}</p>
                </div>
                <span className="px-3 py-1 bg-white rounded-full text-sm font-medium text-gray-600">
                  {vacina.tipo}
                </span>
              </div>

              <p className="text-gray-700 mb-4">{vacina.descricao}</p>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Idade</h4>
                  <p className="text-gray-600">{vacina.idade}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Doses</h4>
                  <p className="text-gray-600">{vacina.doses}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Calendar Info */}
        <div className="mt-16 bg-gradient-to-r from-medical-blue to-medical-green text-white rounded-lg p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Calendário Nacional de Vacinação</h2>
            <p className="mb-6">
              O Ministério da Saúde disponibiliza gratuitamente todas essas vacinas
              através do Sistema Único de Saúde (SUS).
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">38</div>
                <p>Vacinas Disponíveis</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">36.000+</div>
                <p>Postos de Vacinação</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">100%</div>
                <p>Gratuito pelo SUS</p>
              </div>
            </div>
          </div>
        </div>

        {/* Important Note */}
        <div className="mt-12 p-6 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg">
          <div className="flex">
            <div className="ml-3">
              <h3 className="text-lg font-medium text-yellow-800">Importante</h3>
              <div className="mt-2 text-sm text-yellow-700">
                <p>
                  Sempre consulte um profissional de saúde antes da vacinação.
                  Leve sua carteira de vacinação atualizada e informe sobre alergias
                  ou condições médicas especiais.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
