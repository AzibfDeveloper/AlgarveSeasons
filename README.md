# Algarve Seasons | Premium HVAC & Solar Solutions

**Premium Air Conditioning, Solar Energy, and Heat Pump Services across the Algarve**

Algarve Seasons is a modern, responsive web application built with **React 19**, **Tailwind CSS 4**, and **shadcn/ui** components. The site showcases comprehensive HVAC, solar energy, and heat pump services across all 16 Algarve municipalities with geo-targeted landing pages, local SEO optimization, and interactive features.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-19.2-61dafb?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38b2ac?logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178c6?logo=typescript)

---

## 📋 Project Overview

Algarve Seasons is a full-featured service website designed to help homeowners and businesses find premium climate control solutions in the Algarve region. The platform features:

- **🗺️ 16 Geo-Targeted Municipality Pages** with LocalBusiness schema markup for local SEO visibility
- **🔧 Comprehensive Service Pages** for Air Conditioning, Solar Energy, Heat Pumps, and Tesla Powerwall
- **📝 Interactive Quote Forms** on every municipality page with confirmation pages
- **📚 Resources & Guides Section** with educational articles on HVAC maintenance and solar energy
- **📱 Responsive Design** optimized for desktop, tablet, and mobile devices
- **⭐ Trust Badges** highlighting Daikin D1+ Partnership, 200+ installations, and 5-star reviews
- **🎨 Seasonal Hero Animation** emphasizing the "All Seasons" branding with dynamic color transitions
- **🌐 Bilingual Support** with full English and Portuguese (PT) versions

---

## 🏗️ Project Structure

```
algarve-seasons-aeo/
├── client/
│   ├── public/                    # Static assets (favicons, robots.txt)
│   ├── src/
│   │   ├── components/            # Reusable React components
│   │   │   ├── Layout.tsx         # Main layout with header/footer
│   │   │   ├── LayoutPT.tsx       # Portuguese layout
│   │   │   ├── GeoLandingTemplate.tsx    # Template for geo pages
│   │   │   ├── LocalBusinessSchema.tsx   # JSON-LD schema component
│   │   │   ├── TrustBadges.tsx    # Trust badges component
│   │   │   ├── SeasonalHeroText.tsx     # Seasonal color animation
│   │   │   ├── ServiceHighlightCard.tsx # Service highlight cards
│   │   │   └── ui/               # shadcn/ui components
│   │   ├── pages/                 # Page components
│   │   │   ├── Home.tsx           # Homepage
│   │   │   ├── Contact.tsx        # Contact form
│   │   │   ├── services/          # Service pages
│   │   │   ├── geo/               # Geo-targeted landing pages
│   │   │   └── pt/                # Portuguese pages
│   │   ├── contexts/              # React contexts (Theme, etc.)
│   │   ├── lib/                   # Utility functions and data
│   │   ├── App.tsx                # Main app with routing
│   │   ├── main.tsx               # React entry point
│   │   └── index.css              # Global styles & design tokens
│   └── index.html                 # HTML entry point
├── server/                        # Backend server (Express)
├── shared/                        # Shared types and constants
├── package.json                   # Dependencies and scripts
├── vite.config.ts                 # Vite configuration
├── tailwind.config.ts             # Tailwind CSS configuration
├── tsconfig.json                  # TypeScript configuration
└── README.md                      # This file
```

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+ (recommended: 20+)
- **pnpm** 10.4.1+ (package manager)
- **Git** for version control

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/AzibfDeveloper/Algarve-Seasons.git
   cd algarve-seasons-aeo
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Create environment file:**
   ```bash
   cp .env.example .env.local
   ```

4. **Start development server:**
   ```bash
   pnpm dev
   ```

   The app will be available at `http://localhost:5173`

### Build for Production

```bash
pnpm build
pnpm preview
```

---

## 📚 Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server with hot reload |
| `pnpm build` | Build for production |
| `pnpm preview` | Preview production build locally |
| `pnpm check` | Run TypeScript type checking |
| `pnpm format` | Format code with Prettier |

---

## 🎨 Design System

### Color Palette

The project uses a sophisticated color system defined in `client/src/index.css`:

- **Primary**: Blue (for main CTAs and accents)
- **Secondary**: Slate (for secondary elements)
- **Accent Colors**: Red (Heat Pumps), Yellow (Solar), Green (Tesla Powerwall)
- **Semantic Colors**: Background, foreground, muted, destructive

### Typography

- **Display Font**: Outfit (headings, hero text)
- **Body Font**: Inter (paragraphs, body text)

### Components

All UI components are built with **shadcn/ui** and customized with Tailwind CSS. Key components include:

