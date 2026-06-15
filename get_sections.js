const fs = require('fs');

const files = ['index.html', 'index-2.html', 'index-3.html'];

files.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const regex = /<section\s+class="([^"]+)"/g;
    let match;
    console.log(`\n--- ${file} ---`);
    while ((match = regex.exec(content)) !== null) {
        console.log(match[1]);
    }
});
