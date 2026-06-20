const fs = require('fs');

const filePaths = [
    'c:/Users/91836/PERSONAL/edinmaster/ED/nihal-singh-enclave-rabupura-sector-20-yamuna-authority.html',
    'c:/Users/91836/PERSONAL/edinmaster/ED/page-projects.html'
];

for (let file of filePaths) {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        content = content.replace(/images\/resource\/VIHAAN\.png/g, 'NSE1.png');
        content = content.replace(/images\/resource\/VIHAAN1\.png/g, 'NSE2.png');
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Updated images in ${file}`);
    }
}