- Button, Card, Dialog, Form, Input, Select, Textarea
- Accordion, Tabs, Dropdown Menu, Navigation Menu
- Alert, Badge, Avatar, Progress, Skeleton

---

## 🌐 Bilingual Support

The website supports both **English** and **Portuguese (PT)** versions:

### English Routes
- `/` - Homepage
- `/services/air-conditioning` - AC services
- `/services/solar-energy` - Solar services
- `/services/heat-pumps` - Heat pump services
- `/contact` - Contact form
- `/about` - About page
- `/faq` - FAQ page

### Portuguese Routes
- `/pt-pt` - Homepage (PT)
- `/pt-pt/servicos/ar-condicionado` - AC services (PT)
- `/pt-pt/servicos/energia-solar` - Solar services (PT)
- `/pt-pt/servicos/bombas-calor` - Heat pump services (PT)
- `/pt-pt/contacto` - Contact form (PT)
- `/pt-pt/sobre` - About page (PT)
- `/pt-pt/faq` - FAQ page (PT)

---

## 🗺️ Geo-Targeted Pages

The website includes dedicated landing pages for 16 Algarve municipalities:

- Faro, Albufeira, Lagos, Portimão, Loulé, Tavira, Olhão, São Brás de Alportel
- Silves, Lagoa, Carriacação, Monchique, Aljezur, Vilamoura, and more

Each municipality page includes:
- LocalBusiness schema markup for local SEO
- Service highlights specific to the area
- Contact form with pre-filled location
- Nearby municipality links

---

## 🔐 Environment Variables

Create a `.env.local` file in the root directory:

```env
# Analytics
VITE_ANALYTICS_ENDPOINT=https://your-analytics-endpoint.com
VITE_ANALYTICS_WEBSITE_ID=your-website-id

# App Configuration
VITE_APP_ID=algarve-seasons
VITE_APP_TITLE=Algarve Seasons
VITE_APP_LOGO=https://your-cdn.com/logo.png

# API Configuration (if needed)
VITE_FRONTEND_FORGE_API_KEY=your-api-key
VITE_FRONTEND_FORGE_API_URL=https://your-api.com
```

---

## 📦 Dependencies

### Core Dependencies
- **React 19.2** - UI library
- **React Router (Wouter 3.3)** - Client-side routing
- **Tailwind CSS 4.1** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components
- **TypeScript 5.6** - Type safety

### UI & Interactions
- **Lucide React** - Icon library
- **Framer Motion** - Animation library
- **Sonner** - Toast notifications
- **React Hook Form** - Form management

### Development Tools
- **Vite 7.1** - Build tool and dev server
- **Prettier** - Code formatter
- **ESBuild** - JavaScript bundler

---

## 🧪 Testing & Quality

### Type Checking
```bash
pnpm check
```

### Code Formatting
```bash
pnpm format
```

---

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:

1. **Fork the repository** on GitHub
2. **Create a feature branch**: `git checkout -b feature/your-feature`
3. **Make your changes** and test thoroughly
4. **Commit with clear messages**: `git commit -m "Add feature: description"`
5. **Push to your fork**: `git push origin feature/your-feature`
6. **Open a Pull Request** with a detailed description

For detailed contribution guidelines, see [CONTRIBUTING.md](./CONTRIBUTING.md)

---

## 📖 Development Guide

For detailed development instructions, environment setup, and best practices, see [DEVELOPMENT.md](./DEVELOPMENT.md)

---

## 🐛 Bug Reports & Feature Requests

Found a bug or have a feature idea? Please open an issue on GitHub with:

- Clear title and description
- Steps to reproduce (for bugs)
- Expected vs. actual behavior
- Screenshots or videos if applicable
- Browser and OS information

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](./LICENSE) file for details.

---

## 👥 Authors

- **Azib Developer** - Project Lead
- **Algarve Seasons Team** - Service Provider

---

## 📞 Support

For support and inquiries:

- **Phone**: +351 910 675 168
- **Email**: Dan@algarveseasons.com
- **Website**: https://algarveseasons.com

---

## 🙏 Acknowledgments

- **Daikin** - Premium HVAC partner
- **Tesla** - Powerwall technology
- **shadcn/ui** - Component library
- **Tailwind CSS** - Styling framework
- **React** - UI framework

---

## 📊 Project Stats

- **Pages**: 30+ (including geo-targeted pages)
- **Components**: 50+ reusable components
- **Routes**: 40+ application routes
- **Municipalities**: 16 Algarve municipalities covered
- **Languages**: 2 (English & Portuguese)
- **Responsive Breakpoints**: Mobile, Tablet, Desktop

---

**Last Updated**: February 2026
**Version**: 1.0.0
