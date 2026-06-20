const fs = require('fs');
const path = require('path');

const targetPath = 'c:/Users/91836/PERSONAL/edinmaster/ED/page-projects.html';
let content = fs.readFileSync(targetPath, 'utf8');

const regex = /<img src="(images\/resource\/project1-\d+\.jpg)" alt="img">\s*<img src="\1" alt="img">\s*<a href="#" class="arrow-icon"><i class="fa-solid fa-arrow-right"><\/i><\/a>/g;

content = content.replace(regex, (match, src) => {
    return `<a href="page-project-details.html" style="display: block;">
                    <img src="${src}" alt="img">
                    <img src="${src}" alt="img">
                  </a>
                  <a href="page-project-details.html" class="arrow-icon"><i class="fa-solid fa-arrow-right"></i></a>`;
});

fs.writeFileSync(targetPath, content, 'utf8');
console.log('Successfully wrapped project images in links!');
