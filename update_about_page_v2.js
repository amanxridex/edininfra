const fs = require('fs');
const path = require('path');

const targetDir = 'c:/Users/91836/PERSONAL/edinmaster/ED';
const aboutPath = path.join(targetDir, 'page-about.html');
const indexPath = path.join(targetDir, 'index.html');
const cvPath = path.join(targetDir, 'page-our-core-values.html');

let aboutHtml = fs.readFileSync(aboutPath, 'utf8');
let indexHtml = fs.readFileSync(indexPath, 'utf8');
let cvHtml = fs.readFileSync(cvPath, 'utf8');

// 1. Get Services section from index.html
const svStartMarker = '    <!-- start service section -->';
const svEndMarker = '    <!-- end service section -->';
const sStart = indexHtml.indexOf(svStartMarker);
const sEnd = indexHtml.indexOf(svEndMarker);
if (sStart === -1 || sEnd === -1) {
    console.error("Could not find service section in index.html");
    process.exit(1);
}
let newServices = indexHtml.substring(sStart, sEnd + svEndMarker.length);

// 2. Replace Services section in page-about.html
const abtSvStartMarker = '    <!-- Services Section -->';
const abtSvEndMarker = '    <!-- End Services Section -->';
const aStart = aboutHtml.indexOf(abtSvStartMarker);
const aEnd = aboutHtml.indexOf(abtSvEndMarker);
if (aStart === -1 || aEnd === -1) {
    console.error("Could not find Services Section in page-about.html");
    process.exit(1);
}
aboutHtml = aboutHtml.substring(0, aStart) + newServices + aboutHtml.substring(aEnd + abtSvEndMarker.length);


// 3. Extract the Core Values Section from page-our-core-values.html
// Looking for: <section class="about-section">  ... Principles that Guide Us ...  <!-- end about-section -->
const cvStartIdx = cvHtml.indexOf('<section class="about-section">');
const cvEndIdx = cvHtml.indexOf('    <!-- end about-section -->', cvStartIdx);
if (cvStartIdx === -1 || cvEndIdx === -1) {
    console.error("Could not find about-section in page-our-core-values.html");
    process.exit(1);
}
let coreValuesBlock = cvHtml.substring(cvStartIdx - 4, cvEndIdx + '    <!-- end about-section -->'.length);
// Make sure it doesn't double-pad by adding pt-0
coreValuesBlock = coreValuesBlock.replace('<section class="about-section">', '<section class="about-section pt-0">');

// 4. Insert Core Values Section into page-about.html right before the newly inserted Services section.
const insertPos = aboutHtml.indexOf('    <!-- start service section -->');
aboutHtml = aboutHtml.substring(0, insertPos) + coreValuesBlock + '\n\n' + aboutHtml.substring(insertPos);

fs.writeFileSync(aboutPath, aboutHtml, 'utf8');
console.log("Successfully updated page-about.html");
