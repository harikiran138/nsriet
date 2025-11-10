# NSRIET Website Navigation & Page Redesign

## Overview

Complete redesign of the website's navigation structure and subpage layouts following a professional, academic theme with consistent 3-section page templates.

## 🧭 Navigation Structure

### Menu Items (Updated)

The main navigation now includes:

1. **Home** - Landing page
2. **Academics** - Academic programs and resources
3. **About** - Institution information
4. **CDC** - Career Development Cell
5. **Admissions** - Admission information
6. **Governance** - Institutional governance
7. **Quick Links** - Additional resources

## 📄 Page Structure

### 3-Section Layout Template

Every subpage follows a consistent 3-section structure:

```
┌─────────────────────────────────────┐
│         HERO SECTION                │
│    (Title, Subtitle, Gradient)      │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│      SECTION 1 (OVERVIEW)           │
│   Icon | Title | Description        │
│   Content with rich information     │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│   SECTION 2 (KEY FEATURES/DETAILS)  │
│   Icon | Title | Description        │
│   Organized content, lists, grids   │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│  SECTION 3 (RESOURCES/CONTACTS)     │
│   Icon | Title | Description        │
│   Downloads, contact info, CTA      │
└─────────────────────────────────────┘
```

## 📂 Page Directory Structure

```
app/
├── academics/
│   ├── page.tsx (Main Academics Page)
│   ├── programs/
│   │   ├── page.tsx (Programs Overview)
│   │   ├── cse/page.tsx
│   │   ├── cse-aiml/page.tsx
│   │   ├── ece/page.tsx
│   │   ├── eee/page.tsx
│   │   └── me/page.tsx
│   ├── competency-curriculum/page.tsx
│   ├── best-practices/page.tsx
│   ├── lms/page.tsx
│   ├── calendar/page.tsx
│   └── krc/page.tsx
│
├── about/
│   ├── page.tsx (Main About Page)
│   ├── history/page.tsx
│   ├── management/page.tsx
│   ├── leadership/page.tsx
│   └── nadimpalli-informatics/page.tsx
│
├── cdc/
│   ├── page.tsx (Main CDC Page)
│   ├── about/page.tsx
│   ├── guidance/page.tsx
│   ├── skills/page.tsx
│   ├── internships/page.tsx
│   ├── placements/page.tsx
│   ├── higher-education/page.tsx
│   ├── resources/page.tsx
│   ├── announcements/page.tsx
│   └── contact/page.tsx
│
├── admissions/
│   ├── page.tsx (Main Admissions Page)
│   ├── why/page.tsx
│   ├── undergraduate/page.tsx
│   └── postgraduate/page.tsx
│
└── governance/
    ├── page.tsx (Main Governance Page)
    ├── organogram/page.tsx
    ├── governing-body/page.tsx
    └── committees/page.tsx
```

## 🎨 Design Features

### Component Architecture

1. **PageTemplate.tsx** - Reusable template for all subpages
   - Hero section with gradient background
   - Icon-based section headers
   - Responsive grid layouts
   - Animated section transitions
   - Dark mode support

2. **GenericPageTemplate.tsx** - Quick template for simple pages
   - Simplified 3-section structure
   - Icon-based sections
   - Item lists and content

### Visual Elements

