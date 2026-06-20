const fs = require('fs');
const path = require('path');

const targetDir = 'c:/Users/91836/PERSONAL/edinmaster/ED';
const aboutPath = path.join(targetDir, 'page-about.html');
const indexPath = path.join(targetDir, 'index.html');
const coreValuesPath = path.join(targetDir, 'page-our-core-values.html');

let aboutHtml = fs.readFileSync(aboutPath, 'utf8');
let indexHtml = fs.readFileSync(indexPath, 'utf8');
let coreValuesHtml = fs.readFileSync(coreValuesPath, 'utf8');

// 1. Extract Services from index.html
const servicesStart = indexHtml.indexOf('<section class="services-section-two">');
const servicesEndMarker = '    <!-- end service section -->';
let servicesEnd = indexHtml.indexOf(servicesEndMarker, servicesStart);

// Wait, looking at my view_file for index.html, the services section started around line 555. 
// Let's use string markers instead if I can find them.
const idxServicesStartMarker = '    <!-- start service section -->';
const idxServicesEndMarker = '    <!-- end service section -->';
let sStart = indexHtml.indexOf(idxServicesStartMarker);
let sEnd = indexHtml.indexOf(idxServicesEndMarker) + idxServicesEndMarker.length;
let newServicesHtml = indexHtml.substring(sStart, sEnd);

// 2. Extract Core Values from page-our-core-values.html
const cvStartMarker = '    <!-- start about-section -->';
const cvEndMarker = '    <!-- end about-section -->';
let cvStart = coreValuesHtml.indexOf(cvStartMarker);
let cvEnd = coreValuesHtml.indexOf(cvEndMarker) + cvEndMarker.length;
let newCoreValuesHtml = coreValuesHtml.substring(cvStart, cvEnd);
// Modify slightly so it's not identical in styling (e.g. padding top)
newCoreValuesHtml = newCoreValuesHtml.replace('class="about-section"', 'class="about-section pt-0"');

// 3. Replace Services in page-about.html
const abtServicesStartMarker = '    <!-- Services Section -->';
const abtServicesEndMarker = '    <!-- End Services Section -->';
let abtSStart = aboutHtml.indexOf(abtServicesStartMarker);
let abtSEnd = aboutHtml.indexOf(abtServicesEndMarker) + abtServicesEndMarker.length;

if (abtSStart !== -1 && abtSEnd !== -1) {
    aboutHtml = aboutHtml.substring(0, abtSStart) + newServicesHtml + aboutHtml.substring(abtSEnd);
} else {
    console.log("Could not find Services Section in page-about.html");
}

// 4. Insert Core Values BEFORE the new Services section in page-about.html
// We can just insert it right after "<!-- end about-section -->" which is just before the services.
const insertPos = aboutHtml.indexOf('    <!-- end about-section -->') + '    <!-- end about-section -->'.length;
if (insertPos !== -1) {
    aboutHtml = aboutHtml.substring(0, insertPos) + '\n\n' + newCoreValuesHtml + aboutHtml.substring(insertPos);
} else {
    console.log("Could not find about-section end in page-about.html");
}

fs.writeFileSync(aboutPath, aboutHtml, 'utf8');
console.log("Done");
