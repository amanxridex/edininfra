const fs = require('fs');

const filePath = 'c:/Users/91836/PERSONAL/edinmaster/ED/page-projects.html';
let content = fs.readFileSync(filePath, 'utf8');

// Ensure 'jewar' or 'rabupura' is in the city dropdown
if (!content.includes('value="rabupura"')) {
    content = content.replace(
        '<option value="noida">Noida</option>',
        '<option value="noida">Noida</option>\n                <option value="rabupura">Rabupura Sector 20</option>'
    );
}

// Create new project card for Nihal Singh Enclave
const newProjectCard = `
          <div class="col-md-6 project-item" data-type="plots" data-city="rabupura">
            <div class="project-box1 wow fadeInUp" data-wow-delay=".05s">
              <div class="inner-box">
                <div class="thumb">
                  <a href="nihal-singh-enclave-rabupura-sector-20-yamuna-authority.html" style="display: block;">
                    <img src="images/resource/VIHAAN.png" alt="Nihal Singh Enclave" style="height: 350px; object-fit: cover;">
                    <img src="images/resource/VIHAAN.png" alt="Nihal Singh Enclave" style="height: 350px; object-fit: cover;">
                  </a>
                  <a href="nihal-singh-enclave-rabupura-sector-20-yamuna-authority.html" class="arrow-icon"><i class="fa-solid fa-arrow-right"></i></a>
                  <div class="tag">Premium Plots</div>
                </div>
                <div class="content">
                  <div class="catogory-box"><a href="nihal-singh-enclave-rabupura-sector-20-yamuna-authority.html">Rabupura, Sector 20</a></div>
                   <div class="h4 title"><a href="nihal-singh-enclave-rabupura-sector-20-yamuna-authority.html">Nihal Singh Enclave</a></div>
                </div>
              </div>
            </div>
          </div>
`;

// Inject before the Vihaan Enclave card or right after <div class="row gx-3">
if (!content.includes('Nihal Singh Enclave')) {
    content = content.replace(
        '<div class="row gx-3">',
        `<div class="row gx-3">${newProjectCard}`
    );
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('Project added to portfolio.');