- **Color Scheme**: Corporate blue (#003366), cyan, white, gray
- **Typography**: Source Sans 3 (primary), with semantic markup
- **Icons**: Lucide React icons for visual hierarchy
- **Animations**: Smooth fade-in and slide animations using Framer Motion
- **Spacing**: Consistent padding and margins following design system

### Responsive Design

- **Desktop**: Full navigation bar with hover dropdowns
- **Tablet**: Optimized grid layouts (2-3 columns)
- **Mobile**: Hamburger menu, single-column layouts, touch-friendly spacing

## ✨ Key Features

### Navigation
- ✅ Dropdown menus with smooth animations
- ✅ Mobile-responsive hamburger menu
- ✅ Theme toggle (light/dark mode)
- ✅ Breadcrumb support (ready to implement)

### Page Features
- ✅ Consistent branding and styling
- ✅ Icon-based content organization
- ✅ Responsive grid layouts
- ✅ Smooth scroll animations
- ✅ Call-to-action buttons
- ✅ Download resources sections
- ✅ Contact information cards
- ✅ Statistics and metrics displays

## 🔄 Migration from Old Structure

### Removed
- "Centre Design" menu item
- "IIC" menu item
- "Industry Connect" menu item
- Old About submenu structure

### Updated
- Academics structure with comprehensive programs
- About section with History, Management, Leadership
- CDC expanded to 9 sections
- Admissions reorganized
- Governance added with proper hierarchy

## 📱 Mobile Experience

- Hamburger menu button for screens < 1024px
- Single-column layout on mobile
- Touch-friendly button sizes
- Optimized typography for readability
- Fast loading with lazy image loading

## 🎯 Implementation Guide

### Creating a New Subpage

1. Create directory: `app/section/subsection/`
2. Create `page.tsx` with:

```tsx
'use client';

import PageTemplate from '@/components/PageTemplate';
import { Icon1, Icon2, Icon3 } from 'lucide-react';

export default function PageName() {
  return (
    <PageTemplate
      title="Page Title"
      subtitle="Descriptive subtitle"
      sections={[
        {
          title: "Section 1 Title",
          description: "Optional description",
          icon: <Icon1 className="w-6 h-6" />,
          content: <div>Content here</div>,
        },
        // Repeat for sections 2 and 3
      ]}
    />
  );
}
```

### Adding Navigation Links

Update `components/Navbar.tsx` `navLinks` array:

```tsx
{
  name: 'Menu Item',
  href: '/menu-item',
  submenu: [
    { name: 'Subitem 1', href: '/menu-item/subitem-1' },
    { name: 'Subitem 2', href: '/menu-item/subitem-2' },
  ],
}
```

## 🔧 Customization

### Colors
Edit `tailwind.config.ts` for color schemes:
- `corporate-blue`: Main brand color
- `corporate-navy`: Dark text color
- `corporate-textSecondary`: Secondary text

### Fonts
Currently using "Source Sans 3" from Google Fonts. Update in `app/layout.tsx`.

### Animations
Framer Motion is configured in `PageTemplate.tsx`. Adjust timing in:
- `initial={{ opacity: 0, y: 20 }}`
- `animate={{ opacity: 1, y: 0 }}`
- `transition={{ duration: 0.6 }}`

## 📊 SEO Optimization

- Semantic HTML structure
- Proper heading hierarchy (h1, h2, h3)
- Meta descriptions in layout.tsx
- Open Graph tags for social sharing
- Mobile-first indexing ready

## 🚀 Performance

- Next.js 14+ with App Router
- CSS-in-JS with Tailwind
- Image optimization ready
- Component code splitting
- Fast navigation with Link prefetching

## 📝 Content Guidelines

### Section Titles
- Clear, descriptive headings
- 3-5 words maximum
- Action-oriented when appropriate

### Descriptions
- Concise introductory text
- Under 100 words
- Professional academic tone

### Icons
- One per section
- Related to section content
- Size: w-6 h-6 for consistency

### Content
- Bulleted lists for multiple items
- Grid layouts for 2+ related items
- Cards for individual features
- Tables for comparisons

## 🔗 Useful Links

- [Navbar Component](components/Navbar.tsx)
- [PageTemplate Component](components/PageTemplate.tsx)
- [Example Page: Academics](app/academics/programs/page.tsx)
- [Tailwind Config](tailwind.config.ts)

## ✅ Checklist for Completeness

Pages Implemented:
- [x] Navbar with updated menu structure
- [x] Academics - Programs overview & individual programs
- [x] Academics - Competency Curriculum
- [x] Academics - Best Practices
- [x] Academics - LMS
- [x] Academics - Academic Calendar
- [x] Academics - Knowledge Resource Centre
- [x] About - History
- [x] About - Management
- [x] About - Leadership
- [ ] About - Nadimpalli Informatics LLP
- [x] CDC - About
- [x] CDC - Placements
- [ ] CDC - Career Guidance & Counseling
- [ ] CDC - Skill Development & Training
- [ ] CDC - Internship & Apprenticeships
- [ ] CDC - Higher Education Support
- [ ] CDC - Resources & Support
- [ ] CDC - Announcements & Events
- [ ] CDC - Contact
- [x] Admissions - Why NSRIET?
- [x] Admissions - Undergraduate Programs
- [x] Admissions - Postgraduate Programs
- [x] Governance - Organogram
- [x] Governance - Governing Body
- [ ] Governance - Institutional Committees
- [ ] Quick Links - All sections

## 🎓 Academic Theme Elements

- Professional color scheme (corporate blue + white)
- Educational institutional layout
- Research-focused content structure
- Student and faculty-oriented design
- Accreditation and quality indicators
- Industry partnership highlights
- Career outcomes emphasis

---

**Last Updated**: November 2024
**Version**: 1.0
**Status**: In Progress (Core structure complete, additional pages pending)
