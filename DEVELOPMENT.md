# Development Guide for Algarve Seasons

This guide provides detailed instructions for setting up your development environment and working on the Algarve Seasons project.

---

## 📋 Table of Contents

1. [Prerequisites](#prerequisites)
2. [Environment Setup](#environment-setup)
3. [Project Structure](#project-structure)
4. [Development Workflow](#development-workflow)
5. [Common Tasks](#common-tasks)
6. [Debugging](#debugging)
7. [Performance Optimization](#performance-optimization)
8. [Best Practices](#best-practices)

---

## 📦 Prerequisites

### Required Software

- **Node.js** 18+ (recommended: 20 LTS)
  - Download: https://nodejs.org/
  - Verify: `node --version`

- **pnpm** 10.4.1+
  - Install: `npm install -g pnpm`
  - Verify: `pnpm --version`

- **Git** 2.30+
  - Download: https://git-scm.com/
  - Verify: `git --version`

### Recommended Tools

- **VS Code** - Code editor
  - Extensions:
    - ES7+ React/Redux/React-Native snippets
    - Tailwind CSS IntelliSense
    - TypeScript Vue Plugin
    - Prettier - Code formatter
    - ESLint

- **Chrome DevTools** - Browser debugging
- **React Developer Tools** - Chrome extension
- **Postman** - API testing (if working with backend)

---

## 🔧 Environment Setup

### 1. Clone the Repository

```bash
git clone https://github.com/AzibfDeveloper/Algarve-Seasons.git
cd algarve-seasons-aeo
```

### 2. Install Dependencies

```bash
pnpm install
```

This installs all project dependencies listed in `package.json`.

### 3. Create Environment File

```bash
cp .env.example .env.local
```

Edit `.env.local` with your configuration values:

```env
VITE_APP_ID=algarve-seasons
VITE_APP_TITLE=Algarve Seasons
VITE_ANALYTICS_WEBSITE_ID=your-website-id
```

### 4. Start Development Server

```bash
pnpm dev
```

The app will be available at `http://localhost:5173`

---

## 📁 Project Structure

### Frontend Structure (`client/src/`)

```
client/src/
├── components/
│   ├── Layout.tsx                 # Main layout wrapper
│   ├── LayoutPT.tsx               # Portuguese layout
│   ├── TrustBadges.tsx            # Trust indicators
│   ├── SeasonalHeroText.tsx       # Animated hero text
│   ├── ServiceHighlightCard.tsx   # Service cards
│   ├── GeoLandingTemplate.tsx     # Geo-page template
│   ├── LocalBusinessSchema.tsx    # SEO schema markup
│   ├── Map.tsx                    # Google Maps integration
│   ├── Reviews.tsx                # Customer reviews
│   ├── ErrorBoundary.tsx          # Error handling
│   └── ui/                        # shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       ├── form.tsx
│       ├── input.tsx
│       ├── select.tsx
│       └── ...
├── pages/
│   ├── Home.tsx                   # Homepage
│   ├── Contact.tsx                # Contact form
│   ├── About.tsx                  # About page
│   ├── FAQ.tsx                    # FAQ page
│   ├── Testimonials.tsx           # Reviews page
│   ├── ResourcesGuides.tsx        # Educational content
│   ├── Careers.tsx                # Job listings
│   ├── PrivacyTerms.tsx           # Legal pages
│   ├── QuoteConfirmation.tsx      # Quote confirmation
│   ├── NotFound.tsx               # 404 page
│   ├── services/
│   │   ├── AirConditioning.tsx
│   │   ├── SolarEnergy.tsx
│   │   ├── HeatPumps.tsx
│   │   ├── TeslaPowerwall.tsx
│   │   ├── Maintenance.tsx
│   │   └── AllInOneSolutions.tsx
│   ├── geo/
│   │   ├── FaroLanding.tsx
│   │   ├── AlbufeiraLanding.tsx
│   │   └── ... (16 municipality pages)
│   └── pt/                        # Portuguese pages
│       ├── HomePT.tsx
│       ├── ContatoPT.tsx
│       ├── SobrePT.tsx
│       ├── FAQPT.tsx
│       └── services/
├── contexts/
│   └── ThemeContext.tsx           # Theme management
├── hooks/
│   └── (custom React hooks)
├── lib/
│   ├── faqData.ts                 # FAQ content
│   ├── faqDataPT.ts               # Portuguese FAQ
│   ├── municipalities.ts          # Municipality data
│   └── (utility functions)
├── App.tsx                        # Main app with routing
├── main.tsx                       # React entry point
└── index.css                      # Global styles & design tokens
```

### Configuration Files

```
├── vite.config.ts                 # Vite build configuration
├── tailwind.config.ts             # Tailwind CSS configuration
├── tsconfig.json                  # TypeScript configuration
├── components.json                # shadcn/ui configuration
├── .prettierrc                    # Prettier formatting rules
├── .prettierignore                # Prettier ignore patterns
└── .gitignore                     # Git ignore patterns
```

---

## 🚀 Development Workflow

### Starting Development

```bash
# Start dev server
pnpm dev

# In another terminal, check types
pnpm check

# Format code
pnpm format
```

### Creating a New Page

1. **Create the page file** in `client/src/pages/`:

```tsx
import Layout from "@/components/Layout";
import { Helmet } from "react-helmet-async";

export default function MyPage() {
  return (
    <Layout>
      <Helmet>
        <title>My Page | Algarve Seasons</title>
        <meta name="description" content="Page description" />
      </Helmet>
      
      <section className="py-20">
        <div className="container">
          <h1 className="text-4xl font-bold">Welcome</h1>
        </div>
      </section>
    </Layout>
  );
}
```

2. **Add route** in `client/src/App.tsx`:

```tsx
import MyPage from "@/pages/MyPage";

// In the routes section:
<Route path="/my-page" component={MyPage} />
```

### Creating a New Component

1. **Create the component file** in `client/src/components/`:

```tsx
import { ReactNode } from 'react';

interface MyComponentProps {
  title: string;
  children: ReactNode;
}

export default function MyComponent({ title, children }: MyComponentProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">{title}</h2>
      {children}
    </div>
  );
}
```

2. **Use the component** in your pages:

```tsx
import MyComponent from "@/components/MyComponent";

export default function MyPage() {
  return (
    <MyComponent title="Hello">
      <p>Content here</p>
    </MyComponent>
  );
}
```

### Adding Portuguese Translations

1. **Create Portuguese page** in `client/src/pages/pt/`:

```tsx
import LayoutPT from "@/components/LayoutPT";

export default function MyPagePT() {
  return (
    <LayoutPT>
      {/* Portuguese content */}
    </LayoutPT>
  );
}
```

2. **Add route** in `client/src/App.tsx`:

```tsx
const MyPagePT = lazy(() => import("@/pages/pt/MyPagePT"));

// In routes:
<Route path="/pt-pt/my-page" component={MyPagePT} />
```

---

## 📝 Common Tasks

### Adding a New Service Page

1. Create `client/src/pages/services/MyService.tsx`
2. Use the existing service page as a template
3. Add route in `App.tsx`
4. Create Portuguese version in `client/src/pages/pt/services/MyServicePT.tsx`
5. Add Portuguese route in `App.tsx`

### Updating Styling

Global styles are in `client/src/index.css`:

```css
@layer base {
  :root {
    --color-primary: 59 130 246; /* Blue */
    --color-secondary: 100 116 139; /* Slate */
  }
}
```

Use Tailwind classes in components:

```tsx
<div className="bg-primary text-white p-4 rounded-lg">
  Styled with Tailwind
</div>
```

### Adding Images

1. Upload to CDN and get URL
2. Use absolute URLs in `<img>` tags:

```tsx
<img 
  src="https://cdn.example.com/image.jpg"
  alt="Description"
  className="rounded-lg"
/>
```

### Updating Content

Edit the relevant page or data file:

- **FAQ Content**: `client/src/lib/faqData.ts` and `faqDataPT.ts`
- **Municipality Data**: `client/src/lib/municipalities.ts`
- **Service Descriptions**: Individual service page files

---

## 🐛 Debugging

### Browser DevTools

1. Open Chrome DevTools: `F12` or `Ctrl+Shift+I`
2. **Console**: View logs and errors
3. **Elements**: Inspect HTML and CSS
4. **Network**: Monitor API calls
5. **Performance**: Check load times

### React DevTools

1. Install Chrome extension: React Developer Tools
2. Inspect component hierarchy
3. Check props and state
4. Track component renders

### TypeScript Checking

```bash
pnpm check
```

Fixes type errors before building.

### Console Logging

```tsx
console.log('Debug info:', data);
console.error('Error:', error);
console.warn('Warning:', warning);
```

### Common Issues

| Issue | Solution |
|-------|----------|
| Port 5173 in use | `lsof -i :5173` then `kill -9 <PID>` |
| Dependencies not installing | Delete `node_modules` and `pnpm-lock.yaml`, then `pnpm install` |
| TypeScript errors | Run `pnpm check` to see all errors |
| Styling not applying | Check Tailwind class names and specificity |
| Routes not working | Verify route path in `App.tsx` matches component import |

---

## ⚡ Performance Optimization

### Code Splitting

Routes are lazy-loaded in `App.tsx`:

```tsx
const MyPage = lazy(() => import("@/pages/MyPage"));
```

This reduces initial bundle size.

### Image Optimization

- Use CDN URLs for images
- Optimize image sizes before uploading
- Use appropriate formats (WebP, JPEG, PNG)
- Add `alt` text for accessibility

### CSS Optimization

- Use Tailwind utility classes (no custom CSS)
- Remove unused styles with Tailwind purging
- Avoid inline styles

### Build Optimization

```bash
pnpm build
```

Generates optimized production build in `dist/` folder.

---

## ✅ Best Practices

### Code Quality

- ✅ Use TypeScript for type safety
- ✅ Use functional components with hooks
- ✅ Keep components small and focused
- ✅ Use meaningful variable names
- ✅ Add comments for complex logic
- ✅ Handle errors gracefully

### Styling

- ✅ Use Tailwind utility classes
- ✅ Use design tokens (colors, spacing)
- ✅ Follow mobile-first approach
- ✅ Ensure responsive design
- ✅ Test on multiple devices

### Accessibility

- ✅ Use semantic HTML (`<button>`, `<nav>`, etc.)
- ✅ Add `alt` text to images
- ✅ Use proper heading hierarchy
- ✅ Ensure keyboard navigation
- ✅ Use ARIA labels when needed
- ✅ Maintain color contrast

### Performance

- ✅ Minimize bundle size
- ✅ Use lazy loading for routes
- ✅ Optimize images
- ✅ Avoid unnecessary re-renders
- ✅ Use React.memo for expensive components

### Security

- ✅ Sanitize user input
- ✅ Use environment variables for secrets
- ✅ Validate form data
- ✅ Use HTTPS for external resources
- ✅ Keep dependencies updated

### Testing

- ✅ Test in multiple browsers
- ✅ Test on mobile devices
- ✅ Test form submissions
- ✅ Test error states
- ✅ Check console for warnings

---

## 📚 Resources

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com)
- [Vite Documentation](https://vitejs.dev)
- [Wouter Router](https://github.com/molefrog/wouter)

---

## 🆘 Getting Help

- Check existing issues on GitHub
- Read the [README.md](./README.md)
- Review the [CONTRIBUTING.md](./CONTRIBUTING.md)
- Open a new GitHub issue
- Contact the maintainers

---

**Last Updated**: February 2026
**Version**: 1.0.0
