# Reilly Website Memory

## Project Overview
Portfolio website for Reilly Thomson, Project & Marketing Coordinator in the art world.

## Tech Stack
- Next.js 16.1.6 (App Router, Turbopack)
- TypeScript
- MUI v5 (Material UI) — dark theme, color #E8192C red accent
- Framer Motion for animations
- Tailwind CSS v4
- Space Grotesk (Google Font, weights 300-700 only — 800 not available)

## Design System
- Background: #000000
- Text: #FFFFFF
- Accent: #E8192C (red)
- Secondary text: rgba(255,255,255,0.45–0.6)
- Borders: rgba(255,255,255,0.07–0.1)
- Font: Space Grotesk (headings), Geist Sans (body)

## Key Files
- `src/app/layout.tsx` — root layout, fonts, metadata
- `src/app/page.tsx` — main page assembling all sections
- `src/app/globals.css` — global styles
- `src/lib/theme.ts` — MUI dark theme
- `src/lib/ThemeRegistry.tsx` — client-side MUI ThemeProvider
- `src/components/Navbar.tsx` — fixed nav with mobile drawer
- `src/components/Hero.tsx` — full-screen animated hero
- `src/components/Marquee.tsx` — scrolling ticker
- `src/components/About.tsx` — bio + skills section
- `src/components/ProjectSection.tsx` — reusable project section (media grid + description)
- `src/components/Footer.tsx` — download resume + social links
- `src/data/projects.ts` — all 4 project data (David Zwirner, Casa MB, M+B, Domo Damo)
- `src/data/personal.ts` — bio, skills, social links (UPDATE social links with actual URLs)

## Media Organization (public/media/)
- david-zwirner/ — Didier William exhibition content (8 images)
- casa-mb/ — modernist Brutalist architecture (10 images)
- mb/ — M+B Gallery LA content (3 images)
- domo-damo/ — Tate Modern + community mural (2 images)
- videos/ — video-1.mp4 to video-4.mp4

## Resume
- Located at: `public/resume/Reilly-Thomson-Resume.pdf`
- Source PDF: `Reilly Thomson Resume_Project & Marketing Coordinator_Q1-2026.pdf`

## Pending Action
- UPDATE social links in `src/data/personal.ts` with actual LinkedIn/Instagram URLs from resume
  (PDF couldn't be read — poppler not installed, strings extraction returned binary data)