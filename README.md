# Site de Vacinação Brasil - Next.js

Este é um site desenvolvido em Next.js 14+ sobre campanhas de vacinação no Brasil, com informações sobre tipos de vacinas, campanhas ativas e a importância da imunização.

## 🚀 Tecnologias Utilizadas

- **Next.js 14+** com App Router
- **React 18** 
- **TypeScript**
- **Tailwind CSS**
- **CSS Modules**

## 📁 Estrutura do Projeto

```
src/
├── app/                    # App Router do Next.js
│   ├── layout.tsx         # Layout raiz
│   ├── page.tsx          # Página inicial
│   ├── campanhas/        # Página de campanhas
│   ├── tipos-vacinas/    # Página de tipos de vacinas
│   └── sobre/            # Página sobre vacinação
├── components/           # Componentes reutilizáveis
│   ├── Header.tsx       # Cabeçalho com navegação
│   └── Footer.tsx       # Rodapé
└── styles/              # Estilos globais
    └── globals.css      # CSS global com Tailwind
```

## 📱 Páginas do Site

1. **Início (/)** - Hero section com estatísticas de vacinação
2. **Campanhas (/campanhas)** - Informações sobre campanhas ativas
3. **Tipos de Vacinas (/tipos-vacinas)** - Detalhes sobre vacinas disponíveis
4. **Sobre (/sobre)** - Importância da vacinação e combate a mitos

## 🎨 Design

- Cores médicas: Azul (#3B82F6) e Verde (#10B981)
- Design limpo e profissional
- Totalmente responsivo
- Foco na experiência do usuário

## 🚀 Como Executar

```bash
# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev

# Construir para produção
npm run build

# Executar em produção
npm start
```

## 📊 Dados e Informações

Todas as informações sobre vacinação são baseadas em dados oficiais do Ministério da Saúde e órgãos competentes, incluindo:

- Estatísticas de cobertura vacinal 2024
- Tipos de vacinas do calendário nacional
- Campanhas de vacinação ativas
- Benefícios cientificamente comprovados

## 🏥 Sobre o Projeto

Este site foi desenvolvido para educar e informar a população brasileira sobre a importância da vacinação, combatendo desinformação e promovendo a saúde pública através de informações confiáveis e design acessível.
