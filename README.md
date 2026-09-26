# Raeyaan Muppaneni's Portfolio

A clean, modern personal portfolio website showcasing research, engineering projects, and achievements in bioengineering, assistive technology, and mathematics.

## Overview

This portfolio presents:
- **Research & Engineering**: Work at Stanford, biomedical instrumentation, robotics, signal processing
- **Assistive Technology**: Computer vision, wearables, and devices for accessibility
- **Community Leadership**: Rooting Minds, Youth Council, volunteer initiatives
- **Academic Excellence**: USAMO qualification, advanced coursework, mathematics competitions

## Features

- Clean, minimalist design
- Responsive mobile-friendly layout
- Dark mode support
- Fast performance
- Easy content updates

## Technical Stack

- **Framework**: Next.js with React
- **Styling**: Tailwind CSS
- **Deployment**: GitHub Pages (static export)
- **Hosting**: `raeyaan-muppaneni.github.io`

## Getting Started

### Prerequisites
- Node.js 16+ and npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view in the browser.

### Build for Production

```bash
npm run build
```

This generates a static export in the `out` folder, ready for GitHub Pages deployment.

## File Structure

```
raeyaan-portfolio/
├── app/
│   ├── page.jsx          # Home page
│   ├── about/
│   ├── work/
│   ├── research/
│   ├── activities/
│   ├── resume/
│   ├── contact/
│   ├── layout.jsx        # Root layout
│   └── globals.css       # Global styles
├── components/
│   ├── Header.jsx
│   └── Footer.jsx
├── public/               # Static assets
├── next.config.js
├── tailwind.config.js
└── package.json
```

## Pages

- **Home** (`/`) — Introduction and featured projects
- **About** (`/about`) — Personal background and skills
- **Work** (`/work`) — Detailed project descriptions
- **Research** (`/research`) — Active research areas and interests
- **Activities** (`/activities`) — Leadership and community involvement
- **Resume** (`/resume`) — Full resume and credentials
- **Contact** (`/contact`) — Contact information and message form

## Deployment to GitHub Pages

1. Create a repository named `raeyaan-muppaneni.github.io` on GitHub
2. Push the code to the `main` branch
3. GitHub Pages will automatically deploy from the `out` folder

```bash
git remote add origin https://github.com/raeyaan/raeyaan-muppaneni.github.io.git
git push -u origin main
```

The site will be live at `https://raeyaan-muppaneni.github.io`

## Customization

### Colors & Styling
Edit CSS variables in `app/globals.css`:
```css
:root {
  --background: #fafafa;
  --foreground: #0a0a0a;
  --muted: #666;
  --border: #e5e5e5;
}
```

### Content
Update content in individual page files:
- Home content: `app/page.jsx`
- Project descriptions: `app/work/page.jsx`
- Research interests: `app/research/page.jsx`

### Contact Form
The contact form uses Formspree. Set up by:
1. Visit [formspree.io](https://formspree.io)
2. Create a new form
3. Replace `YOUR_FORM_ID` in `app/contact/page.jsx` with your form ID

## License

This portfolio is personal work. Please respect copyright and attribution.

---

**Website**: [raeyaan-muppaneni.github.io](https://raeyaan-muppaneni.github.io)  
**Email**: raeyaanmuppaneni@gmail.com  
**GitHub**: [@raeyaan](https://github.com/raeyaan)
