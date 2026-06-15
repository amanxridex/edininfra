const fs = require('fs');
const path = require('path');

const targetDir = 'c:/Users/91836/PERSONAL/edinmaster/ED';
const files = fs.readdirSync(targetDir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    const filePath = path.join(targetDir, file);
    let html = fs.readFileSync(filePath, 'utf8');
    
    // Case insensitive global replacement
    const regex = /Call Anytime/gi;
    if (regex.test(html)) {
        html = html.replace(regex, 'Call/WhatsApp');
        fs.writeFileSync(filePath, html, 'utf8');
        console.log('Updated Call text in ' + file);
    }
});
