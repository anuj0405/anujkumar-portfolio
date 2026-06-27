# 🚀 Quick Start Guide: Deploying Your Portfolio on GitHub Pages

## In 5 Simple Steps:

### Step 1: Create GitHub Account (2 minutes)
- Go to https://github.com/signup
- Create a free account
- Verify your email

### Step 2: Create a New Repository (2 minutes)
```
1. Click + icon (top right) → New repository
2. Name: anujkumar-portfolio
3. Set to PUBLIC ✓
4. Click "Create repository"
```

### Step 3: Upload Your Files (3 minutes)
```
Method 1 - Web Upload (Easiest):
1. Click "Add file" → "Upload files"
2. Drag & drop all files from this folder
3. Click "Commit changes"

Method 2 - Using Git (Recommended):
git init
git add .
git commit -m "Initial portfolio"
git remote add origin https://github.com/YOUR_USERNAME/anujkumar-portfolio.git
git branch -M main
git push -u origin main
```

### Step 4: Enable GitHub Pages (1 minute)
```
1. Go to Settings (top right)
2. Click "Pages" (left sidebar)
3. Select "main" branch as source
4. Click Save
5. Wait 2-3 minutes for deployment
```

### Step 5: Visit Your Live Website! 🎉
```
Your site will be at:
https://YOUR_USERNAME.github.io/anujkumar-portfolio/
```

## Quick Customization Checklist

Before uploading, update these files:

### index.html
- [ ] Change name from "Anuj Kumar" to your name
- [ ] Update email address
- [ ] Change phone number
- [ ] Update institution name (IIT Jammu → your institution)

### research.html
- [ ] Add/update your publications
- [ ] Change research interests
- [ ] Update author names

### skills.html
- [ ] Update programming languages you know
- [ ] Adjust skill bars (change width percentage)
- [ ] Add/remove skills relevant to you

### contact.html
- [ ] Update email
- [ ] Update phone number
- [ ] Update LinkedIn URL
- [ ] Update Google Scholar URL

### education.html
- [ ] Update degree information
- [ ] Update university names
- [ ] Update advisor names
- [ ] Modify grades/CGPA

## File Reference

| File | Purpose | Edit? |
|------|---------|-------|
| index.html | Home page & profile | ✅ Customize |
| education.html | Education background | ✅ Customize |
| research.html | Publications | ✅ Customize |
| skills.html | Skills & experience | ✅ Customize |
| contact.html | Contact info | ✅ Customize |
| style.css | Styling | ❓ Optional |
| script.js | Interactivity | ❌ Usually leave |
| README.md | Documentation | ❌ Reference |

## Change Colors (Optional)

In `style.css`, find and modify:
```css
:root {
    --primary-color: #1a5490;        /* Blue */
    --secondary-color: #2980b9;      /* Light Blue */
    --accent-color: #3498db;         /* Bright Blue */
}
```

Try these color combinations:
- **Tech Professional**: `#1a1a2e`, `#16213e`, `#0f3460`
- **Academic**: `#1a4d6d`, `#2a6a99`, `#3a8ec4`
- **Creative**: `#6c63ff`, `#8b5cf6`, `#a78bfa`
- **Modern**: `#0ea5e9`, `#06b6d4`, `#14b8a6`

## Update Your GitHub Profile

Add a link to your portfolio in your GitHub profile:
1. Go to Settings (profile) → Edit profile
2. Add Website URL: `https://YOUR_USERNAME.github.io/anujkumar-portfolio/`
3. Click Save

## Keep It Updated

To make changes later:
```bash
# Edit files locally
# Then:
git add .
git commit -m "Update: description of changes"
git push
# Changes live in 1-2 minutes!
```

## Helpful Links

| Resource | Link |
|----------|------|
| GitHub Pages Docs | https://pages.github.com |
| Git Tutorial | https://git-scm.com/book |
| HTML Reference | https://developer.mozilla.org/en-US/docs/Web/HTML |
| CSS Reference | https://developer.mozilla.org/en-US/docs/Web/CSS |
| Color Picker | https://htmlcolorcodes.com |

## Troubleshooting

**Site not showing?**
- Wait 5-10 minutes for GitHub to build
- Check Settings → Pages shows "Your site is live"
- Clear browser cache (Ctrl+F5)

**Styling broken?**
- Check that style.css is in same folder as HTML files
- Check browser console (F12) for errors

**Links not working?**
- Verify all HTML files are in same directory
- Check spelling of filenames (case-sensitive)

**Mobile menu not working?**
- Ensure script.js is loaded in all HTML files
- Check browser console for JavaScript errors

## Need Help?

1. Check the full README.md for detailed information
2. Look for similar issues on GitHub (github.com/issues)
3. Ask in GitHub Discussions
4. Consult MDN Web Docs for HTML/CSS/JS help

---

✨ **Your portfolio is ready!** Start sharing it with the world! 🌟

For questions, refer to README.md or check the contact page of the website.
