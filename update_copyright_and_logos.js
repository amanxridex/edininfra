const fs = require('fs');
const path = require('path');

const targetDir = 'c:/Users/91836/PERSONAL/edinmaster/ED';

// 1. Enlarge logos in index.html
const indexHtmlPath = path.join(targetDir, 'index.html');
if (fs.existsSync(indexHtmlPath)) {
    let indexContent = fs.readFileSync(indexHtmlPath, 'utf8');
    indexContent = indexContent.replace(/style="width: 160px; height: 90px; object-fit: contain; background: transparent; padding: 10px;"/g, 'style="width: 250px; height: 140px; object-fit: contain; background: transparent; padding: 10px;"');
    fs.writeFileSync(indexHtmlPath, indexContent, 'utf8');
    console.log('Enlarged logos in index.html');
}

// 2. Update copyright text in all HTML files
const files = fs.readdirSync(targetDir).filter(f => f.endsWith('.html'));

const oldCopyright1 = '© Copyright Reserved by Company.com';
const oldCopyright2 = 'Ac Copyright Reserved by Company.com'; // I saw this typo earlier in one of the files
const newCopyright = '&copy; Copyright Reserved by <a href="https://amanmishra.work" style="color: inherit; text-decoration: underline;">Aman Mishra</a>';

files.forEach(file => {
    const filePath = path.join(targetDir, file);
    let html = fs.readFileSync(filePath, 'utf8');
    
    let updated = false;
    if (html.includes(oldCopyright1)) {
        html = html.split(oldCopyright1).join(newCopyright);
        updated = true;
    }
    if (html.includes(oldCopyright2)) {
        html = html.split(oldCopyright2).join(newCopyright);
        updated = true;
    }
    
    if (updated) {
        fs.writeFileSync(filePath, html, 'utf8');
        console.log(`Updated copyright in ${file}`);
    }
});
