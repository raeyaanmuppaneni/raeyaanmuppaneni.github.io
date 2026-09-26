# Raeyaan's Portfolio Ecosystem - Setup Guide

## 📋 What's Been Created

Your complete professional portfolio ecosystem consists of:

### 1. **Portfolio Website** (This Repository)
A clean, modern Next.js website with:
- Home page with featured projects
- About page with background and skills
- Work section with detailed project descriptions
- Research section highlighting areas of focus
- Activities & leadership page
- Resume page
- Contact form
- Responsive design with dark mode support

**Status**: Ready to deploy to GitHub Pages

### 2. **Setup & Deployment Documentation**
- `README.md` — Website project documentation
- `DEPLOYMENT_SETUP.md` — Step-by-step deployment guide
- `GITHUB_PROFILE_README.md` — Your GitHub profile bio
- `PROJECT_REPOSITORY_TEMPLATES.md` — Guide for project repositories

---

## 🚀 Quick Start (Next Steps)

### Phase 1: Deploy the Website (15 minutes)

1. **Create GitHub repository**
   ```bash
   # Go to github.com/raeyaan and create new repository:
   # Name: raeyaan-muppaneni.github.io
   # Public, no README
   ```

2. **Connect and push code**
   ```bash
   cd /Users/rohansalian/raeyaan-portfolio
   git remote add origin https://github.com/raeyaan/raeyaan-muppaneni.github.io.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Settings → Pages
   - Source: main branch
   - Save
   - Wait 2-5 minutes
   - Visit: https://raeyaan-muppaneni.github.io

### Phase 2: Set Up GitHub Profile (10 minutes)

1. **Create profile repository**
   ```bash
   # Create repo named: raeyaan
   # Initialize with README
   ```

2. **Add profile README**
   - Copy content from `GITHUB_PROFILE_README.md`
   - Paste into your `raeyaan/raeyaan` repository README
   - Commit and push

3. **Customize GitHub profile**
   - Go to github.com/[your-username]
   - Edit profile
   - Bio: "High school engineer & researcher | Stanford Bioengineering | Assistive Tech"
   - URL: https://raeyaan-muppaneni.github.io
   - Location: Fremont, California

### Phase 3: Create Project Repositories (30 minutes per project)

For your major projects, create individual repositories with detailed documentation:

**Priority projects to set up**:
1. `capacitive-insole` — Stanford bioengineering research
2. `emg-robotics` — EMG-controlled robotic arm
3. `obstacle-detector` — Computer vision wearable
4. `rooting-minds` — Initiative documentation

**For each project**:
1. Create repository on GitHub
2. Clone locally
3. Create folder structure (see `PROJECT_REPOSITORY_TEMPLATES.md`)
4. Add comprehensive README following template
5. Add documentation (design, hardware, firmware, results)
6. Add images/diagrams
7. Add source code
8. Commit and push
9. Add GitHub topics for discoverability

**Template for project README** → See `PROJECT_REPOSITORY_TEMPLATES.md`

---

## 📁 File Structure Reference

```
/Users/rohansalian/raeyaan-portfolio/
├── app/                          # Website pages
│   ├── page.jsx                 # Home page
│   ├── about/page.jsx
│   ├── work/page.jsx
│   ├── research/page.jsx
│   ├── activities/page.jsx
│   ├── resume/page.jsx
│   ├── contact/page.jsx
│   ├── layout.jsx
│   └── globals.css
├── components/
│   ├── Header.jsx
│   └── Footer.jsx
├── public/                       # Static assets (add images here)
├── package.json
├── next.config.js
├── tailwind.config.js
├── README.md                     # Project documentation
├── SETUP_GUIDE.md               # This file
├── DEPLOYMENT_SETUP.md          # Deployment instructions
├── GITHUB_PROFILE_README.md     # GitHub profile template
├── PROJECT_REPOSITORY_TEMPLATES.md  # Project structure guide
└── .gitignore
```

---

## 🎨 Customization Tips

### Update Website Content

**Home Page**: `app/page.jsx`
- Update featured projects list
- Modify hero section

**About Page**: `app/about/page.jsx`
- Add/update background information
- Customize skills section

**Work Page**: `app/work/page.jsx`
- Add new projects
- Update descriptions, links, technologies

**Research Page**: `app/research/page.jsx`
- Update research interests
- Add new institutions/programs

**Activities Page**: `app/activities/page.jsx`
- Add leadership roles
- Update community involvement

**Resume Page**: `app/resume/page.jsx`
- Update education, skills, achievements
- Link to PDF resume

**Contact Page**: `app/contact/page.jsx`
- Update email and social links
- Set up Formspree for contact form

### Update Styling

**Colors**: `app/globals.css`
```css
:root {
  --background: #fafafa;  /* White */
  --foreground: #0a0a0a;  /* Black */
  --muted: #666;
  --border: #e5e5e5;
}
```

**Fonts**: `tailwind.config.js`
- Change default font family
- Add custom font weights

### Add Static Files

Put images, PDFs, and other assets in the `public/` folder:
```
public/
├── images/
├── Raeyaan_Muppaneni_Resume.pdf
└── ...
```

Reference in code as:
```jsx
<img src="/images/project.jpg" alt="description" />
<a href="/Raeyaan_Muppaneni_Resume.pdf">Download Resume</a>
```

---

## 📊 GitHub Profile Strategy

Your GitHub presence should show:

1. **Polished Portfolio Website** (raeyaan-muppaneni.github.io)
   - Clean, professional, well-designed
   - Clear navigation
   - Links to detailed project repositories

2. **Strong Project Repositories**
   - Well-documented with comprehensive READMEs
   - Hardware files (KiCad schematics, PCBs)
   - Firmware/software with setup instructions
   - Results and validation data
   - High-quality images and diagrams

3. **Professional Profile**
   - Clear bio mentioning research/engineering focus
   - Link to portfolio website
   - 3-4 featured repositories (pinned)
   - Recent activity showing active development

---

## 🔄 Workflow for Updates

### When completing new projects:

1. Create project-specific GitHub repository
2. Add comprehensive documentation following template
3. Include hardware files (if applicable)
4. Add software/firmware with setup instructions
5. Include results, testing, validation data
6. Update portfolio website:
   - Add to work/research sections
   - Link to GitHub repository
7. Update resume section
8. Commit and deploy website

### Regular maintenance:

```bash
cd /Users/rohansalian/raeyaan-portfolio

