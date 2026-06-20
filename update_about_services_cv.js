const fs = require('fs');
const path = require('path');

const targetDir = 'c:/Users/91836/PERSONAL/edinmaster/ED';
const aboutPath = path.join(targetDir, 'page-about.html');
const indexPath = path.join(targetDir, 'index.html');
const cvPath = path.join(targetDir, 'page-our-core-values.html');

let aboutHtml = fs.readFileSync(aboutPath, 'utf8');
let indexHtml = fs.readFileSync(indexPath, 'utf8');
let cvHtml = fs.readFileSync(cvPath, 'utf8');

// 1. Get new Services Section from index.html
const indexServicesStart = indexHtml.indexOf('<section class="services-section-two">');
const indexServicesEnd = indexHtml.indexOf('<!-- End Services Section -->', indexServicesStart) + '<!-- End Services Section -->'.length;
const newServicesHtml = indexHtml.substring(indexServicesStart, indexServicesEnd);

// 2. Get Core Values Section from page-our-core-values.html
const cvStart = cvHtml.indexOf('    <!-- start about-section -->');
const cvEnd = cvHtml.indexOf('    <!-- end about-section -->', cvStart) + '    <!-- end about-section -->'.length;
let newCoreValuesHtml = cvHtml.substring(cvStart, cvEnd);
// Adjust the class to avoid extra top padding since it's right below another about-section
newCoreValuesHtml = newCoreValuesHtml.replace('<section class="about-section">', '<section class="about-section pt-0">');

// 3. Replace the old Services Section in page-about.html
const oldAboutServicesStart = aboutHtml.indexOf('    <!-- Services Section -->');
const oldAboutServicesEnd = aboutHtml.indexOf('    <!-- End Services Section -->', oldAboutServicesStart) + '    <!-- End Services Section -->'.length;

const replacementHtml = '\n' + newCoreValuesHtml + '\n\n    <!-- Services Section -->\n    ' + newServicesHtml + '\n';

aboutHtml = aboutHtml.substring(0, oldAboutServicesStart) + replacementHtml + aboutHtml.substring(oldAboutServicesEnd);

fs.writeFileSync(aboutPath, aboutHtml, 'utf8');
console.log("Updated page-about.html");
