const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'index.html');
let html = fs.readFileSync(filePath, 'utf8');

// Replace the text block inside the SVGs
// We will replace the <text ...> ... </text> block completely for each instance
html = html.replace(/<text font-size="14" letter-spacing="3" text-anchor="middle" dominant-baseline="middle">\s*<textPath href="#circlePath(\d+)" startOffset="50%">.*?<\/textPath>\s*<\/text>/g, (match, p1) => {
    return `<text font-size="14" font-weight="500" dominant-baseline="middle">
                        <textPath href="#circlePath${p1}" startOffset="0%" textLength="502" lengthAdjust="spacing">ED INFRATECH • ED INFRATECH • ED INFRATECH • </textPath>
                      </text>`;
});

fs.writeFileSync(filePath, html, 'utf8');
console.log('Fixed circular text to perfectly wrap around the circle!');
