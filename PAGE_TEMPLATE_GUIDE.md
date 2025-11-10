# Page Template Guide & Best Practices

## Overview

This guide explains how to use the PageTemplate component to create new subpages following the established design system.

---

## 🎨 PageTemplate Component Structure

### Basic Usage

```tsx
'use client';

import PageTemplate from '@/components/PageTemplate';
import { Icon1, Icon2, Icon3 } from 'lucide-react';

export default function PageName() {
  return (
    <PageTemplate
      title="Page Title"
      subtitle="Descriptive subtitle explaining the page purpose"
      sections={[
        {
          title: "Section 1 Title",
          description: "Optional description for section",
          icon: <Icon1 className="w-6 h-6" />,
          content: <div>Section 1 Content</div>,
        },
        {
          title: "Section 2 Title",
          description: "Optional description for section",
          icon: <Icon2 className="w-6 h-6" />,
          content: <div>Section 2 Content</div>,
        },
        {
          title: "Section 3 Title",
          description: "Optional description for section",
          icon: <Icon3 className="w-6 h-6" />,
          content: <div>Section 3 Content</div>,
        },
      ]}
    />
  );
}
```

---

## 📋 Component Props

### PageTemplate Props

```typescript
interface PageTemplateProps {
  title: string;              // Page main heading
  subtitle: string;           // Page subheading/description
  sections: Section[];        // Array of 3 sections
  heroGradient?: string;      // Optional: Custom gradient classes
}

interface Section {
  title: string;              // Section heading
  description?: string;       // Optional: Section description
  content: ReactNode;         // Section content (JSX)
  icon?: ReactNode;          // Optional: Lucide icon
}
```

---

## 🎯 Design Pattern: 3-Section Layout

### Section Types & Best Practices

#### Section 1: Overview/Introduction
- **Purpose**: Introduce the topic
- **Content**: Paragraph text + optional intro content
- **Icon**: General/informational icon

**Example**:
```tsx
{
  title: "Program Overview",
  description: "Introduction to the program",
  icon: <BookOpen className="w-6 h-6" />,
  content: (
    <div className="space-y-6">
      <p className="text-lg text-corporate-textSecondary dark:text-gray-400">
        Descriptive text about the program...
      </p>
      {/* Additional intro content */}
    </div>
  ),
}
```

#### Section 2: Key Features/Details
- **Purpose**: Present main information
- **Content**: Grids, lists, cards, tables
- **Icon**: Related to content type

**Example**:
```tsx
{
  title: "Key Features",
  description: "What makes this special",
  icon: <Zap className="w-6 h-6" />,
  content: (
    <div className="grid md:grid-cols-2 gap-6">
      {/* Feature cards or lists */}
    </div>
  ),
}
```

#### Section 3: Resources/Contact
- **Purpose**: Provide resources and next steps
- **Content**: Downloads, contact cards, CTAs
- **Icon**: Related to action (Download, Users, Phone)

**Example**:
```tsx
{
  title: "Downloads & Contact",
  description: "Resources and contact information",
  icon: <Download className="w-6 h-6" />,
  content: (
    <div className="space-y-6">
      {/* Download cards and contact info */}
    </div>
  ),
}
```

---

## 🎨 Content Building Blocks

### 1. Text Content

```tsx
<p className="text-lg text-corporate-textSecondary dark:text-gray-400 leading-relaxed">
  Your paragraph text here
</p>
```

### 2. Lists

```tsx
<ul className="space-y-3">
  {items.map((item, idx) => (
    <li key={idx} className="flex items-center gap-2">
      <span className="w-2 h-2 bg-corporate-blue rounded-full"></span>
      <span className="text-corporate-textSecondary dark:text-gray-400">{item}</span>
    </li>
  ))}
</ul>
```

### 3. 2-Column Grid

```tsx
<div className="grid md:grid-cols-2 gap-6">
  <div className="p-6 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
    {/* Content */}
  </div>
  {/* More items */}
</div>
```

### 4. 3-Column Grid

```tsx
<div className="grid md:grid-cols-3 gap-4">
  {/* Cards or items */}
</div>
```

### 5. Info Cards

```tsx
<div className="p-6 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
  <h4 className="font-bold text-corporate-navy dark:text-white mb-4">Title</h4>
  <p className="text-corporate-textSecondary dark:text-gray-400">Content</p>
</div>
```

### 6. Highlight Boxes

```tsx
<div className="p-6 bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-700">
  <h4 className="font-bold text-corporate-navy dark:text-white mb-3">Title</h4>
  <p className="text-corporate-textSecondary dark:text-gray-400">Content</p>
</div>
```

