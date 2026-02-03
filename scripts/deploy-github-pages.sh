#!/bin/bash

# GitHub Pages Deployment Script
# This script builds and deploys the project to GitHub Pages

set -e

echo "🚀 Starting GitHub Pages deployment..."

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Step 1: Check if git is clean
echo -e "${BLUE}📋 Checking git status...${NC}"
if ! git diff-index --quiet HEAD --; then
    echo -e "${RED}❌ Git working directory is not clean. Please commit your changes first.${NC}"
    exit 1
fi
echo -e "${GREEN}✅ Git status OK${NC}"

# Step 2: Check if on main branch
echo -e "${BLUE}📋 Checking current branch...${NC}"
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
if [ "$CURRENT_BRANCH" != "main" ]; then
    echo -e "${RED}❌ Not on main branch. Currently on: $CURRENT_BRANCH${NC}"
    exit 1
fi
echo -e "${GREEN}✅ On main branch${NC}"

# Step 3: Install dependencies
echo -e "${BLUE}📦 Installing dependencies...${NC}"
pnpm install
echo -e "${GREEN}✅ Dependencies installed${NC}"

# Step 4: Type check
echo -e "${BLUE}🔍 Running TypeScript checks...${NC}"
pnpm check
echo -e "${GREEN}✅ TypeScript checks passed${NC}"

# Step 5: Format code
echo -e "${BLUE}🎨 Formatting code...${NC}"
pnpm format
echo -e "${GREEN}✅ Code formatted${NC}"

# Step 6: Build
echo -e "${BLUE}🔨 Building project...${NC}"
pnpm build
echo -e "${GREEN}✅ Build successful${NC}"

# Step 7: Test build
echo -e "${BLUE}🧪 Testing production build...${NC}"
timeout 10 pnpm preview &
sleep 3
if curl -f http://localhost:4173 > /dev/null 2>&1; then
    echo -e "${GREEN}✅ Production build works${NC}"
else
    echo -e "${RED}❌ Production build test failed${NC}"
    exit 1
fi

# Step 8: Commit and push
echo -e "${BLUE}📤 Pushing to GitHub...${NC}"
git add .
git commit -m "chore: Deploy to GitHub Pages" || echo "No changes to commit"
git push origin main
echo -e "${GREEN}✅ Pushed to GitHub${NC}"

# Step 9: Wait for GitHub Actions
echo -e "${BLUE}⏳ Waiting for GitHub Actions to complete...${NC}"
echo "Visit: https://github.com/AzibfDeveloper/Algarve-Seasons/actions"
echo "Your site will be deployed to: https://algarveseasons.com (or your custom domain)"

echo -e "${GREEN}✅ Deployment initiated!${NC}"
echo ""
echo "📊 Next steps:"
echo "  1. Check GitHub Actions status"
echo "  2. Verify deployment at your GitHub Pages URL"
echo "  3. Test all pages and functionality"
