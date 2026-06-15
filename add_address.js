const fs = require('fs');
const path = require('path');

const targetDir = 'c:/Users/91836/PERSONAL/edinmaster/ED';
const files = fs.readdirSync(targetDir).filter(f => f.endsWith('.html'));

const fullAddressHTML = `
                    <div class="address" style="margin-bottom: 25px; font-size: 16px; line-height: 1.6;">
                      <strong>Head Office :</strong> GAURAVDEEP HEIGHTS <br>
                      B-23A, Sector-62, Near Fortis Hospital <br>
                      (Sector-62, Noida Metro Station) Noida
                    </div>
`;

files.forEach(file => {
    const filePath = path.join(targetDir, file);
    let html = fs.readFileSync(filePath, 'utf8');
    let changed = false;

    // Update Header Address
    const headerRegex = /<span>Delhi NCR, India<\/span>/g;
    if (headerRegex.test(html)) {
        html = html.replace(headerRegex, '<span>B-23A, Sector-62, Noida</span>');
        changed = true;
    }

    // Update Footer Address
    const footerRegex = /<div class="contact-area">/g;
    // Check if we haven't already added the address
    if (footerRegex.test(html) && !html.includes('GAURAVDEEP HEIGHTS')) {
        html = html.replace(footerRegex, '<div class="contact-area">' + fullAddressHTML);
        changed = true;
    }

    // Update Contact Page if applicable
    const contactRegex = /<span>Delhi NCR<\/span>/g;
    if (contactRegex.test(html)) {
        html = html.replace(contactRegex, '<span>B-23A, Sector-62, Noida</span>');
        changed = true;
    }

    if (changed) {
        fs.writeFileSync(filePath, html, 'utf8');
        console.log('Updated address in ' + file);
    }
});