### 7. Statistics Display

```tsx
<div className="p-6 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 text-center">
  <div className="text-3xl font-bold text-corporate-blue mb-2">90%+</div>
  <p className="text-corporate-navy dark:text-white font-semibold text-sm">Metric Label</p>
</div>
```

### 8. Buttons

```tsx
<button className="px-4 py-2 bg-corporate-blue text-white rounded-lg hover:opacity-90 transition-opacity text-sm font-medium">
  Button Text
</button>
```

---

## 🎯 Icon Selection Guide

### Available Icons (Lucide React)

Popular icons for different content:

```
Information & Overview:
- BookOpen, BookMarked, Info, HelpCircle

Actions & Features:
- Zap, Lightbulb, Target, Check, CheckCircle, Award

People:
- Users, User, UserCheck, UserGraduate, MapPin

Organization:
- Building, Briefcase, Organization, Workflow

Technology:
- Code, Database, Settings, Cpu, Wifi

Communication:
- Phone, Mail, MessageSquare, Send, Share2

Finance:
- DollarSign, TrendingUp, Award, Gift

Download & Resources:
- Download, FileText, File, Archive, Link

Navigation:
- ChevronRight, ArrowRight, Calendar, Clock
```

**Import Example**:
```tsx
import { BookOpen, Zap, Users, Award, Download } from 'lucide-react';
```

---

## 🎨 Color Classes Reference

### Background Colors

```tsx
// White/Light
"bg-white"              // White background
"bg-surface"            // Light gray (existing color)
"bg-corporate-background" // Corporate light bg

// Blue tones
"bg-blue-50"            // Very light blue
"bg-blue-900/30"        // Dark blue with opacity
"bg-cyan-50"            // Very light cyan
"bg-cyan-900/30"        // Dark cyan with opacity

// Dark mode
"dark:bg-gray-700"      // Dark gray
"dark:bg-gray-800"      // Darker gray
```

### Text Colors

```tsx
// Primary text
"text-corporate-navy"       // Dark blue text
"text-corporate-blue"       // Brand blue
"text-corporate-textSecondary" // Gray text

// Dark mode variants
"dark:text-white"
"dark:text-gray-200"
"dark:text-gray-400"
```

### Border Colors

```tsx
"border-gray-200"
"border-gray-600"         // dark mode
"border-blue-200"
"border-blue-700"         // dark mode
```

---

## 📐 Spacing & Layout

### Consistent Spacing

```tsx
// Margin/Padding (Tailwind scale)
"mb-2"   // 0.5rem
"mb-3"   // 0.75rem
"mb-4"   // 1rem
"mb-6"   // 1.5rem
"mb-8"   // 2rem
"mb-12"  // 3rem
"mb-16"  // 4rem

// Gap between items
"gap-2"
"gap-3"
"gap-4"
"gap-6"
"gap-8"
```

### Responsive Breakpoints

```tsx
// Tailwind breakpoints
"hidden lg:flex"        // Hide on mobile, show on desktop
"md:grid-cols-2"        // 1 column by default, 2 on tablet+
"md:grid-cols-3"        // 1 column by default, 3 on tablet+
"md:p-12"               // Different padding on tablet+
```

---

## 🎬 Animation & Transitions

### Built-in Animations

The PageTemplate automatically includes:
- Hero section fade-in animation
- Section slide-in on scroll
- Smooth transitions on hover

### Adding Custom Animations

```tsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 10 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.3 }}
>
  {/* Content */}
</motion.div>
```

---

## ✨ Best Practices

### Do's ✅

1. **Use semantic HTML**
   ```tsx
   <h2>Section Title</h2>  // Not <div className="text-2xl font-bold">
   <p>Paragraph text</p>   // Not <div>
   <button>Click me</button> // Not <div onClick={...}>
   ```

2. **Maintain consistent spacing**
   ```tsx
   // Good: Consistent gap values
   <div className="space-y-4">
     <div>Item 1</div>
     <div>Item 2</div>
   </div>
   ```

3. **Use descriptive content**
   ```tsx
   <p className="text-sm text-corporate-textSecondary dark:text-gray-400">
     Clear description
   </p>
   ```

4. **Provide dark mode support**
   ```tsx
   <div className="bg-white dark:bg-gray-700">
     <p className="text-corporate-navy dark:text-white">Text</p>
   </div>
   ```

5. **Make content scannable**
   - Use headings effectively
   - Short paragraphs
   - Lists for multiple items
   - Visual hierarchy with icons

### Don'ts ❌

