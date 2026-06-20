const fs = require('fs');
const path = require('path');

const targetPath = 'c:/Users/91836/PERSONAL/edinmaster/ED/page-projects.html';
let content = fs.readFileSync(targetPath, 'utf8');

// Change the main filter bar background
content = content.replace(
    'style="background: #ffffff; padding: 20px 30px; border-radius: 50px; box-shadow: 0 15px 40px rgba(0,0,0,0.06); border: 1px solid rgba(200,160,50,0.15);"',
    'style="background: linear-gradient(135deg, #0D3B66 0%, #082544 100%); padding: 20px 30px; border-radius: 50px; box-shadow: 0 15px 40px rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.1);"'
);

// Change the labels from dark blue to white
content = content.replace(/style="color: #0D3B66; font-weight: 600; font-size: 15px; white-space: nowrap;"/g, 'style="color: #ffffff; font-weight: 600; font-size: 15px; white-space: nowrap;"');

fs.writeFileSync(targetPath, content, 'utf8');
console.log('Successfully updated the filter bar color to dark blue gradient.');
