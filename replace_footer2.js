const fs = require('fs');
const path = require('path');

const targetDir = 'c:/Users/91836/PERSONAL/edinmaster/ED';
const files = fs.readdirSync(targetDir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    const filePath = path.join(targetDir, file);
    let html = fs.readFileSync(filePath, 'utf8');
    
    let updated = false;

    if (html.includes('newmanind.png')) {
        html = html.split('newmanind.png').join('newmanind2.png');
        updated = true;
    }

    if (updated) {
        fs.writeFileSync(filePath, html, 'utf8');
        console.log(`Replaced newmanind.png with newmanind2.png in ${file}`);
    }
});
