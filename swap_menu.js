const fs = require('fs');
const path = require('path');

const targetDir = 'c:/Users/91836/PERSONAL/edinmaster/ED';
const files = fs.readdirSync(targetDir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    const filePath = path.join(targetDir, file);
    let html = fs.readFileSync(filePath, 'utf8');
    
    const regex = /<li><a href="news-grid.html">News Updates<\/a><\/li>\s*<li><a href="page-investors.html">Investors<\/a><\/li>/g;
    if (regex.test(html)) {
        html = html.replace(regex, '<li><a href="page-investors.html">Investors</a></li>\n                  <li><a href="news-grid.html">News Updates</a></li>');
        fs.writeFileSync(filePath, html, 'utf8');
        console.log('Swapped Investors and News Updates in ' + file);
    }
});
