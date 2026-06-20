const fs = require('fs');
const path = require('path');

const dir = 'c:/Users/91836/PERSONAL/edinmaster/ED';
const files = fs.readdirSync(dir);

files.forEach(file => {
    if (file.endsWith('.html')) {
        const filePath = path.join(dir, file);
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Check if it already has the link
        if (!content.includes('mobile-aggressive.css')) {
            // Find the end of the head section or before </head>
            const injectString = '  <link rel="stylesheet" href="css/mobile-aggressive.css">\n</head>';
            content = content.replace('</head>', injectString);
            
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Injected into ${file}`);
        }
    }
});
console.log('Injection complete.');
