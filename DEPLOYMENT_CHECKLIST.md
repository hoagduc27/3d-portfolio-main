# ✅ Deployment Checklist

## Pre-Deployment Checks

- [x] **Build Test**: Project builds successfully (`npm run build`)
- [x] **Vercel Config**: Removed unnecessary `vercel.json` (Vercel auto-detects Next.js)
- [x] **Environment Variables**: Code handles missing env vars gracefully

## Steps to Deploy

### 1. Push to GitHub
```bash
git add .
git commit -m "Fix deployment: Remove vercel.json, ready for Vercel"
git push origin main
```

### 2. Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **"Add New..." → "Project"**
3. Import your GitHub repository
4. Vercel will **automatically detect Next.js** - no changes needed!

### 3. Set Environment Variables (IMPORTANT!)

In Vercel Dashboard → **Settings → Environment Variables**, add:

#### Required (for contact form):
- `RESEND_API_KEY` - Get from [resend.com/api-keys](https://resend.com/api-keys)
  - Select: Production, Preview, Development

#### Optional:
- `UMAMI_DOMAIN` - Umami analytics script URL (if using)
- `UMAMI_SITE_ID` - Umami website ID (if using)
- `NEXT_PUBLIC_WS_URL` - WebSocket URL for realtime features (if using)

**⚠️ Important**: After adding environment variables, you must **redeploy** for them to take effect.

### 4. Deploy

1. Click **"Deploy"**
2. Wait for build to complete (2-5 minutes)
3. Your site will be live at `your-project.vercel.app`

## Post-Deployment Verification

- [ ] Site loads at the provided URL
- [ ] All pages work (`/`, `/about`, `/projects`, `/contact`, `/blogs`)
- [ ] Contact form works (if `RESEND_API_KEY` is set)
- [ ] No console errors in browser
- [ ] Check Network tab for any failed requests

## Troubleshooting

### If you get 404 errors:
- ✅ **Fixed**: Removed `vercel.json` that was interfering with routing
- Check Vercel build logs for any errors
- Ensure you're using the correct URL

### If build fails:
- Check build logs in Vercel Dashboard
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility (Next.js 14.2.3 requires Node 18+)

### If API routes don't work:
- Verify environment variables are set correctly
- Check that variables are set for the right environments (Production/Preview/Development)
- Redeploy after adding environment variables

## Quick Deploy via CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy (first time will ask questions)
vercel

# Deploy to production
vercel --prod

# Add environment variable
vercel env add RESEND_API_KEY
```

## What Was Fixed

1. ✅ **Removed `vercel.json`**: This file was causing NOT_FOUND errors by interfering with Vercel's automatic Next.js detection
2. ✅ **Build verified**: Project builds successfully without errors
3. ✅ **Environment handling**: Code gracefully handles missing environment variables

Your project is now ready to deploy! 🚀

