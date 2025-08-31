# Overview

This is a personal portfolio website for Muhammad Anees, a Digital Marketing Strategist at WorkHub. The website showcases his professional experience, skills, education, certifications, and projects in a modern, dark-themed design. Built as a static website using only HTML and CSS, it features a comprehensive single-page layout with a dedicated projects page, emphasizing clean design principles and responsive user experience.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The website follows a static, multi-page architecture with two main HTML files:
- **index.html**: Main portfolio page containing all primary sections (hero, about, experience, skills, education, certifications, projects preview, contact)
- **projects.html**: Dedicated projects showcase page with detailed project cards

## Design System
- **CSS-Only Implementation**: No JavaScript frameworks or libraries, relying purely on CSS for animations and interactivity
- **Dark Theme**: Modern dark mode design using a primary color scheme of #0F172A (slate) with light text (#F1F5F9)
- **Component-Based Styling**: Modular CSS structure with reusable classes like `.glass-card` and `.container`
- **Typography Hierarchy**: Uses Google Fonts (Nunito for headings, Raleway for body text) with consistent weight and sizing

## Responsive Design Strategy
- **Mobile-First Approach**: CSS includes responsive breakpoints for desktop, tablet, and mobile devices
- **Flexible Grid System**: Custom container system with max-width constraints and flexible padding
- **Adaptive Navigation**: Hamburger menu implementation for mobile devices

## Visual Components
- **Glass Morphism Effects**: Semi-transparent cards with backdrop blur effects using `rgba(30, 41, 59, 0.8)`
- **Modern UI Elements**: Rounded corners, soft shadows, and smooth transitions
- **Timeline Design**: Vertical timeline layout for experience section
- **Card-Based Layouts**: Consistent card design patterns across skills, certifications, and projects sections

## Navigation Architecture
- **Fixed Navigation Bar**: Persistent top navigation with smooth scroll functionality
- **Single Page Navigation**: Hash-based routing for section navigation on the main page
- **Cross-Page Linking**: Proper linking structure between index and projects pages

# External Dependencies

## Typography
- **Google Fonts**: 
  - Nunito (weights: 400, 600, 700, 800) for headings
  - Raleway (weights: 300, 400, 500, 600) for body text

## Icons
- **Font Awesome 6.0.0**: CDN-hosted icon library for UI elements and social media icons

## Third-Party Services
- **Google Fonts API**: For web font delivery and optimization
- **Cloudflare CDN**: For Font Awesome icon delivery

## Browser Compatibility
- **Modern CSS Features**: Utilizes CSS Grid, Flexbox, and CSS custom properties
- **Progressive Enhancement**: Graceful degradation for older browsers through fallback styling

Note: The website is designed as a static portfolio with no backend dependencies, database connections, or server-side processing requirements.