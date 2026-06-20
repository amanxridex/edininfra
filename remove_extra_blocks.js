const fs = require('fs');
const path = require('path');

const targetDir = 'c:/Users/91836/PERSONAL/edinmaster/ED';

function removeExtraBlocks(filename) {
    const filePath = path.join(targetDir, filename);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // We want to remove these two specific blocks exactly
    const blockRegex = /<div class="about-block">[\s\S]*?<i class="flaticon-set-pencil-and-ruler"><\/i>[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<div class="about-block">[\s\S]*?<i class="flaticon-set-architect"><\/i>[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/g;
    
    const newContent = content.replace(blockRegex, '');
    if (newContent !== content) {
        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log(`Updated ${filename}`);
    } else {
        console.log(`No match found in ${filename}`);
    }
}

removeExtraBlocks('mission-1.html');
removeExtraBlocks('vision-1.html');
