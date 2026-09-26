# GitHub Portfolio Deployment Setup Guide

Complete guide to deploying Raeyaan's portfolio website and setting up GitHub repositories.

---

## Part 1: Website Deployment (GitHub Pages)

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and log in as Raeyaan
2. Click the **+** icon → **New repository**
3. Name it: **`raeyaan-muppaneni.github.io`**
   - This special name automatically enables GitHub Pages
   - Description: "Personal portfolio website"
   - Make it **Public**
   - Don't initialize with README (we have one already)
4. Click **Create repository**

### Step 2: Connect Local Repository to GitHub

```bash
cd /Users/rohansalian/raeyaan-portfolio

# Add GitHub remote
git remote add origin https://github.com/raeyaan/raeyaan-muppaneni.github.io.git

# Rename branch to main (GitHub Pages default)
git branch -M main

# Push to GitHub
git push -u origin main
```

### Step 3: Configure GitHub Pages

1. Go to your repository: `github.com/raeyaan/raeyaan-muppaneni.github.io`
2. Click **Settings** → **Pages** (left sidebar)
3. Under "Source", select:
   - Branch: **main**
   - Folder: **/ (root)**
4. Click **Save**
5. Wait a few seconds, then refresh
6. You'll see a message: "Your site is live at `https://raeyaan-muppaneni.github.io`"

### Step 4: Build and Deploy

Before every deploy, build the static site:

```bash
# Install dependencies
npm install

# Build for production (creates 'out' folder)
npm run build

# Verify the build
ls -la out/
```

The `out` folder contains all static files ready for GitHub Pages.

### Step 5: Enable Custom Domain (Optional)

If you want a custom domain like `raeyaan.dev`:

1. Settings → Pages
2. Under "Custom domain", enter your domain
3. Update DNS records with GitHub's nameservers
4. GitHub will automatically enable HTTPS

---

## Part 2: GitHub Profile Setup

### Step 1: Create Profile Repository

1. Create new repository: **`raeyaan`**
   - Description: "Profile README"
   - Make it **Public**
   - Initialize with README

2. Clone it:
```bash
git clone https://github.com/raeyaan/raeyaan.git
cd raeyaan
```

### Step 2: Add Profile README

Replace the default README.md with the content from `GITHUB_PROFILE_README.md`:

```bash
cp /Users/rohansalian/raeyaan-portfolio/GITHUB_PROFILE_README.md README.md
git add README.md
git commit -m "Add profile README"
git push
```

### Step 3: Customize Profile

