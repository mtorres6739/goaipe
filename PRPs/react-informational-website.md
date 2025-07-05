name: "React Informational Website - AIPE Platform"
description: |

## Purpose
Convert the existing static HTML AIPE website into a modern React application with component-based architecture, improved performance, SEO optimization, and maintainability for future backend integration.

## Core Principles
1. **Context is King**: Include ALL necessary documentation, examples, and caveats
2. **Validation Loops**: Provide executable tests/lints the AI can run and fix
3. **Information Dense**: Use keywords and patterns from the codebase
4. **Progressive Success**: Start simple, validate, then enhance
5. **Global rules**: Be sure to follow all rules in CLAUDE.md

---

## Goal
Build a modern, performant React-based informational website for AIPE (Artificial Intelligence for Performance Enhancement) that:
- Converts the existing index.html into a component-based React application
- Implements the design mockups provided in the examples/ folder
- Uses Vite for fast development and optimized builds
- Implements Tailwind CSS for utility-first styling matching the dark theme
- Ensures accessibility (a11y) and SEO best practices
- Prepares for future backend/authentication features
- Creates a responsive experience for mobile and desktop

## Why
- **Business value**: Modernize the web presence with a scalable, maintainable architecture
- **User impact**: Faster load times, better user experience, improved SEO
- **Integration**: Component-based structure enables easy future feature additions
- **Problems solved**: Static HTML limitations, poor maintainability, difficult updates

## What
User-visible behavior:
- Multi-page React application with smooth client-side routing
- Dark-themed professional design matching provided mockups
- Responsive layout adapting to all screen sizes
- Fast page loads and transitions
- SEO-friendly with proper meta tags and structure

### Success Criteria
- [ ] All pages from mockups implemented (Home, Solutions, Voice Agent)
- [ ] Lighthouse scores: Performance >90, Accessibility >95, SEO >95
- [ ] Mobile responsive on all common devices
- [ ] TypeScript compilation with no errors
- [ ] All components properly typed and documented
- [ ] Smooth animations and transitions
- [ ] Contact form functionality (email link for now)

## All Needed Context

### Documentation & References
```yaml
# MUST READ - Include these in your context window
- url: https://react.dev/learn
  why: Official React documentation for hooks, components, and best practices
  
- url: https://vitejs.dev/guide/
  why: Vite setup, configuration, and optimization techniques
  
- url: https://tailwindcss.com/docs
  section: Utility-First Fundamentals, Dark Mode, Responsive Design
  critical: Use JIT mode for optimal performance
  
- url: https://react.dev/reference/react/hooks
  why: Modern React patterns using hooks exclusively
  
- url: https://www.typescriptlang.org/docs/handbook/react.html
  why: TypeScript with React patterns and type definitions

- url: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA
  section: ARIA roles and semantic HTML
  critical: Ensure all interactive elements are keyboard accessible

- file: /Users/mathewtorres/SynologyDrive/mattorres/my-apps/goaipe/index.html
  why: Current HTML structure to convert, contains all content

- file: /Users/mathewtorres/SynologyDrive/mattorres/my-apps/goaipe/examples/*.jpeg
  why: Design mockups showing exact layouts and components needed
```

### Current Codebase tree
```bash
/Users/mathewtorres/SynologyDrive/mattorres/my-apps/goaipe/
├── CLAUDE.md
├── INITIAL.md
├── PRPs/
│   └── templates/
├── README.md
├── aipe.png
├── examples/
│   ├── 24e5605e-a467-43fe-bc66-bc59914b97ee.jpeg  # Solutions page mockup
│   ├── 6477c73e-567d-4699-82b6-84c7cac6baf7.jpeg  # Voice Agent page mockup
│   └── fdb1d035-3d7d-4f76-8e2a-08c60d4a7172.jpeg  # Homepage mockup
└── index.html
```

### Desired Codebase tree with files to be added and responsibility
```bash
/Users/mathewtorres/SynologyDrive/mattorres/my-apps/goaipe/
├── src/
│   ├── App.tsx                    # Main app component with routing
│   ├── main.tsx                   # Entry point
│   ├── vite-env.d.ts              # Vite type definitions
│   ├── components/
│   │   ├── common/
│   │   │   ├── Header.tsx         # Navigation header
│   │   │   ├── Footer.tsx         # Footer with links
│   │   │   ├── Container.tsx      # Max-width container
│   │   │   └── SEO.tsx            # React Helmet wrapper
│   │   ├── sections/
│   │   │   ├── Hero.tsx           # Hero section variants
│   │   │   ├── Solutions.tsx      # Solution cards grid
│   │   │   ├── Process.tsx        # Step-by-step process
│   │   │   ├── TechStack.tsx      # Technology showcase
│   │   │   ├── Testimonials.tsx   # Client testimonials
│   │   │   └── CTA.tsx            # Call-to-action sections
│   │   └── ui/
│   │       ├── Card.tsx           # Reusable card component
│   │       ├── Button.tsx         # Button variants
│   │       ├── Badge.tsx          # Status/label badges
│   │       └── GradientText.tsx   # Gradient text effects
│   ├── pages/
│   │   ├── Home.tsx               # Homepage
│   │   ├── Solutions.tsx          # Solutions overview
│   │   └── VoiceAgent.tsx         # Voice agent specific
│   ├── assets/
│   │   └── images/                # Optimized images
│   ├── styles/
│   │   └── globals.css            # Global styles & Tailwind
│   └── utils/
│       ├── constants.ts           # App constants
│       └── types.ts               # TypeScript types
├── public/
│   └── (static assets)
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── .gitignore
└── index.html                     # Vite entry HTML
```

