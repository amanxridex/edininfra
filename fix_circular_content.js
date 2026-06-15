const fs = require('fs');
const path = require('path');

const targetDir = 'c:/Users/91836/PERSONAL/edinmaster/ED';
const files = fs.readdirSync(targetDir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    const filePath = path.join(targetDir, file);
    let html = fs.readFileSync(filePath, 'utf8');
    
    let changed = false;

    const regex1 = /<textPath href="#circlePath" startOffset="50%">[\s\S]*?<\/textPath>/g;
    const regex2 = /<textPath href="#circlePath2" startOffset="50%">[\s\S]*?<\/textPath>/g;
    const regex3 = /<textPath href="#circlePath3" startOffset="50%">[\s\S]*?<\/textPath>/g;

    if (regex1.test(html) || regex2.test(html) || regex3.test(html)) {
        html = html.replace(regex1, '<textPath href="#circlePath" startOffset="50%">ED INFRATECH • ED INFRATECH • </textPath>');
        html = html.replace(regex2, '<textPath href="#circlePath2" startOffset="50%">ED INFRATECH • ED INFRATECH • </textPath>');
        html = html.replace(regex3, '<textPath href="#circlePath3" startOffset="50%">ED INFRATECH • ED INFRATECH • </textPath>');
        changed = true;
    }

    if (changed) {
        fs.writeFileSync(filePath, html, 'utf8');
        console.log('Fixed circular text in ' + file);
    }
});
