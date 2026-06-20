const fs = require('fs');
const path = require('path');

const targetDir = 'c:/Users/91836/PERSONAL/edinmaster/ED';

const shortPlaceholder = "Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur";
const newShortText = "Expert solutions tailored to elevate your infrastructure and real estate developments.";

function replaceShortPlaceholder() {
    fs.readdirSync(targetDir).forEach(file => {
        if (file.endsWith('.html')) {
            const filePath = path.join(targetDir, file);
            let content = fs.readFileSync(filePath, 'utf8');
            let modified = false;
            
            if (content.includes(shortPlaceholder)) {
                content = content.split(shortPlaceholder).join(newShortText);
                modified = true;
            }
            
            if (modified) {
                fs.writeFileSync(filePath, content, 'utf8');
                console.log(`Updated ${file}`);
            }
        }
    });
}

replaceShortPlaceholder();
