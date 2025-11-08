# 🚀 Deployment Guide - NSRIET Website

## Quick Deploy to Vercel (Recommended)

### Option 1: One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Click the button above
2. Connect your GitHub/GitLab account
3. Import this repository
4. Vercel will auto-detect Next.js and configure settings
5. Click **Deploy**
6. Done! Your site will be live in ~2 minutes

### Option 2: Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Navigate to project directory
cd nsriet-website

# Login to Vercel
vercel login

# Deploy
vercel

# For production deployment
vercel --prod
```

### Option 3: GitHub Integration

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click **Add New Project**
4. Import your GitHub repository
5. Vercel auto-configures everything
6. Click **Deploy**

---

## Environment Variables

Create a `.env.local` file (optional):

```bash
# EmailJS for contact forms (optional)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

# Your domain
NEXT_PUBLIC_SITE_URL=https://nsriet.edu.in

# Google Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

In Vercel Dashboard:
1. Go to **Settings** → **Environment Variables**
2. Add each variable
3. Redeploy

---

## Custom Domain Setup

1. In Vercel Dashboard, go to **Settings** → **Domains**
2. Add your domain: `nsriet.edu.in`
3. Update DNS records at your domain registrar:

```
Type    Name    Value
A       @       76.76.21.21
CNAME   www     cname.vercel-dns.com
```

4. Wait for DNS propagation (~5-60 minutes)
5. Your site will be live at your custom domain!

---

## Performance Optimization Checklist

✅ **Completed:**
- [x] Next.js Image Optimization
- [x] Code splitting and lazy loading
- [x] TailwindCSS purging
- [x] Gzip compression
- [x] PWA support
- [x] SEO meta tags
- [x] Sitemap and robots.txt

📊 **Expected Lighthouse Scores:**
- Performance: 90-100
- Accessibility: 95-100
- Best Practices: 95-100
- SEO: 100

---

## Post-Deployment Steps

### 1. Test Everything
```bash
# Check all pages load
- Home: /
- About: /about
- Admissions: /admissions
- Academics: /academics
- And all other pages...

# Test dark mode toggle
# Test mobile responsiveness
# Test forms (feedback, etc.)
```

### 2. Set Up Analytics (Optional)

**Google Analytics:**
1. Create GA4 property
2. Add tracking ID to `.env.local`
3. Redeploy

**Vercel Analytics:**
- Automatically enabled for all projects
- View in Vercel Dashboard → Analytics

### 3. Configure EmailJS for Forms

1. Sign up at [emailjs.com](https://www.emailjs.com)
2. Create email service
3. Create email template
4. Get credentials
5. Add to environment variables
6. Update `components/FeedbackForm.tsx` with EmailJS integration

### 4. Monitor Performance

Vercel Dashboard shows:
- Real-time visitor analytics
- Performance metrics
- Error logs
- Build logs

---

## Continuous Deployment

Once connected to GitHub:
1. Any push to `main` branch auto-deploys
2. Pull requests get preview deployments
3. Automatic rollback on errors

---

## Troubleshooting

### Build Fails
```bash
# Check logs in Vercel Dashboard
# Common fixes:
npm run build  # Test locally first
npm run lint   # Fix linting errors
```

### Dark Mode Not Working
- Clear browser cache
- Check localStorage
- Ensure JavaScript enabled

### Images Not Loading
- Ensure images are in `public/` folder
- Check image paths start with `/`
- Verify Next.js image optimization config

### Slow Performance
- Check Lighthouse report
- Optimize images (use WebP/AVIF)
- Enable Vercel Analytics
- Review Core Web Vitals

---

## Updates & Maintenance

### Update Content
1. Edit files in `app/` or `data/`
2. Commit and push to GitHub
3. Auto-deploys in ~2 minutes

### Update Dependencies
```bash
npm update
npm audit fix
git commit -am "Update dependencies"
git push
```

### Backup
- Vercel keeps deployment history
- Export production database regularly (if using)
- Keep Git repository updated

---

## Support

- **Vercel Docs:** https://vercel.com/docs
- **Next.js Docs:** https://nextjs.org/docs
- **Community:** GitHub Issues

---

**🎉 Your NSRIET website is now live and optimized for the world!**
