const fs = require('fs');
const path = require('path');

const targetDir = 'c:/Users/91836/PERSONAL/edinmaster/ED';
const indexHtmlPath = path.join(targetDir, 'index.html');
const aboutHtmlPath = path.join(targetDir, 'page-about.html');

let indexHtml = fs.readFileSync(indexHtmlPath, 'utf8');
let aboutHtml = fs.readFileSync(aboutHtmlPath, 'utf8');

// Extract the team section from index.html
const startMarkerIndex = '    <!-- start team section  -->';
const endMarkerIndex = '    <!-- end team section  -->';

let startIndexIndex = indexHtml.indexOf(startMarkerIndex);
let endIndexIndex = indexHtml.indexOf(endMarkerIndex) + endMarkerIndex.length;

const teamHtmlToInject = indexHtml.substring(startIndexIndex, endIndexIndex);

// Replace team-section-two in page-about.html
const startMarkerAbout = '    <!-- start team section two -->';
const endMarkerAbout = '    <!-- end team section two -->';

let startIndexAbout = aboutHtml.indexOf(startMarkerAbout);
let endIndexAbout = aboutHtml.indexOf(endMarkerAbout) + endMarkerAbout.length;

if (startIndexAbout !== -1 && endIndexAbout !== -1) {
    let newAboutHtml = aboutHtml.substring(0, startIndexAbout) + teamHtmlToInject + aboutHtml.substring(endIndexAbout);
    fs.writeFileSync(aboutHtmlPath, newAboutHtml, 'utf8');
    console.log('Replaced team section in page-about.html');
} else {
    console.log('Could not find team section in page-about.html');
}
