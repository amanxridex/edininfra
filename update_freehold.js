const fs = require('fs');

const nihalFile = 'c:/Users/91836/PERSONAL/edinmaster/ED/nihal-singh-enclave-rabupura-sector-20-yamuna-authority.html';
const projectsFile = 'c:/Users/91836/PERSONAL/edinmaster/ED/page-projects.html';

let nihalContent = fs.readFileSync(nihalFile, 'utf8');
nihalContent = nihalContent.replace(
    '<div class="h5 project-details__name" style="color: #fff; font-size: 18px; font-weight: 600;">Residential & Investment Plots</div>',
    '<div class="h5 project-details__name" style="color: #fff; font-size: 18px; font-weight: 600;">Freehold Plots</div>'
);
fs.writeFileSync(nihalFile, nihalContent, 'utf8');

let projectsContent = fs.readFileSync(projectsFile, 'utf8');
projectsContent = projectsContent.replace(
    '<div class="tag">Premium Plots</div>',
    '<div class="tag">Freehold Plots</div>'
);
fs.writeFileSync(projectsFile, projectsContent, 'utf8');

console.log("Updated to Freehold Plots");
