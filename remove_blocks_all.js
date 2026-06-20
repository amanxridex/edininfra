const fs = require('fs');
const path = require('path');

const targetDir = 'c:/Users/91836/PERSONAL/edinmaster/ED';

function removeBlocksEverywhere() {
    fs.readdirSync(targetDir).forEach(file => {
        if (file.endsWith('.html')) {
            const filePath = path.join(targetDir, file);
            let content = fs.readFileSync(filePath, 'utf8');
            let modified = false;
            
            // The bad snippet we want to remove:
            const blockRegex = /<div class="about-block">\s*<div class="inner-block">\s*<div class="icon">\s*<i class="flaticon-set-pencil-and-ruler"><\/i>\s*<\/div>\s*<div class="content">\s*<div class="h5 title">Creative Solutions <\/div>\s*<div class="text">In today's competitive business landscape, the need for efficient IT solutions has been more critical\.<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<div class="about-block">\s*<div class="inner-block">\s*<div class="icon">\s*<i class="flaticon-set-architect"><\/i>\s*<\/div>\s*<div class="content">\s*<div class="h5 title">Actionable Solutions <\/div>\s*<div class="text">In today's competitive business landscape, the need for efficient IT solutions has been more critical\.<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/g;
            
            if (blockRegex.test(content)) {
                content = content.replace(blockRegex, '');
                modified = true;
            }
            
            if (modified) {
                fs.writeFileSync(filePath, content, 'utf8');
                console.log(`Updated ${file}`);
            }
        }
    });
}

removeBlocksEverywhere();
