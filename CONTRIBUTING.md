# Contributing to Algarve Seasons

Thank you for your interest in contributing to Algarve Seasons! We welcome contributions from developers, designers, and enthusiasts. This document provides guidelines and instructions for contributing to the project.

---

## 🤝 Code of Conduct

Please be respectful and professional in all interactions. We're committed to providing a welcoming and inclusive environment for all contributors.

---

## 🚀 Getting Started

### 1. Fork the Repository

Click the "Fork" button on GitHub to create your own copy of the repository.

### 2. Clone Your Fork

```bash
git clone https://github.com/YOUR_USERNAME/Algarve-Seasons.git
cd algarve-seasons-aeo
```

### 3. Add Upstream Remote

```bash
git remote add upstream https://github.com/AzibfDeveloper/Algarve-Seasons.git
```

### 4. Create a Feature Branch

```bash
git checkout -b feature/your-feature-name
```

Use descriptive branch names:
- `feature/add-contact-form` ✅
- `fix/header-mobile-layout` ✅
- `docs/update-readme` ✅
- `feature/x` ❌

---

## 📝 Making Changes

### Code Style

- Follow the existing code style and conventions
- Use TypeScript for type safety
- Use React functional components with hooks
- Use Tailwind CSS for styling (no inline CSS)
- Use shadcn/ui components when available

### File Organization

```
client/src/
├── components/          # Reusable components
├── pages/              # Page components
├── contexts/           # React contexts
├── lib/                # Utility functions
├── hooks/              # Custom React hooks
└── index.css           # Global styles
```

### Component Guidelines

**✅ Good Component Structure:**
```tsx
import { ComponentProps } from 'react';
import { Button } from '@/components/ui/button';

interface MyComponentProps {
  title: string;
  onSubmit: (data: string) => void;
}

export default function MyComponent({ title, onSubmit }: MyComponentProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">{title}</h2>
      <Button onClick={() => onSubmit('data')}>Submit</Button>
    </div>
  );
}
```

**❌ Avoid:**
- Inline styles (`style={{}}`)
- Custom CSS classes (use Tailwind instead)
- Magic numbers (use constants or props)
- Deeply nested components

### Commit Messages

Write clear, descriptive commit messages:

```bash
# Good
git commit -m "Add contact form validation"
git commit -m "Fix mobile navigation menu alignment"
git commit -m "Update Portuguese translations"

# Bad
git commit -m "Fix stuff"
git commit -m "Update"
git commit -m "asdf"
```

### Commit Message Format

```
<type>: <subject>

<body>

<footer>
```

**Types:**
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation
- `style:` Code style (formatting, missing semicolons, etc.)
- `refactor:` Code refactoring
- `perf:` Performance improvements
- `test:` Adding tests
- `chore:` Build process, dependencies, etc.

**Example:**
```
feat: Add Portuguese contact form

- Create ContatoPT.tsx component
- Add Portuguese form validation
- Update routing in App.tsx
- Add Portuguese email templates

Closes #123
```

---

## 🧪 Testing Your Changes

### Run Type Checking

```bash
pnpm check
```

### Format Code

```bash
pnpm format
```

### Build for Production

```bash
pnpm build
```

### Test in Development

```bash
pnpm dev
```

---

## 📋 Pull Request Process

### 1. Update Your Branch

```bash
git fetch upstream
git rebase upstream/main
```

### 2. Push Your Changes

```bash
git push origin feature/your-feature-name
```

### 3. Create a Pull Request

On GitHub, click "New Pull Request" and fill in:

- **Title**: Clear, descriptive title
- **Description**: What changes were made and why
- **Related Issues**: Link to any related issues (#123)
- **Screenshots**: For UI changes, include before/after screenshots

### 4. PR Description Template

```markdown
## Description
Brief description of the changes.

## Type of Change
- [ ] New feature
- [ ] Bug fix
- [ ] Documentation update
- [ ] Performance improvement

## Related Issues
Closes #123

## Testing
- [ ] Tested on desktop
- [ ] Tested on mobile
- [ ] Tested in Firefox/Chrome/Safari

## Screenshots (if applicable)
[Add screenshots here]

## Checklist
- [ ] Code follows style guidelines
- [ ] TypeScript types are correct
- [ ] No console errors/warnings
- [ ] Responsive design verified
- [ ] Documentation updated
```

---

## 🎯 Types of Contributions

### Bug Fixes

1. Describe the bug clearly
2. Provide steps to reproduce
3. Show expected vs. actual behavior
4. Submit a PR with the fix

### New Features

1. Open an issue first to discuss the feature
2. Wait for approval before implementing
3. Follow the coding guidelines
4. Include tests if applicable
5. Update documentation

### Documentation

- Fix typos and clarify instructions
- Add examples and code snippets
- Update outdated information
- Improve readability

### Translations

- Add or improve Portuguese translations
- Ensure consistency with existing terminology
- Test in both languages

---

## 🐛 Bug Reports

When reporting bugs, include:

1. **Title**: Clear, concise bug description
2. **Description**: Detailed explanation
3. **Steps to Reproduce**: Exact steps to trigger the bug
4. **Expected Behavior**: What should happen
5. **Actual Behavior**: What actually happens
6. **Screenshots/Videos**: Visual evidence
7. **Environment**: Browser, OS, device
8. **Additional Context**: Any other relevant info

---

## 💡 Feature Requests

When requesting features, include:

1. **Title**: Clear feature description
2. **Description**: Detailed explanation of the feature
3. **Use Case**: Why this feature is needed
4. **Proposed Solution**: How you envision it working
5. **Alternatives**: Other possible approaches
6. **Additional Context**: Screenshots, mockups, etc.

---

## 📚 Project Structure

Understanding the project structure helps with contributions:

```
algarve-seasons-aeo/
├── client/                 # Frontend React app
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── services/       # Service pages
│   │   ├── geo/            # Geo-targeted pages
│   │   ├── pt/             # Portuguese pages
│   │   ├── contexts/       # React contexts
│   │   ├── lib/            # Utilities
│   │   └── App.tsx         # Main app
│   └── index.html          # HTML entry
├── server/                 # Backend (Express)
├── shared/                 # Shared types
├── package.json            # Dependencies
├── vite.config.ts          # Vite config
├── tailwind.config.ts      # Tailwind config
└── tsconfig.json           # TypeScript config
```

---

## 🔄 Keeping Your Fork Updated

```bash
# Fetch latest changes
git fetch upstream

# Rebase your branch
git rebase upstream/main

# Force push to your fork
git push origin feature/your-feature-name --force-with-lease
```

---

## ❓ Questions?

- Check existing issues and discussions
- Read the [DEVELOPMENT.md](./DEVELOPMENT.md) guide
- Open a new discussion on GitHub
- Contact the maintainers

---

## 📖 Additional Resources

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com)
- [Git Documentation](https://git-scm.com/doc)

---

## 🎉 Thank You!

Your contributions make Algarve Seasons better for everyone. We appreciate your time and effort!

---

**Last Updated**: February 2026