# Make edits to pages
npm run dev  # Test locally at localhost:3000

# Build and deploy
npm run build
git add .
git commit -m "Update: [brief description]"
git push origin main
```

---

## 💡 Best Practices

### Documentation

✅ **Do**:
- Write READMEs for people unfamiliar with your work
- Explain WHY decisions were made
- Include high-quality photos and diagrams
- Document challenges and solutions
- Link to references and papers

❌ **Don't**:
- Assume readers know your project's background
- Leave code without explanations
- Include blurry or unrelated images
- Forget to cite research or references

### GitHub Usage

✅ **Do**:
- Use clear, descriptive commit messages
- Organize code logically in folders
- Include .gitignore files
- Pin your best repositories
- Keep projects public

❌ **Don't**:
- Make frequent "fix" or "update" commits for small changes
- Mix unrelated projects in one repository
- Leave incomplete projects without documentation
- Forget to add LICENSE files

### Presentation

✅ **Do**:
- Proofread everything (website, documentation, code)
- Keep consistent branding/styling
- Use clear headings and organization
- Include evidence of work (photos, diagrams, data)
- Link everything together

❌ **Don't**:
- Use overly complex design or animations
- Make visitors search for information
- Leave broken links
- Include unnecessary clutter
- Hide your best work

---

## 🎯 Portfolio Checklist

- [ ] Website deployed to GitHub Pages
- [ ] GitHub profile README created
- [ ] Profile customized (bio, URL, location)
- [ ] `capacitive-insole` repository with documentation
- [ ] `emg-robotics` repository with documentation
- [ ] `obstacle-detector` repository with documentation
- [ ] Home page features all major projects
- [ ] All projects have comprehensive READMEs
- [ ] All projects include images/diagrams
- [ ] Links between portfolio and GitHub are working
- [ ] Resume page is complete and current
- [ ] Contact form is working
- [ ] Website tested on mobile
- [ ] All pages proofread for typos
- [ ] GitHub projects pinned on profile

---

## 📞 Support & Resources

### Documentation in this Repository

- `README.md` — Website project info
- `DEPLOYMENT_SETUP.md` — Detailed deployment steps
- `PROJECT_REPOSITORY_TEMPLATES.md` — Repository structure guide
- `GITHUB_PROFILE_README.md` — Profile template

### External Resources

- **Next.js**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com
- **GitHub Pages**: https://pages.github.com
- **GitHub Markdown**: https://guides.github.com/features/mastering-markdown/
- **KiCad**: https://docs.kicad.org/ (for hardware documentation)

### Development

```bash
# Local development
npm run dev

# Production build
npm run build

# Deploy
git push origin main
```

---

## ✨ Final Notes

Your portfolio ecosystem is now set up to showcase:

1. **Technical Excellence** — Well-documented projects with code, schematics, and research
2. **Communication Skills** — Clear writing and professional presentation
3. **Impact** — Work that solves real problems (assistive technology, biomedical)
4. **Leadership** — Community involvement and mentorship
5. **Continuous Learning** — Research, competitions, and advanced coursework

This combination of:
- ✅ Professional portfolio website
- ✅ Clean GitHub profile
- ✅ Well-documented project repositories
- ✅ Links between all platforms

...creates a compelling story for admissions committees, researchers, and potential collaborators.

---

**Ready to get started?**

1. Start with **Phase 1**: Deploy the website (15 min)
2. Then **Phase 2**: Set up GitHub profile (10 min)
3. Finally **Phase 3**: Create project repositories (30 min each)

Good luck! 🚀

---

**Contact**: raeyaanmuppaneni@gmail.com  
**Website**: https://raeyaan-muppaneni.github.io  
**GitHub**: https://github.com/raeyaan
