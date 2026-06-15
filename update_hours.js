const fs = require('fs');
const path = require('path');

const targetDir = 'c:/Users/91836/PERSONAL/edinmaster/ED';
const files = fs.readdirSync(targetDir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    const filePath = path.join(targetDir, file);
    let html = fs.readFileSync(filePath, 'utf8');
    
    if (html.includes('Mon - Sat')) {
        html = html.replace(/Mon - Sat/g, 'Mon - Sun');
        fs.writeFileSync(filePath, html, 'utf8');
        console.log('Updated hours in ' + file);
    }
});
