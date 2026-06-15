const fs = require('fs');
const path = require('path');

const targetDir = 'c:/Users/91836/PERSONAL/edinmaster/ED';
const files = fs.readdirSync(targetDir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    const filePath = path.join(targetDir, file);
    let html = fs.readFileSync(filePath, 'utf8');
    
    let updated = false;

    // Fix missed phone numbers
    if (html.includes('+92 (020)-9850')) {
        html = html.replace(/\+92 \(020\)-9850/g, '+91 836 833 7869');
        updated = true;
    }
    if (html.includes('href="tel:980089850"')) {
        html = html.replace(/href="tel:980089850"/g, 'href="tel:+918368337869"');
        updated = true;
    }

    // Fix Address
    if (html.includes('66 broklyn golden street. New York')) {
        html = html.replace(/66 broklyn golden street\. New York/g, 'Delhi NCR');
        updated = true;
    }

    // Fix Map
    if (html.includes('1%20Grafton%20Street,%20Dublin,%20Ireland')) {
        // Replace the query parameter for google maps
        // 'Noida Sector 63' url encoded is Noida%20Sector%2063
        html = html.replace(/1%20Grafton%20Street,%20Dublin,%20Ireland\+\(My%20Business%20Name\)/g, 'Sector%2063,%20Noida,%20Uttar%20Pradesh%20201301+(ED%20Infratech)');
        updated = true;
    }

    if (updated) {
        fs.writeFileSync(filePath, html, 'utf8');
        console.log(`Updated address, map, and phone in ${file}`);
    }
});
