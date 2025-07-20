# NestLogos - AI Logo Generation Platform

## Overview
A modern, responsive React website for AI-powered logo generation, built with Vite and TailwindCSS. The platform features a clean, professional design inspired by LogoDiffusion with dark/light mode toggle and smooth animations.

## User Preferences
- Communication style: Simple, everyday language
- Technology stack: React with Vite, TailwindCSS
- Design: Clean, modern, minimal layout with ocean blue gradient themes

## System Architecture

### Frontend Technology Stack
- **Framework**: React 19.1.0 with Vite 6.3.5
- **Styling**: TailwindCSS 4.1.11 with custom animations
- **Build Tool**: Vite with React plugin
- **Fonts**: Inter font family for modern typography
- **Icons**: Inline SVG icons for performance

### Project Structure
```
src/
├── components/
│   ├── Header.jsx - Navigation with dark mode toggle
│   ├── Hero.jsx - Landing section with CTAs
│   ├── HowItWorks.jsx - 4-step process explanation
│   ├── Gallery.jsx - Logo samples with filtering
│   ├── Pricing.jsx - Three-tier pricing plans
│   ├── FAQ.jsx - Expandable FAQ section
│   └── Footer.jsx - Links and newsletter signup
├── index.css - TailwindCSS with custom components
├── main.jsx - React app entry point
└── App.jsx - Main app with dark mode context
```

### Key Features
- **Dark/Light Mode**: Toggle with localStorage persistence
- **Responsive Design**: Mobile-first approach with breakpoints
- **Smooth Animations**: Custom CSS animations and transitions
- **Performance Optimized**: Lazy loading and optimized images
- **SEO Ready**: Semantic HTML and meta tags

## Recent Changes
- **2025-07-20**: Initial React setup with Vite and TailwindCSS
- **2025-07-20**: Created all main components with modern design
- **2025-07-20**: Implemented dark mode toggle functionality
- **2025-07-20**: Added responsive design for all screen sizes

## Development Commands
- `npm run dev` - Start development server on port 5000
- `npm run build` - Build production version
- `npm run preview` - Preview production build

## External Dependencies
- **React**: Frontend framework
- **Vite**: Build tool and development server
- **TailwindCSS**: Utility-first CSS framework
- **PostCSS & Autoprefixer**: CSS processing
- **Unsplash**: Placeholder images for logo gallery

## Current Status
Project setup complete with all components created. Need to configure npm scripts and start development server.