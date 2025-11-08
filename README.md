# NSRIET - College Website

A modern, responsive, and performant college website built with Next.js 15, React 19, TailwindCSS, and Framer Motion.

## ✨ Features

- 🎨 **Modern Corporate Design** - Clean, professional UI with corporate color scheme
- 🌓 **Dark Mode** - Full dark mode support with theme toggle
- ⚡ **Performance Optimized** - Built with Next.js 15 for optimal performance
- 📱 **Fully Responsive** - Works seamlessly on all devices
- 🎭 **Smooth Animations** - Framer Motion for elegant page transitions
- ♿ **Accessible** - WCAG compliant design
- 🔍 **SEO Optimized** - Meta tags, sitemap, and robots.txt included
- 📊 **PWA Ready** - Progressive Web App support

## 🚀 Tech Stack

- **Framework:** Next.js 15
- **UI Library:** React 19
- **Styling:** TailwindCSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Language:** TypeScript
- **Deployment:** Vercel

## 📁 Project Structure

```
nsriet-website/
├── app/                      # Next.js app directory
│   ├── about/               # About page
│   ├── academics/           # Academics page
│   ├── admissions/          # Admissions page
│   ├── cdc/                 # Career Development Cell
│   ├── feedback/            # Feedback form
│   ├── governance/          # Governance structure
│   ├── iic/                 # Innovation Council
│   ├── industry/            # Industry partnerships
│   ├── quick-links/         # Quick links portal
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   ├── globals.css          # Global styles
│   ├── manifest.ts          # PWA manifest
│   └── sitemap.ts           # XML sitemap
├── components/              # Reusable components
│   ├── AnimatedCounter.tsx  # Animated number counter
│   ├── AnimatedSection.tsx  # Scroll-triggered animations
│   ├── FeedbackForm.tsx     # Contact/feedback form
│   ├── Footer.tsx           # Site footer
│   ├── Navbar.tsx           # Navigation header
│   ├── NotificationTicker.tsx # News ticker
│   └── ThemeProvider.tsx    # Dark mode provider
├── data/                    # JSON data files
│   └── events.json          # Events and notifications
├── lib/                     # Utility functions
│   └── utils.ts             # Helper utilities
├── public/                  # Static assets
│   ├── main-logo1.png       # College logo
│   └── robots.txt           # SEO robots file
└── Configuration files
```

## 🛠️ Installation

1. **Clone the repository**
```bash
cd nsriet-website
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.local.example .env.local
# Edit .env.local with your configuration
```

4. **Run development server**
```bash
npm run dev
```

5. **Open browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🚀 Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/nsriet-website)

### Manual Deployment

1. Install Vercel CLI
```bash
npm i -g vercel
```

2. Deploy
```bash
vercel
```

3. Follow prompts to complete deployment

## 📄 Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Landing page with hero, stats, features |
| About | `/about` | Vision, mission, management, infrastructure |
| Governance | `/governance` | Organization structure and governing bodies |
| Admissions | `/admissions` | Programs, eligibility, application process |
| Academics | `/academics` | Departments, faculty, academic calendar |
| IIC | `/iic` | Innovation council, events, projects |
| Industry Connect | `/industry` | Partners, MoUs, internships |
| CDC | `/cdc` | Placement stats, recruiters, training |
| Quick Links | `/quick-links` | Important resources and downloads |
| Feedback | `/feedback` | Feedback and grievance form |

## 🎨 Customization

### Colors

Edit `tailwind.config.ts` to change the corporate color scheme:

```typescript
corporate: {
  blue: '#003366',
  lightBlue: '#0066cc',
  gray: '#4a5568',
  lightGray: '#f7fafc',
}
```

### Content

- **Events:** Edit `data/events.json`
- **Navigation:** Modify `components/Navbar.tsx`
- **Footer Links:** Update `components/Footer.tsx`

## 🔧 Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint
```

## 📊 Performance

- Lighthouse Score: 90+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Cumulative Layout Shift: < 0.1

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the MIT License.

## 📧 Contact

For any queries, reach us at:
- Email: info@nsriet.edu.in
- Phone: +91 1234567890

---

**Built with ❤️ for NSRIET**