1. Go to [github.com/raeyaan](https://github.com/raeyaan) (your profile)
2. Click **Edit profile** (top right)
3. Add:
   - **Bio**: "High school engineer & researcher | Stanford Bioengineering | Assistive Tech"
   - **URL**: https://raeyaan-muppaneni.github.io
   - **Location**: Fremont, California
   - **Pronouns**: (optional)
4. Save changes

### Step 4: Pin Repositories

1. Go to your GitHub profile
2. Under "Repositories", pin your top 3-4 projects
3. Good candidates to pin:
   - `raeyaan-muppaneni.github.io` (portfolio website)
   - `capacitive-insole` (Stanford research)
   - `emg-robotics` (science fair project)
   - `obstacle-detector` (award-winning project)

---

## Part 3: Project Repository Setup

For each major project, create a dedicated repository following the template in `PROJECT_REPOSITORY_TEMPLATES.md`.

### Example: Capacitive Sensing Insole

```bash
# 1. Create repository on GitHub with name 'capacitive-insole'

# 2. Clone locally
git clone https://github.com/raeyaan/capacitive-insole.git
cd capacitive-insole

# 3. Create folder structure
mkdir -p docs hardware/schematics hardware/pcb hardware/gerbers firmware software images research

# 4. Add files following the template
# - README.md with full project overview
# - docs/ with design, hardware, firmware documentation
# - hardware/ with CAD files (KiCad, PDFs)
# - firmware/ with source code
# - images/ with photos and diagrams
# - research/ with papers and references

# 5. Create .gitignore for CAD files
cat > .gitignore << 'EOF'
# KiCad
*.kicad_sch-bak
*.kicad_pcb-bak
*.bak
*.sch~

# Build artifacts
*.o
*.elf
*.hex
build/
dist/

# System
.DS_Store
.vscode/
.idea/

# Python
__pycache__/
*.pyc
venv/
EOF

# 6. Create LICENSE
cat > LICENSE << 'EOF'
MIT License

Copyright (c) 2026 Raeyaan Muppaneni

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
EOF

# 7. Commit and push
git add .
git commit -m "Initial project structure"
git push -u origin main
```

### Repository Topics

For each project repository, add relevant GitHub topics to improve discoverability:

1. Go to repository Settings → **About**
2. Click **Manage topics**
3. Add relevant topics:
   - For hardware projects: `hardware`, `pcb-design`, `kicad`
   - For biomedical: `biomedical-engineering`, `sensor-design`, `wearables`
   - For robotics: `robotics`, `embedded-systems`, `signal-processing`
   - For assistive tech: `assistive-technology`, `accessibility`, `computer-vision`
   - General: `research`, `science-fair`, `engineering`

---

## Part 4: Documentation Best Practices

### README Quality Checklist

For each project repository:

- [ ] Clear project title and one-liner description
- [ ] Overview section (what, why, how)
- [ ] Technical summary with domain and technologies
- [ ] Features/capabilities list
- [ ] Hardware specifications (if applicable)
- [ ] Software/firmware setup instructions
- [ ] Results and validation data
- [ ] Images/diagrams showing:
  - Block diagram of system
  - PCB photos (if hardware)
  - Demo screenshots/videos
  - Results graphs/charts
- [ ] Design decisions and tradeoffs explained
- [ ] Challenges faced and solutions
- [ ] Future work/improvements
- [ ] References and citations
- [ ] Author info and links back to portfolio

### Image Organization

```
images/
├── hardware/
│   ├── pcb-front.jpg        # PCB photo
│   ├── pcb-back.jpg
│   ├── assembly.jpg         # Full assembly
│   ├── schematic.pdf        # Circuit diagram
│   └── block-diagram.png    # System overview
├── results/
│   ├── test-1-graph.png
│   ├── calibration-data.png
│   └── performance-metrics.png
├── demo/
│   ├── demo-1.jpg
│   ├── demo-video.mp4
│   └── prototype-iteration.png
└── sciencefair/
    ├── poster.jpg
    └── presentation.jpg
```

### Code Comments

Include comments for:
- Complex signal processing algorithms
- Control system logic
- Hardware interface details
- Non-obvious design choices

Example:
```c
// FDC2214 capacitive sensing IC reads oscillation frequency
// which is converted to capacitance via: C = 1/(4π²f²L)
// where L is the inductance (~1µH for our circuit)
float calculate_capacitance(uint32_t frequency, float inductance) {
    float denominator = 4 * 3.14159 * 3.14159 * frequency * frequency * inductance;
    return 1.0 / denominator;
}
```

---

## Part 5: Content Updates

### Updating Portfolio Website

```bash
cd /Users/rohansalian/raeyaan-portfolio

# Make edits to pages (app/*.jsx files)
# Edit content in appropriate page files

# Test locally
npm run dev

# Build for production
npm run build

# Deploy
git add .
git commit -m "Update: [describe change]"
git push origin main
```

GitHub Pages automatically rebuilds when you push to main.

### Adding New Project to Portfolio

1. Add project details to `app/work/page.jsx`
2. Add research info to `app/research/page.jsx` if applicable
3. Add activity/leadership info to `app/activities/page.jsx` if applicable
4. Update home page featured projects if needed
5. Deploy website updates
6. Ensure project repository is public with good documentation

---

## Part 6: Ongoing Maintenance

### Monthly Updates

- [ ] Update project status in READMEs
- [ ] Add new research/achievements to portfolio
- [ ] Update resume section
- [ ] Fix any broken links
- [ ] Review and improve documentation

### Annual Updates

- [ ] Refresh photos/screenshots
- [ ] Update competition results
- [ ] Archive completed projects
- [ ] Review and refine design
- [ ] Update GPA/academic achievements

### Links to Keep Updated

- Portfolio website links to GitHub projects
- GitHub projects link back to portfolio
- Portfolio and GitHub both link to contact info
- All social links working (LinkedIn, etc.)

---

## Part 7: Quick Reference

### Build and Deploy
```bash
npm run build       # Build static site
git push origin main # Deploy to GitHub Pages
```

### Common Git Commands
```bash
git status                      # Check changes
git add .                       # Stage all changes
git commit -m "message"         # Commit changes
git push origin main            # Push to GitHub
git pull                        # Pull latest changes
git log --oneline              # View commit history
```

### File Locations

| File | Location |
|------|----------|
| Portfolio Website | `/Users/rohansalian/raeyaan-portfolio` |
| Website GitHub Repo | `raeyaan/raeyaan-muppaneni.github.io` |
| Profile README | `raeyaan/raeyaan` |
| Project Repositories | `raeyaan/[project-name]` |

---

## Troubleshooting

### Website Not Updating

1. Check GitHub Pages settings: Settings → Pages
2. Verify source is set to main branch
3. Ensure no `.nojekyll` file blocking static sites
4. Clear browser cache (Cmd+Shift+R)
5. Check Actions tab for build errors

### Build Errors

```bash
# Clear Next.js cache
rm -rf .next out

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Try building again
npm run build
```

### Git Push Issues

```bash
# Verify remote is set correctly
git remote -v

# Update remote if needed
git remote set-url origin https://github.com/raeyaan/raeyaan-muppaneni.github.io.git

# Try pushing again
git push -u origin main
```

---

## Support & Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **GitHub Pages**: https://pages.github.com
- **GitHub Markdown**: https://guides.github.com/features/mastering-markdown/
- **KiCad Docs**: https://docs.kicad.org/ (for hardware projects)

---

**Last Updated**: September 2026  
**Author**: Raeyaan Muppaneni  
**Contact**: raeyaanmuppaneni@gmail.com
