const fs = require('fs');
const path = require('path');

const targetDir = 'c:/Users/91836/PERSONAL/edinmaster/ED';
const files = fs.readdirSync(targetDir).filter(f => f.endsWith('.html'));

const phoneReplacements = [
    { regex: /\+91 98765 43210/g, newStr: '+91 836 833 7869' },
    { regex: /\+ \(123\) 456-7890/g, newStr: '+91 836 833 7869' },
    { regex: /tel:\+8801750050088/g, newStr: 'tel:+918368337869' },
    { regex: /tel:01750050088/g, newStr: 'tel:+918368337869' },
    { regex: /tel:\+1234567890/g, newStr: 'tel:+918368337869' },
    { regex: /\+123 456 7890/g, newStr: '+91 836 833 7869' }
];

files.forEach(file => {
    const filePath = path.join(targetDir, file);
    let html = fs.readFileSync(filePath, 'utf8');
    
    let updated = false;

    // Replace phones
    phoneReplacements.forEach(rep => {
        if (html.match(rep.regex)) {
            html = html.replace(rep.regex, rep.newStr);
            updated = true;
        }
    });

    // Replace Cloudflare email protection tags
    const oldHtml = html;
    
    // Replace the href
    html = html.replace(/href="https:\/\/html\.kodesolution\.com\/cdn-cgi\/l\/email-protection[^"]*"/g, 'href="mailto:edinfratech6@gmail.com"');
    
    // Replace the inner span/content
    html = html.replace(/<span class="__cf_email__" data-cfemail="[^"]*">\[email(?:&nbsp;|\s*)protected\]<\/span>/g, 'edinfratech6@gmail.com');
    
    // Sometimes it's directly on the anchor
    html = html.replace(/class="__cf_email__" data-cfemail="[^"]*">\[email(?:&nbsp;|\s*)protected\]<\/a>/g, '>edinfratech6@gmail.com</a>');

    if (oldHtml !== html) {
        updated = true;
    }

    if (updated) {
        fs.writeFileSync(filePath, html, 'utf8');
        console.log(`Updated contacts in ${file}`);
    }
});