### Known Gotchas & Library Quirks
```typescript
// CRITICAL: Vite + React requires specific setup
// 1. Use .tsx extension for components with JSX
// 2. Import React in every component file (can be configured away)
// 3. Vite serves ES modules in dev, different from CRA

// CRITICAL: Tailwind CSS in Vite
// Must configure PostCSS properly for Tailwind to work
// Use tailwind.config.js content paths to scan .tsx files

// CRITICAL: TypeScript with Vite
// Use "moduleResolution": "bundler" in tsconfig.json
// Path aliases require both tsconfig and vite.config setup

// CRITICAL: React 18+ patterns
// Use function components with hooks exclusively
// No class components
// Proper TypeScript types for all props

// CRITICAL: Dark mode implementation
// Use Tailwind's dark mode with class strategy
// Set dark class on html element
```

## Implementation Blueprint

### Data models and structure

```typescript
// types.ts - Core type definitions
export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface Solution {
  id: string;
  title: string;
  description: string;
  icon: string; // For icon component name
  features: string[];
  ctaText: string;
  ctaLink: string;
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
  icon: string;
}

export interface TechPartner {
  name: string;
  logo: string;
  description: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  content: string;
  rating?: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  slug: string;
  image?: string;
}
```

### List of tasks to be completed in order

```yaml
Task 1: Initialize Vite React TypeScript project
CREATE project structure:
  - Run: npm create vite@latest . -- --template react-ts
  - Install dependencies: npm install
  - Set up initial folder structure

Task 2: Configure Tailwind CSS
INSTALL Tailwind and dependencies:
  - npm install -D tailwindcss postcss autoprefixer
  - npx tailwindcss init -p
MODIFY tailwind.config.js:
  - Configure content paths for .tsx files
  - Set up dark mode with class strategy
  - Add custom colors matching the design
CREATE src/styles/globals.css:
  - Add Tailwind directives
  - Custom base styles for dark theme

Task 3: Set up routing and base layout
INSTALL React Router:
  - npm install react-router-dom @types/react-router-dom
CREATE src/App.tsx:
  - Set up BrowserRouter
  - Define routes for all pages
  - Implement layout wrapper

Task 4: Create common components
CREATE src/components/common/Header.tsx:
  - Responsive navigation with mobile menu
  - Active route highlighting
  - Smooth scroll behavior
CREATE src/components/common/Footer.tsx:
  - Links sections matching mockup
  - Social media icons
  - Copyright notice
CREATE src/components/common/Container.tsx:
  - Max-width wrapper with responsive padding
CREATE src/components/common/SEO.tsx:
  - React Helmet wrapper for meta tags

Task 5: Create UI components
CREATE src/components/ui/Button.tsx:
  - Primary, secondary, outline variants
  - Size variations
  - Loading states
CREATE src/components/ui/Card.tsx:
  - Different card layouts for content
  - Hover effects
  - Image support
CREATE src/components/ui/GradientText.tsx:
  - Animated gradient text effects

Task 6: Create section components
CREATE src/components/sections/Hero.tsx:
  - Multiple variants for different pages
  - CTA buttons
  - Background effects
CREATE src/components/sections/Solutions.tsx:
  - Grid layout for solution cards
  - Icon integration
  - Learn more links
CREATE src/components/sections/Process.tsx:
  - Step indicators
  - Progress visualization
  - Responsive layout
CREATE src/components/sections/TechStack.tsx:
  - Logo grid
  - Hover effects
  - Partner descriptions
CREATE src/components/sections/Testimonials.tsx:
  - Carousel or grid layout
  - Quote styling
  - Author info

Task 7: Implement pages
CREATE src/pages/Home.tsx:
  - Hero section with main CTA
  - About section
  - Solutions overview
  - Latest insights
CREATE src/pages/Solutions.tsx:
  - Solutions hero
  - Detailed solutions grid
  - How it works process
  - Success stories
  - Tech stack showcase
CREATE src/pages/VoiceAgent.tsx:
  - Voice agent specific hero
  - Service cards
  - Key features
  - Success metrics
  - Implementation process

Task 8: Add SEO and accessibility
INSTALL react-helmet-async:
  - npm install react-helmet-async @types/react-helmet-async
IMPLEMENT SEO component usage:
  - Page-specific meta tags
  - Open Graph tags
  - Structured data
ADD accessibility features:
  - Proper heading hierarchy
  - ARIA labels
  - Keyboard navigation
  - Focus management

Task 9: Performance optimizations
IMPLEMENT lazy loading:
  - React.lazy for route splitting
  - Suspense boundaries
  - Image lazy loading
ADD performance features:
  - Optimize images
  - Preload critical assets
  - Minimize bundle size

Task 10: Testing and validation
CREATE unit tests:
  - Component rendering tests
  - Accessibility tests
  - Route tests
RUN validation:
  - TypeScript compilation
  - ESLint checks
  - Lighthouse audits
```

