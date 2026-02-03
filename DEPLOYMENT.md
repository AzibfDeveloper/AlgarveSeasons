# Deployment Guide for Algarve Seasons

This guide provides step-by-step instructions for deploying the Algarve Seasons Vite + React project to various hosting platforms.

---

## 📋 Table of Contents

1. [Pre-Deployment Checklist](#pre-deployment-checklist)
2. [GitHub Pages](#github-pages)
3. [Vercel](#vercel)
4. [Netlify](#netlify)
5. [AWS S3 + CloudFront](#aws-s3--cloudfront)
6. [Traditional Web Hosting](#traditional-web-hosting)
7. [Docker Deployment](#docker-deployment)
8. [Troubleshooting](#troubleshooting)

---

## ✅ Pre-Deployment Checklist

Before deploying to any platform, ensure:

- [ ] All code is committed to Git
- [ ] TypeScript builds without errors: `pnpm check`
- [ ] Code is formatted: `pnpm format`
- [ ] Production build succeeds: `pnpm build`
- [ ] Environment variables are configured
- [ ] All images use CDN URLs (not local paths)
- [ ] Links are correct (no broken internal links)
- [ ] Responsive design tested on mobile/tablet/desktop
- [ ] Performance optimized (check bundle size)
- [ ] SEO metadata is correct (titles, descriptions)

### Pre-Deployment Commands

```bash
# 1. Check TypeScript
pnpm check

# 2. Format code
pnpm format

# 3. Build for production
pnpm build

# 4. Test production build locally
pnpm preview
```

Visit `http://localhost:4173` to verify the production build works correctly.

---

## 🚀 GitHub Pages

GitHub Pages is a free hosting service perfect for static sites. This project works great with GitHub Pages.

### Option 1: Using GitHub Actions (Recommended)

This automatically builds and deploys on every push to main branch.

#### Step 1: Create GitHub Actions Workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 10.4.1

      - name: Get pnpm store directory
        id: pnpm-cache
        shell: bash
        run: |
          echo "STORE_PATH=$(pnpm store path)" >> $GITHUB_OUTPUT

      - name: Setup pnpm cache
        uses: actions/cache@v3
        with:
          path: ${{ steps.pnpm-cache.outputs.STORE_PATH }}
          key: ${{ runner.os }}-pnpm-store-${{ hashFiles('**/pnpm-lock.yaml') }}
          restore-keys: |
            ${{ runner.os }}-pnpm-store-

      - name: Install dependencies
        run: pnpm install

      - name: Build
        run: pnpm build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
          cname: algarveseasons.com  # Optional: if using custom domain
```

#### Step 2: Configure Repository Settings

1. Go to GitHub repository **Settings**
2. Navigate to **Pages** section
3. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
   - **Branch**: main (or your default branch)
4. Save settings

#### Step 3: Push to GitHub

```bash
git add .github/workflows/deploy.yml
git commit -m "ci: Add GitHub Pages deployment workflow"
git push origin main
```

The workflow will automatically:
1. Install dependencies
2. Build the project
3. Deploy to `https://yourusername.github.io/algarve-seasons-aeo`

#### Step 4: Configure Custom Domain (Optional)

If you have a custom domain:

1. Update `vite.config.ts` to set the base path:

```typescript
export default defineConfig({
  base: '/',  // Use '/' for custom domain, '/algarve-seasons-aeo/' for GitHub Pages subdomain
  // ... rest of config
})
```

2. Add CNAME file in `public/CNAME`:

```
algarveseasons.com
```

3. Configure DNS records with your domain registrar:
   - Add CNAME record pointing to `yourusername.github.io`
   - Or add A records pointing to GitHub Pages IP addresses

### Option 2: Manual Deployment

If you prefer manual control:

```bash
# 1. Build the project
pnpm build

# 2. Create a new branch for deployment
git checkout --orphan gh-pages

# 3. Remove all files except dist
git rm -rf .

# 4. Copy dist contents to root
cp -r dist/* .
rm -rf dist

# 5. Commit and push
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages -f

# 6. Switch back to main
git checkout main
```

---

## 🎯 Vercel

Vercel is optimized for Next.js but works great with Vite projects too.

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Deploy

```bash
# Login to Vercel
vercel login

# Deploy the project
vercel
```

Follow the prompts:
- **Project name**: algarve-seasons
- **Framework**: Vite
- **Root directory**: ./
- **Build command**: pnpm build
- **Output directory**: dist

### Step 3: Configure for Production

```bash
# Deploy to production
vercel --prod
```

### Step 4: Configure Custom Domain

1. Go to Vercel dashboard
2. Select your project
3. Go to **Settings** → **Domains**
4. Add your custom domain
5. Update DNS records with your domain registrar

### Automatic Deployments

Connect your GitHub repository for automatic deployments:

1. In Vercel dashboard, go to **Settings** → **Git**
2. Connect your GitHub account
3. Select the repository
4. Configure build settings:
   - **Framework**: Vite
   - **Build Command**: `pnpm build`
   - **Output Directory**: `dist`

Now every push to main will automatically deploy!

---

## 🌐 Netlify

Netlify offers free hosting with continuous deployment.

### Step 1: Connect Repository

1. Go to [netlify.com](https://netlify.com)
2. Click **Add new site** → **Import an existing project**
3. Select **GitHub** and authorize
4. Choose your repository

### Step 2: Configure Build Settings

1. **Build command**: `pnpm build`
2. **Publish directory**: `dist`
3. **Node version**: 20

### Step 3: Deploy

Click **Deploy site** and Netlify will:
1. Clone your repository
2. Install dependencies
3. Build the project
4. Deploy to production

### Step 4: Configure Custom Domain

1. Go to **Site settings** → **Domain management**
2. Click **Add custom domain**
3. Enter your domain
4. Update DNS records with your domain registrar

### Environment Variables

If you need environment variables:

1. Go to **Site settings** → **Build & deploy** → **Environment**
2. Add your variables:
   ```
   VITE_APP_ID=algarve-seasons
   VITE_ANALYTICS_WEBSITE_ID=your-id
   ```

---

## ☁️ AWS S3 + CloudFront

For high-performance, scalable hosting.

### Step 1: Create S3 Bucket

```bash
# Install AWS CLI
npm install -g aws-cli

# Configure AWS credentials
aws configure

# Create bucket
aws s3 mb s3://algarve-seasons-com --region us-east-1
```

### Step 2: Enable Static Website Hosting

```bash
# Enable static website hosting
aws s3 website s3://algarve-seasons-com \
  --index-document index.html \
  --error-document index.html
```

### Step 3: Build and Upload

```bash
# Build the project
pnpm build

# Upload to S3
aws s3 sync dist/ s3://algarve-seasons-com --delete

# Set correct MIME types
aws s3 cp s3://algarve-seasons-com/index.html s3://algarve-seasons-com/index.html \
  --metadata-directive REPLACE --cache-control max-age=0,no-cache,no-store,must-revalidate \
  --content-type text/html --recursive

aws s3 cp s3://algarve-seasons-com/assets/ s3://algarve-seasons-com/assets/ \
  --metadata-directive REPLACE --cache-control max-age=31536000,immutable \
  --recursive
```

### Step 4: Create CloudFront Distribution

1. Go to AWS CloudFront console
2. Create distribution
3. Set S3 bucket as origin
4. Configure caching:
   - **Default TTL**: 86400 (1 day)
   - **Max TTL**: 31536000 (1 year)
5. Add custom domain
6. Update DNS records

### Step 5: Create Deployment Script

Create `scripts/deploy-aws.sh`:

```bash
#!/bin/bash

# Build the project
pnpm build

# Upload to S3
aws s3 sync dist/ s3://algarve-seasons-com --delete

# Invalidate CloudFront cache
aws cloudfront create-invalidation \
  --distribution-id YOUR_DISTRIBUTION_ID \
  --paths "/*"

echo "✅ Deployment complete!"
```

Make executable:
```bash
chmod +x scripts/deploy-aws.sh
```

---

## 🏠 Traditional Web Hosting

For shared hosting (cPanel, Plesk, etc.):

### Step 1: Build Locally

```bash
pnpm build
```

### Step 2: Upload via FTP/SFTP

1. Connect to your hosting via FTP/SFTP
2. Upload contents of `dist/` folder to `public_html/` or `www/`
3. Ensure `index.html` is in the root directory

### Step 3: Configure .htaccess (Apache)

Create `.htaccess` in your public directory:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

This ensures all routes point to `index.html` for client-side routing.

### Step 4: Configure web.config (IIS)

For IIS servers, create `web.config`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration>
  <system.webServer>
    <rewrite>
      <rules>
        <rule name="SPA" stopProcessing="true">
          <match url=".*" />
          <conditions logicalGrouping="MatchAll">
            <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
            <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />
          </conditions>
          <action type="Rewrite" url="/" />
        </rule>
      </rules>
    </rewrite>
  </system.webServer>
</configuration>
```

---

## 🐳 Docker Deployment

For containerized deployment.

### Step 1: Create Dockerfile

Create `Dockerfile` in project root:

```dockerfile
# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source code
COPY . .

# Build the app
RUN pnpm build

# Production stage
FROM node:20-alpine

WORKDIR /app

# Install serve to run the app
RUN npm install -g serve

# Copy built app from builder
COPY --from=builder /app/dist ./dist

# Expose port
EXPOSE 3000

# Start the app
CMD ["serve", "-s", "dist", "-l", "3000"]
```

### Step 2: Create .dockerignore

```
node_modules
.git
.gitignore
dist
.env.local
.manus-logs
pnpm-lock.yaml
```

### Step 3: Build Docker Image

```bash
docker build -t algarve-seasons:latest .
```

### Step 4: Run Locally

```bash
docker run -p 3000:3000 algarve-seasons:latest
```

Visit `http://localhost:3000`

### Step 5: Deploy to Docker Hub

```bash
# Login to Docker Hub
docker login

# Tag image
docker tag algarve-seasons:latest yourusername/algarve-seasons:latest

# Push to Docker Hub
docker push yourusername/algarve-seasons:latest
```

### Step 6: Deploy to Container Services

**AWS ECS:**
```bash
aws ecs create-service \
  --cluster my-cluster \
  --service-name algarve-seasons \
  --task-definition algarve-seasons:1 \
  --desired-count 1
```

**Google Cloud Run:**
```bash
gcloud run deploy algarve-seasons \
  --image gcr.io/my-project/algarve-seasons \
  --platform managed \
  --region us-central1
```

---

## 🔧 Troubleshooting

### Issue: Blank Page After Deployment

**Cause**: Incorrect base path in Vite config

**Solution**:
```typescript
// vite.config.ts
export default defineConfig({
  base: '/',  // For custom domain
  // or
  base: '/algarve-seasons-aeo/',  // For GitHub Pages subdomain
})
```

### Issue: Routes Not Working

**Cause**: Server not configured for SPA routing

**Solution**: Add `.htaccess` (Apache) or `web.config` (IIS) to redirect all routes to `index.html`

### Issue: Assets Not Loading

**Cause**: Incorrect asset paths

**Solution**: Ensure all images use CDN URLs, not local paths

### Issue: Build Fails

**Cause**: Missing dependencies or TypeScript errors

**Solution**:
```bash
pnpm check          # Check TypeScript
pnpm install        # Reinstall dependencies
pnpm build          # Try building again
```

### Issue: Slow Performance

**Cause**: Large bundle size

**Solution**:
```bash
# Analyze bundle size
npm install -g vite-plugin-visualizer
pnpm build
```

Check `dist/stats.html` to identify large dependencies.

---

## 📊 Performance Optimization

After deployment, optimize performance:

### 1. Enable Compression

Most hosting services enable gzip by default. Verify:

```bash
curl -I https://algarveseasons.com | grep -i content-encoding
```

### 2. Set Cache Headers

**For index.html** (no cache):
```
Cache-Control: max-age=0, no-cache, no-store, must-revalidate
```

**For assets** (long cache):
```
Cache-Control: max-age=31536000, immutable
```

### 3. Use CDN

For images and static assets, use a CDN:
- Cloudflare (free)
- AWS CloudFront
- Bunny CDN
- Fastly

### 4. Monitor Performance

Use tools to monitor:
- [Google PageSpeed Insights](https://pagespeed.web.dev)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [WebPageTest](https://www.webpagetest.org)

---

## 🔐 Security Checklist

Before going live:

- [ ] HTTPS enabled (all platforms provide this)
- [ ] Security headers configured
- [ ] Environment variables not exposed
- [ ] No sensitive data in code
- [ ] Dependencies up to date
- [ ] CORS configured correctly
- [ ] Rate limiting enabled (if applicable)

---

## 📝 Deployment Checklist

```bash
# 1. Final checks
pnpm check
pnpm format
pnpm build
pnpm preview

# 2. Commit changes
git add .
git commit -m "chore: Prepare for deployment"
git push origin main

# 3. Deploy (choose your platform)
# GitHub Pages: Push to main (GitHub Actions handles it)
# Vercel: vercel --prod
# Netlify: Connected to GitHub (auto-deploys)
# AWS: aws s3 sync dist/ s3://bucket-name --delete
# Docker: docker build -t app . && docker push app

# 4. Verify deployment
# Visit your deployed URL
# Check all pages load correctly
# Test responsive design
# Verify forms work
# Check console for errors
```

---

## 🚀 Continuous Deployment

Set up automatic deployments:

**GitHub Actions** (GitHub Pages):
- Automatically deploys on push to main
- See `.github/workflows/deploy.yml`

**Vercel**:
- Connect GitHub repository
- Auto-deploys on push to main

**Netlify**:
- Connect GitHub repository
- Auto-deploys on push to main

**AWS CodePipeline**:
- Trigger builds on push to GitHub
- Deploy to S3 + CloudFront

---

## 📞 Support

For deployment issues:

1. Check the troubleshooting section above
2. Review platform-specific documentation
3. Check build logs for errors
4. Verify environment variables are set
5. Test locally with `pnpm preview`

---

**Last Updated**: February 2026
**Version**: 1.0.0
