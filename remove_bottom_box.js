const fs = require('fs');
const path = require('path');

const targetDir = 'c:/Users/91836/PERSONAL/edinmaster/ED';
const files = fs.readdirSync(targetDir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    const filePath = path.join(targetDir, file);
    let html = fs.readFileSync(filePath, 'utf8');

    // Use a regex that precisely matches the bottom-box containing the Reed More button and the info-box.
    // The [\s\S]*? handles multiline text safely.
    const regex = /[ \t]*<div class="bottom-box">[\s\S]*?<span class="btn-title">Reed More<\/span>[\s\S]*?<div class="info-box">[\s\S]*?<\/div>[\s\S]*?<\/div>\r?\n?/g;
    
    if (regex.test(html)) {
        html = html.replace(regex, '');
        fs.writeFileSync(filePath, html, 'utf8');
        console.log('Removed bottom box in ' + file);
    }
});
