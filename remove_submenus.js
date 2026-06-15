const fs = require('fs');
const path = require('path');

const targetDir = 'c:/Users/91836/PERSONAL/edinmaster/ED';
const files = fs.readdirSync(targetDir).filter(f => f.endsWith('.html'));

const newMenu = `<ul class="navigation">
                  <li class="current"><a href="index.html">Home</a></li>
                  <li><a href="page-about.html">About Us</a></li>
                  <li><a href="page-projects.html">Projects</a></li>
                  <li><a href="page-services.html">Services</a></li>
                  <li><a href="news-grid.html">News Updates</a></li>
                </ul>`;

files.forEach(file => {
    const filePath = path.join(targetDir, file);
    let html = fs.readFileSync(filePath, 'utf8');
    
    // We match from <ul class="navigation"> up to the enclosing </nav>
    const regex = /<ul class="navigation">[\s\S]*?<\/ul>\s*<\/nav>/;
    if (regex.test(html)) {
        html = html.replace(regex, newMenu + '\n              </nav>');
        fs.writeFileSync(filePath, html, 'utf8');
        console.log('Removed submenus in ' + file);
    }
});
