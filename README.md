# Dr. Raza Habib - UX Portfolio Website

A modern, professional portfolio website showcasing Dr. Raza Habib's expertise in UX design and product management. Built with static HTML, CSS, and JavaScript for optimal GitHub Pages compatibility.

## Features

- **Modern Design**: Clean, minimalist aesthetic with professional styling
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Static Site**: No build process required - works directly on GitHub Pages
- **Fast Loading**: Optimized performance with modern CSS and vanilla JavaScript
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Accessible**: WCAG compliant design with proper contrast and navigation

## Technology Stack

- **HTML5**: Semantic markup for better SEO and accessibility
- **CSS3**: Modern CSS with Grid, Flexbox, and custom properties
- **Vanilla JavaScript**: Interactive features without framework dependencies
- **Google Fonts**: Professional typography with Inter font family
- **Progressive Enhancement**: Works with JavaScript disabled

## Project Structure

```
raza-portfolio-static/
├── index.html              # Homepage
├── portfolio.html          # Portfolio overview
├── about.html             # About page
├── contact.html           # Contact page
├── case-study-*.html      # Individual case study pages
├── assets/
│   ├── css/
│   │   └── style.css      # Main stylesheet
│   ├── js/
│   │   └── main.js        # Interactive features
│   ├── images/            # Portfolio images
│   └── docs/              # CV and documents
└── README.md              # This file
```

## Quick Start

### Local Development

1. Clone or download the repository
2. Open a terminal in the project directory
3. Start a local server:
   ```bash
   # Using Python 3
   python3 -m http.server 8080
   
   # Using Python 2
   python -m SimpleHTTPServer 8080
   
   # Using Node.js
   npx serve .
   ```
4. Open http://localhost:8080 in your browser

### GitHub Pages Deployment

#### Method 1: Direct Upload (Easiest for Windows)

1. Create a new repository on GitHub
2. Name it `your-username.github.io` (replace with your GitHub username)
3. Make the repository public
4. Upload all files from this folder to the repository
5. Go to Settings > Pages
6. Select "Deploy from a branch"
7. Choose "main" branch and "/ (root)" folder
8. Save and wait 5-10 minutes for deployment

#### Method 2: Git Commands

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial portfolio website"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git

# Push to GitHub
git push -u origin main
```

Then enable GitHub Pages in repository settings.

## Customization

### Updating Content

**Personal Information:**
- Edit contact details in `contact.html` and `about.html`
- Update professional experience in `about.html`
- Modify skills and expertise sections

**Portfolio Projects:**
- Update project descriptions in `portfolio.html`
- Add new case study pages following the existing pattern
- Update featured projects on the homepage

**Styling:**
- Modify CSS custom properties in `assets/css/style.css` for colors and spacing
- Update typography by changing the Google Fonts import
- Adjust layout by modifying CSS Grid and Flexbox properties

### Adding New Pages

1. Create a new HTML file following the existing structure
2. Copy the header and footer from existing pages
3. Add navigation link to all pages
4. Update the JavaScript navigation highlighting

### Color Scheme

The website uses CSS custom properties for easy theming:

```css
:root {
  --color-primary: #1a1a1a;      /* Dark text */
  --color-secondary: #f8f9fa;    /* Light background */
  --color-accent: #3b82f6;       /* Blue accent */
  --color-text: #333333;         /* Regular text */
  --color-text-light: #6b7280;   /* Muted text */
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Features

- **Optimized CSS**: Minified and organized for fast loading
- **Vanilla JavaScript**: No framework overhead
- **Responsive Images**: Proper sizing for different devices
- **Modern CSS**: Uses efficient Grid and Flexbox layouts
- **Font Loading**: Optimized Google Fonts loading

## SEO Features

- Semantic HTML5 structure
- Proper heading hierarchy
- Meta descriptions for all pages
- Open Graph tags for social sharing
- Structured data markup
- Fast loading times
- Mobile-friendly design

## Accessibility Features

- Proper contrast ratios
- Keyboard navigation support
- Screen reader friendly
- Alt text for images
- ARIA labels where needed
- Focus indicators
- Semantic markup

## Contact Form

The contact form uses a mailto: link approach that:
- Opens the user's default email client
- Pre-fills the recipient, subject, and message
- Works without server-side processing
- Is compatible with all email clients

## Maintenance

### Regular Updates
- Keep content current with new projects and achievements
- Update professional experience and skills
- Refresh portfolio images and case studies
- Monitor and fix any broken links

### Analytics (Optional)
Add Google Analytics by including the tracking code in the `<head>` section of all HTML files.

### Performance Monitoring
Use tools like Google PageSpeed Insights to monitor and optimize performance.

## Troubleshooting

**Website not loading on GitHub Pages:**
- Check that repository is public
- Verify GitHub Pages is enabled in settings
- Ensure all file names are lowercase
- Wait 5-10 minutes for changes to propagate

**Styling issues:**
- Check CSS file path is correct
- Verify all CSS custom properties are defined
- Test in different browsers

**JavaScript not working:**
- Check browser console for errors
- Ensure script tag is before closing `</body>` tag
- Verify file paths are correct

## License

This portfolio website is created for Dr. Raza Habib's personal use.

## Support

For questions about customization or deployment, refer to:
- GitHub Pages documentation
- MDN Web Docs for HTML/CSS/JavaScript
- Web accessibility guidelines (WCAG)

---

**Live Website:** https://your-username.github.io/
**Contact:** raza.peterson@yahoo.com

