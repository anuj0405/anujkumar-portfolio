# Anuj Kumar - Academic Portfolio Website

A professional academic portfolio website built with HTML5, CSS3, and JavaScript. This website showcases research, publications, education, skills, and contact information.

## Website Features

✨ **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
📱 **Mobile-Friendly Navigation** - Hamburger menu for mobile devices
🎨 **Modern Styling** - Clean, professional design with smooth animations
⚡ **Fast Loading** - Optimized HTML/CSS/JavaScript for quick performance
📄 **Multiple Pages** - Home, Education, Research & Publications, Skills, Contact
🔍 **SEO Friendly** - Proper semantic HTML and meta tags
♿ **Accessible** - WCAG compliant with proper heading hierarchy

## Pages Included

1. **Home (index.html)** - Profile overview with bio and key achievements
2. **Education (education.html)** - Detailed education background and thesis information
3. **Research & Publications (research.html)** - All conference and journal papers
4. **Skills (skills.html)** - Programming languages, tools, and expertise
5. **Contact (contact.html)** - Contact information and social links

## File Structure

```
portfolio/
├── index.html           # Home page
├── education.html       # Education page
├── research.html        # Publications page
├── skills.html          # Skills page
├── contact.html         # Contact page
├── style.css            # Main stylesheet
├── script.js            # JavaScript functionality
├── README.md            # This file
└── .gitignore          # Git ignore file
```

## Hosting on GitHub Pages

### Step 1: Create a GitHub Account
If you don't have one, go to [github.com](https://github.com) and create a free account.

### Step 2: Create a New Repository

1. Click the **+** icon in the top right corner
2. Select **New repository**
3. Name it: `anujkumar-portfolio` (or any name you prefer)
4. Choose **Public** (required for free GitHub Pages)
5. Click **Create repository**

### Step 3: Upload Files to GitHub

**Option A: Using GitHub Web Interface (Easiest)**
1. In your new repository, click **Add file** → **Upload files**
2. Select all files from this folder (index.html, style.css, script.js, and all other HTML files)
3. Click **Commit changes**

**Option B: Using Git Command Line**
```bash
# Navigate to your portfolio folder
cd path/to/your/portfolio

# Initialize git repository
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit: Academic portfolio website"

# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/anujkumar-portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top right)
3. Scroll down to **Pages** section
4. Under "Source", select **main** branch
5. Click **Save**
6. Wait a few minutes for the site to build
7. Your website will be live at: `https://YOUR_USERNAME.github.io/anujkumar-portfolio/`

### Step 5: Custom Domain (Optional)

To use a custom domain:
1. Go to repository **Settings** → **Pages**
2. Under "Custom domain", enter your domain name
3. Click **Save**
4. Update your domain's DNS settings (consult your domain provider)

## Customization Guide

### Update Personal Information

**Edit index.html:**
- Change name, title, and bio in the profile section
- Update social links with your own profiles
- Modify contact email

**Edit contact.html:**
- Update phone number and address
- Change email address
- Update research interests

### Update Publications

**Edit research.html:**
- Add/remove publications in the Publications section
- Update dates, authors, and links
- Modify research interests

### Update Education

**Edit education.html:**
- Update degree information
- Change advisor names
- Modify educational institutions
- Update thesis titles and descriptions

### Update Skills

**Edit skills.html:**
- Modify skill bars by changing the percentage in `style="width: XX%"`
- Add/remove skill categories
- Update experience section

### Colors and Branding

Edit the CSS variables in `style.css`:
```css
:root {
    --primary-color: #1a5490;      /* Main color */
    --secondary-color: #2980b9;    /* Secondary color */
    --accent-color: #3498db;       /* Accent color */
    --success-color: #27ae60;      /* Success color */
}
```

## Development Tips

### Local Testing
To test your website locally before uploading:
1. Open any HTML file with your web browser
2. Or use a local server:
   ```bash
   # Python 3
   python -m http.server 8000
   # Then open http://localhost:8000
   ```

### Add Profile Picture
To add your own profile picture:
1. Replace the `avatar-placeholder` div with an img tag:
   ```html
   <img src="your-photo.jpg" alt="Anuj Kumar" class="profile-photo">
   ```
2. Add CSS for the image:
   ```css
   .profile-photo {
       width: 150px;
       height: 150px;
       border-radius: 10px;
       box-shadow: var(--shadow-lg);
   }
   ```

### SEO Optimization
Update meta tags in each HTML file for better search engine visibility:
```html
<meta name="description" content="Your description here">
<meta name="keywords" content="research, NLP, AI, publications">
<meta name="author" content="Your Name">
```

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Page size: ~50KB (optimized)
- Load time: < 1 second
- Lighthouse score: 90+

## Troubleshooting

**Q: GitHub Pages shows 404 error**
A: Wait 5-10 minutes for GitHub to build your site. Check Settings → Pages to confirm it's enabled.

**Q: Styling looks broken**
A: Make sure `style.css` is in the same folder as HTML files and the path is correct.

**Q: Mobile menu not working**
A: Ensure `script.js` is included in all HTML files with: `<script src="script.js"></script>`

**Q: Links to other pages don't work**
A: Make sure all HTML files are in the same directory/folder.

## Updates and Maintenance

To update your website:
1. Edit the files locally
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update: Your changes description"
   git push
   ```
3. Changes will be live in 1-2 minutes

## License

This template is free to use and modify for personal academic purposes.

## Support & Resources

- **GitHub Pages Help**: https://pages.github.com/
- **HTML/CSS Reference**: https://developer.mozilla.org/
- **Markdown Guide**: https://commonmark.org/help/

## Contact

For questions about this template, refer to the Contact page in the website.

---

**Last Updated:** June 27, 2026
**Version:** 1.0
