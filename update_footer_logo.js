const fs = require('fs');
const path = require('path');

const dirPath = 'c:/Users/91836/PERSONAL/edinmaster/ED';

const newLogoHTML = `<div class="footer-logo text-center" style="display: inline-block; text-align: center; margin-bottom: 20px;">
                  <div style="font-size: 42px; font-weight: 800; line-height: 1; color: #ffffff; letter-spacing: 2px; font-family: 'Inter', sans-serif;">ED</div>
                  <div style="font-size: 22px; font-weight: 700; color: #ffffff; letter-spacing: 3px; font-family: 'Inter', sans-serif; margin-top: 5px;">INFRATECH</div>
                </div>`;

const files = fs.readdirSync(dirPath).filter(file => file.endsWith('.html'));

let updatedCount = 0;

files.forEach(file => {
    const filePath = path.join(dirPath, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Regex to match the old footer logo image tag, tolerating whitespace differences
    const regex = /<div class="footer-logo">\s*<img src="images\/logo3\.png"[^>]*>\s*<\/div>/g;
    
    if (regex.test(content)) {
        content = content.replace(regex, newLogoHTML);
        fs.writeFileSync(filePath, content, 'utf8');
        updatedCount++;
    }
});

console.log(`Updated footer logo in ${updatedCount} files.`);
