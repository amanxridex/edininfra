const fs = require('fs');
const path = require('path');

const targetDir = 'c:/Users/91836/PERSONAL/edinmaster/ED';
const files = fs.readdirSync(targetDir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    const filePath = path.join(targetDir, file);
    let html = fs.readFileSync(filePath, 'utf8');

    // 1. ED above and INFRATECH below, make it bigger
    html = html.replace(
        /<div class="footer-logo"><h2 style="color: white; font-weight: bold; margin: 0; letter-spacing: 1px; font-size: 32px; white-space: nowrap;">ED INFRATECH<\/h2><\/div>/g,
        '<div class="footer-logo"><h2 style="color: white; font-weight: bold; margin: 0; letter-spacing: 1px; font-size: 48px; line-height: 1.1; white-space: nowrap;">ED<br>INFRATECH</h2></div>'
    );

    // 2. Head Office color to white
    html = html.replace(
        /<strong>Head Office :<\/strong> GAURAVDEEP HEIGHTS/g,
        '<strong style="color: white;">Head Office :</strong> GAURAVDEEP HEIGHTS'
    );
    html = html.replace(
        /<strong>Head Office\s*:<\/strong> GAURAVDEEP HEIGHTS/g,
        '<strong style="color: white;">Head Office :</strong> GAURAVDEEP HEIGHTS'
    );

    // 3. Socials
    // Instead of regex targeting every exact combination, let's target the exact social block.
    const oldSocials = `<ul class="social-icon-list1 mb-5 mb-lg-0">
                      <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                      <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                      <li><a href="#"><i class="fab fa-pinterest-p"></i></a></li>
                      <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                    </ul>`;
    const newSocials = `<ul class="social-icon-list1 mb-5 mb-lg-0">
                      <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                      <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                      <li><a href="#"><i class="fab fa-youtube"></i></a></li>
                    </ul>`;
    
    // Some might have whitespace differences, so let's use a regex
    const socialRegex = /<ul class="social-icon-list1 mb-5 mb-lg-0">\s*<li><a href="#"><i class="fab fa-twitter"><\/i><\/a><\/li>\s*<li><a href="#"><i class="fab fa-facebook-f"><\/i><\/a><\/li>\s*<li><a href="#"><i class="fab fa-pinterest-p"><\/i><\/a><\/li>\s*<li><a href="#"><i class="fab fa-instagram"><\/i><\/a><\/li>\s*<\/ul>/g;

    html = html.replace(socialRegex, newSocials);

    fs.writeFileSync(filePath, html, 'utf8');
});

console.log('Fixed footer logo, head office color, and socials across all HTML files.');
