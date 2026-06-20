const fs = require('fs');
const path = require('path');

const targetDir = 'c:/Users/91836/PERSONAL/edinmaster/ED';
const aboutPath = path.join(targetDir, 'page-about.html');

let aboutHtml = fs.readFileSync(aboutPath, 'utf8');

// 1. Add ID to Core Values
aboutHtml = aboutHtml.replace('<section class="about-section pt-0">', '<section class="about-section pt-0" id="our-core-values">');

// 2. Add ID to Services
aboutHtml = aboutHtml.replace('<section class="services-section-two">', '<section class="services-section-two" id="what-we-do">');

// 3. Add ID to Team Section
aboutHtml = aboutHtml.replace('<section class="team-section">', '<section class="team-section" id="our-team">');

fs.writeFileSync(aboutPath, aboutHtml, 'utf8');
console.log("Added IDs to page-about.html");
