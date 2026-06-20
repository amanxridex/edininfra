const fs = require('fs');
const path = require('path');

const targetDir = 'c:/Users/91836/PERSONAL/edinmaster/ED';

const newDropdown = `<ul>
                      <li><a href="mission-1.html">Our Mission</a></li>
                      <li><a href="vision-1.html">Our Vision</a></li>
                      <li><a href="page-about.html#our-team">Our Team</a></li>
                      <li><a href="page-about.html#our-core-values">Our Core Values</a></li>
                      <li><a href="page-about.html">About Our Company</a></li>
                      <li><a href="page-about.html#what-we-do">What We Do</a></li>
                    </ul>`;

fs.readdirSync(targetDir).forEach(file => {
    if (file.endsWith('.html')) {
        const filePath = path.join(targetDir, file);
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Match the <li class="dropdown"> version (already done in index.html, but let's be thorough)
        const regexDropdown = /<li class="dropdown">\s*<a href="page-about\.html">About Us<\/a>\s*<ul[^>]*>[\s\S]*?<\/ul>\s*<\/li>/g;
        
        // Match the plain <li> version
        const regexPlain = /<li>\s*<a href="page-about\.html">About Us<\/a>\s*<\/li>/g;
        
        // Match the <li class="current"> version
        const regexCurrent = /<li class="current">\s*<a href="page-about\.html">About Us<\/a>\s*<\/li>/g;
        
        // Match the <li class="current dropdown"> version
        const regexCurrentDropdown = /<li class="current dropdown">\s*<a href="page-about\.html">About Us<\/a>\s*<ul[^>]*>[\s\S]*?<\/ul>\s*<\/li>/g;

        const replacement = `<li class="dropdown"><a href="page-about.html">About Us</a>
                    ${newDropdown}
                  </li>`;
                  
        let newContent = content.replace(regexDropdown, replacement);
        newContent = newContent.replace(regexPlain, replacement);
        newContent = newContent.replace(regexCurrent, `<li class="current dropdown"><a href="page-about.html">About Us</a>\n                    ${newDropdown}\n                  </li>`);
        newContent = newContent.replace(regexCurrentDropdown, `<li class="current dropdown"><a href="page-about.html">About Us</a>\n                    ${newDropdown}\n                  </li>`);
        
        if (newContent !== content) {
            fs.writeFileSync(filePath, newContent, 'utf8');
            console.log(`Updated ${file}`);
        }
    }
});
