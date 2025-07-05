# AIPE - Artificial Intelligence for Performance Enhancement

A modern React-based informational website for AIPE, showcasing AI-driven solutions for insurance, real estate, and performance enhancement.

## 🚀 Features

- **Modern Tech Stack**: React 19 + TypeScript + Vite
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark Theme**: Professional dark mode design
- **SEO Optimized**: React Helmet for meta tags and SEO
- **Performance**: Lazy loading and code splitting
- **Accessibility**: WCAG compliant with semantic HTML and ARIA labels

## 📦 Installation

```bash
# Clone the repository
git clone [repository-url]
cd goaipe

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🛠️ Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type checking
npm run build # (includes TypeScript compilation)
```

## 🏗️ Project Structure

```
goaipe/
├── src/
│   ├── components/
│   │   ├── common/      # Header, Footer, Container, SEO
│   │   ├── sections/    # Hero, Solutions, Process, etc.
│   │   └── ui/          # Button, Card, Badge, etc.
│   ├── pages/           # Home, Solutions, VoiceAgent
│   ├── utils/           # Types, constants, mock data
│   ├── styles/          # Global CSS with Tailwind
│   ├── App.tsx          # Main app with routing
│   └── main.tsx         # Entry point
├── public/              # Static assets
└── index.html           # HTML template
```

## 🎨 Tech Stack

- **Frontend Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v3
- **Routing**: React Router v7
- **SEO**: React Helmet Async
- **Icons**: Emoji icons (can be replaced with icon libraries)

## 📱 Pages

1. **Home**: Landing page with hero, about, solutions preview
2. **Solutions**: Detailed AI solutions for policy enhancement
3. **Voice Agent**: AI-powered voice agent solutions for insurance

## 🎯 Key Components

- **Hero**: Flexible hero section with multiple variants
- **Solutions Grid**: Showcase solution cards with features
- **Process Steps**: Visual process flow
- **Tech Stack**: Technology partner showcase
- **Testimonials**: Customer success stories
- **CTA**: Call-to-action sections

## 🔧 Configuration

### Tailwind CSS
Custom colors and theme configuration in `tailwind.config.js`:
- Primary: #00bfff (bright blue)
- Background: #121212 (dark)
- Surface: #1e1e1e (elevated dark)

### TypeScript
Path aliases configured for cleaner imports:
```typescript
import { Component } from '@/components/common'
```

## 📈 Performance

- Lighthouse scores targets:
  - Performance: >90
  - Accessibility: >95
  - SEO: >95
  - Best Practices: >90

## 🚢 Deployment

Build the project and deploy the `dist` folder:

```bash
npm run build
# Deploy dist/ folder to your hosting service
```

Compatible with:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## 📝 License

© 2025 Artificial Intelligence for Performance Enhancement LLC. All rights reserved.

## 🤝 Contributing

For questions or contributions, contact: contact@goaipe.com