### Per task pseudocode

```typescript
// Task 4: Header.tsx pseudocode
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/#about' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Research', href: '/#research' },
    { label: 'Contact', href: '/#contact' }
  ];
  
  // Mobile menu toggle
  // Active link highlighting using location.pathname
  // Smooth scroll for hash links
  // Logo with home link
  // Responsive design with Tailwind classes
};

// Task 6: Hero.tsx pseudocode
interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  variant?: 'home' | 'page' | 'centered';
  backgroundImage?: string;
}

const Hero: React.FC<HeroProps> = ({ variant = 'home', ...props }) => {
  // Different layouts based on variant
  // Gradient text for titles
  // CTA button with proper styling
  // Background effects (gradients, images)
  // Responsive typography scaling
};

// Task 7: Home.tsx page pseudocode
import { Hero, Solutions, CTA, BlogGrid } from '@/components';

const HomePage = () => {
  // Set page meta tags with SEO component
  // Hero section with main messaging
  // About AIPE section with content from index.html
  // Solutions preview (3 main solutions)
  // Latest insights section
  // CTA section for contact
};
```

### Integration Points
```yaml
ROUTING:
  - add to: src/App.tsx
  - pattern: Use React Router v6 with lazy loading
  - routes: '/', '/solutions', '/voice-agent'
  
STYLING:
  - add to: tailwind.config.js
  - colors: 
    primary: '#00bfff'
    background: '#121212'
    surface: '#1e1e1e'
  - fonts: Use Inter or similar modern font
  
STATE:
  - pattern: Use React Context for theme if needed
  - pattern: Local state with useState for UI interactions
  
BUILD:
  - add to: vite.config.ts
  - resolve aliases for @ imports
  - build optimizations
```

## Validation Loop

### Level 1: Syntax & Style
```bash
# Run these FIRST - fix any errors before proceeding
npm run build              # TypeScript compilation
npm run lint               # ESLint checks
npm run format             # Prettier formatting

# Expected: No errors. If errors, READ the error and fix.
```

### Level 2: Component Tests
```typescript
// Example test for Button component
import { render, screen } from '@testing-library/react';
import { Button } from '@/components/ui/Button';

describe('Button', () => {
  test('renders with correct text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
  
  test('applies correct variant classes', () => {
    render(<Button variant="primary">Test</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-primary');
  });
  
  test('is keyboard accessible', () => {
    render(<Button>Test</Button>);
    const button = screen.getByRole('button');
    button.focus();
    expect(document.activeElement).toBe(button);
  });
});
```

```bash
# Run tests
npm test
# Expected: All tests pass
```

### Level 3: Build and Preview
```bash
# Development server
npm run dev
# Visit http://localhost:5173
# Check all pages render correctly

# Production build
npm run build
npm run preview
# Visit http://localhost:4173
# Verify production build works
```

### Level 4: Lighthouse Audit
```bash
# Run Lighthouse in Chrome DevTools
# Target scores:
# - Performance: >90
# - Accessibility: >95
# - Best Practices: >90
# - SEO: >95

# Common issues to check:
# - Image optimization
# - Text contrast ratios
# - Meta descriptions
# - Mobile viewport
```

## Final Validation Checklist
- [ ] TypeScript compiles without errors: `npm run build`
- [ ] No ESLint errors: `npm run lint`
- [ ] All routes work correctly
- [ ] Mobile responsive (test at 320px, 768px, 1024px, 1440px)
- [ ] Keyboard navigation works throughout
- [ ] All images have alt text
- [ ] Page meta tags are unique per page
- [ ] Contact form/button works (mailto link)
- [ ] Dark theme is consistent
- [ ] Animations are smooth and performant
- [ ] Bundle size is reasonable (<250KB gzipped)

---

## Anti-Patterns to Avoid
- ❌ Don't use class components - use function components with hooks
- ❌ Don't skip TypeScript types - type all props and state
- ❌ Don't use inline styles - use Tailwind classes
- ❌ Don't forget loading states - add Suspense boundaries
- ❌ Don't ignore accessibility - test with keyboard and screen reader
- ❌ Don't use any type - be specific with TypeScript
- ❌ Don't hardcode colors - use Tailwind config
- ❌ Don't skip SEO meta tags - each page needs unique tags

## Confidence Score: 9/10

This PRP provides comprehensive context for converting the static AIPE website into a modern React application. The detailed implementation steps, code examples, and validation processes should enable successful one-pass implementation. The only uncertainty is around specific animation requirements which may need refinement based on user feedback.