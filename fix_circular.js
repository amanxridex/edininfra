const fs = require('fs');
const path = require('path');

const targetDir = 'c:/Users/91836/PERSONAL/edinmaster/ED';
const files = fs.readdirSync(targetDir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    const filePath = path.join(targetDir, file);
    let html = fs.readFileSync(filePath, 'utf8');
    
    // Regex matches "ED INFRATECH [weird char] ED INFRATECH [weird char]" 
    // but not html tags, to replace the content correctly.
    const regex = /ED INFRATECH[^A-Z0-9<>]*ED INFRATECH[^A-Z0-9<>]*/g;
    if (regex.test(html)) {
        html = html.replace(regex, 'ED INFRATECH • ED INFRATECH • ');
        fs.writeFileSync(filePath, html, 'utf8');
        console.log('Fixed typo in ' + file);
    }
});