1. **Don't hardcode colors without dark mode**
   ```tsx
   // Bad
   <div className="bg-blue-500">
   // Good
   <div className="bg-blue-50 dark:bg-blue-900/30">
   ```

2. **Don't use inconsistent spacing**
   ```tsx
   // Bad: Mixed gap values
   <div className="gap-2">...</div>
   <div className="gap-8">...</div>
   // Good: Consistent gaps
   <div className="gap-6">...</div>
   ```

3. **Don't skip icon descriptions**
   ```tsx
   // Bad
   <Icon />
   // Good
   <Icon className="w-6 h-6" />
   ```

4. **Don't ignore mobile responsiveness**
   ```tsx
   // Bad
   <div className="grid-cols-3">
   // Good
   <div className="grid md:grid-cols-3 gap-6">
   ```

5. **Don't use too many different text colors**
   - Primary: corporate-navy
   - Secondary: corporate-textSecondary
   - Accent: corporate-blue

---

## 📱 Responsive Design Checklist

- [ ] Mobile layout (< 768px)
  - Single column grids
  - Large touch targets (44px+)
  - Readable font sizes
  
- [ ] Tablet layout (768px - 1023px)
  - 2-3 column grids
  - Proper spacing
  - Touch-friendly
  
- [ ] Desktop layout (1024px+)
  - Full feature display
  - Multi-column layouts
  - Hover states

---

## 🧪 Testing Your Page

### Visual Testing
1. Check desktop view (1920px, 1366px)
2. Check tablet view (768px, 1024px)
3. Check mobile view (375px, 480px)
4. Test dark mode toggle
5. Verify all links work

### Content Testing
1. Proof-read all text
2. Verify section flow
3. Check icon appropriateness
4. Test responsive breakpoints
5. Validate dark mode contrast

### Performance Testing
1. Check page load time
2. Verify no console errors
3. Test on slow 3G
4. Check Lighthouse scores
5. Verify image optimization

---

## 📝 Example: Complete Page

```tsx
'use client';

import PageTemplate from '@/components/PageTemplate';
import { BookOpen, Users, Download, Award } from 'lucide-react';

export default function ExamplePage() {
  return (
    <PageTemplate
      title="Example Page"
      subtitle="This is an example of a properly structured page using PageTemplate"
      sections={[
        {
          title: "Introduction",
          description: "What this section is about",
          icon: <BookOpen className="w-6 h-6" />,
          content: (
            <div className="space-y-6">
              <p className="text-lg text-corporate-textSecondary dark:text-gray-400 leading-relaxed">
                This is an introductory paragraph explaining the main topic. It should be clear, concise, and engaging.
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-6 border border-blue-200 dark:border-blue-700">
                <p className="text-corporate-navy dark:text-white font-semibold">
                  Key point or highlight
                </p>
              </div>
            </div>
          ),
        },
        {
          title: "Main Content",
          description: "Detailed information and features",
          icon: <Users className="w-6 h-6" />,
          content: (
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: 'Feature 1', desc: 'Description' },
                { title: 'Feature 2', desc: 'Description' },
              ].map((feature, idx) => (
                <div key={idx} className="p-6 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
                  <h4 className="font-bold text-corporate-navy dark:text-white mb-2">{feature.title}</h4>
                  <p className="text-sm text-corporate-textSecondary dark:text-gray-400">{feature.desc}</p>
                </div>
              ))}
            </div>
          ),
        },
        {
          title: "Resources",
          description: "Downloads and contact",
          icon: <Download className="w-6 h-6" />,
          content: (
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
                <h4 className="font-bold text-corporate-navy dark:text-white mb-3">Download</h4>
                <button className="px-4 py-2 bg-corporate-blue text-white rounded-lg hover:opacity-90 text-sm font-medium">
                  Download PDF
                </button>
              </div>
              <div className="p-6 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
                <h4 className="font-bold text-corporate-navy dark:text-white mb-3">Contact</h4>
                <p className="text-sm text-corporate-textSecondary dark:text-gray-400 mb-3">
                  Email: contact@example.com
                </p>
                <button className="px-4 py-2 bg-corporate-blue text-white rounded-lg hover:opacity-90 text-sm font-medium">
                  Get in Touch
                </button>
              </div>
            </div>
          ),
        },
      ]}
    />
  );
}
```

---

## 🔗 Additional Resources

- [Lucide Icons](https://lucide.dev/) - Icon library
- [Tailwind CSS Docs](https://tailwindcss.com/docs) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Next.js App Router](https://nextjs.org/docs/app) - Framework

---

**Last Updated**: November 2024  
**Version**: 1.0
