# Tradeland.tv — Financial Education & Trading Analytics Platform

Tradeland.tv is a premier financial educational portal and market intelligence platform designed for traders, market analysts, and cryptocurrency investors. Built with React, TypeScript, and Vite, Tradeland offers real-time market insights, technical analysis, structured courses, digital products, broker evaluations, economic calendar tracking, and crypto airdrop monitoring.

The platform natively supports full Internationalization (i18n) with instant switching between English (LTR) and Persian (RTL) layouts.

---

## 🚀 Key Features

- **🌐 Dual-Language Infrastructure (English & Persian)**
  - Dynamic LTR / RTL layout switching
  - Full translations for English and Persian
  - Multi-currency converter (USD, EUR, Toman, BTC, USDT)

- **🎓 Trading Academy & Digital Store**
  - Structured video courses (Price Action, Smart Money Concepts, ICT, Elliott Wave)
  - Downloadable booklets, PDF guides, custom indicators, and trading tools
  - Instructor portal for course creation and student management

- **📊 Market Analytics & Trading Signals**
  - Daily technical and fundamental analysis setups with target levels
  - Real-time market rates for forex, crypto, stocks, and commodities
  - Live macroeconomic calendar with impact filtering

- **🎁 Crypto Airdrop Tracker**
  - Active, upcoming, and completed airdrop directory with step-by-step guides
  - Interactive progress tracking for task completion

- **🏦 Global Broker Reviews**
  - Comprehensive ratings covering spreads, leverage, regulations, and support

- **🛡️ Admin & Content Management System**
  - Modular page management, content editing, user role controls, and SEO tools

---

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Routing & State**: React Router DOM, React Query (`@tanstack/react-query`), React Context API
- **Styling**: Tailwind CSS (Dark/Light mode support)
- **Icons**: Lucide Icons (`lucide-react`)
- **Data Visualization**: Recharts, ApexCharts

---

## 📁 Project Structure

```text
.
├── components/          # Reusable UI components (Academy, Admin, Home, Layout, UI)
├── constants/           # Translation dictionaries, navigation, categories
├── context/             # Global Context providers (Auth, Language, Theme, Currency)
├── data/                # Data repositories & mock data
├── hooks/               # Custom React hooks
├── pages/               # Application route views & pages
├── providers/           # App-level provider wrappers
├── routes/              # Application routing definitions
├── services/            # API services and data mappers
└── types/               # TypeScript interfaces & types
```

---

## 🏁 Getting Started

### Prerequisites

- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

---

## 📜 License

Distributed under the MIT License.
