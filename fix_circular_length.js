const fs = require('fs');
const path = require('path');

const targetDir = 'c:/Users/91836/PERSONAL/edinmaster/ED';
const files = fs.readdirSync(targetDir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    const filePath = path.join(targetDir, file);
    let html = fs.readFileSync(filePath, 'utf8');
    
    // Reduce letter-spacing so it doesn't wrap over itself
    html = html.replace(/letter-spacing="6"/g, 'letter-spacing="3"');
    
    // Explicitly set the text path to avoid weird encodings
    html = html.replace(/<textPath href="#circlePath" startOffset="50%">.*?<\/textPath>/g, '<textPath href="#circlePath" startOffset="50%">ED INFRATECH • ED INFRATECH •</textPath>');
    html = html.replace(/<textPath href="#circlePath2" startOffset="50%">.*?<\/textPath>/g, '<textPath href="#circlePath2" startOffset="50%">ED INFRATECH • ED INFRATECH •</textPath>');
    html = html.replace(/<textPath href="#circlePath3" startOffset="50%">.*?<\/textPath>/g, '<textPath href="#circlePath3" startOffset="50%">ED INFRATECH • ED INFRATECH •</textPath>');

    fs.writeFileSync(filePath, html, 'utf8');
});
console.log('Fixed circular text length and encoding');
