export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Vacinação Brasil</h3>
            <p className="text-gray-300">
              Portal oficial do Sistema Nacional de Imunização brasileiro.
              Informações confiáveis sobre vacinas e campanhas de vacinação.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Links Úteis</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="https://www.gov.br/saude" className="hover:text-white">Ministério da Saúde</a></li>
              <li><a href="https://www.fiocruz.br" className="hover:text-white">Fiocruz</a></li>
              <li><a href="https://www.anvisa.gov.br" className="hover:text-white">ANVISA</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Emergência</h3>
            <p className="text-gray-300 mb-2">SAMU: 192</p>
            <p className="text-gray-300">Disque Saúde: 136</p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Ministério da Saúde. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
