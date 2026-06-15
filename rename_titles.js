const fs = require('fs');
const path = require('path');

const targetDir = 'c:/Users/91836/PERSONAL/edinmaster/ED';
const files = fs.readdirSync(targetDir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    const filePath = path.join(targetDir, file);
    let html = fs.readFileSync(filePath, 'utf8');
    
    let updated = false;

    if (html.includes('EDFratech - Real Estate HTML Template')) {
        html = html.replace(/EDFratech - Real Estate HTML Template/g, 'ED Infratech');
        updated = true;
    } else if (html.includes('<title>EDFratech')) {
        html = html.replace(/<title>EDFratech/g, '<title>ED Infratech');
        updated = true;
    }

    if (updated) {
        fs.writeFileSync(filePath, html, 'utf8');
        console.log(`Updated title in ${file}`);
    }
});
