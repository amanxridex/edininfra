const fs = require('fs');

const filePath = 'c:/Users/91836/PERSONAL/edinmaster/ED/index.html';
let content = fs.readFileSync(filePath, 'utf8');

const newProjectBlock = `
          <div class="project-block">
            <div class="inner-block">
              <div class="content-box">
                <div class="inner-box">
                  <div class="sub-title">Plots</div>
                   <div class="h3 title">Nihal Singh Enclave</div>
                  <a class="theme-btn btn-style-one" href="nihal-singh-enclave-rabupura-sector-20-yamuna-authority.html">
                    <span class="icon">
                      <i class="fa-solid fa-arrow-right"></i>
                      <i class="fa-solid fa-arrow-right"></i>
                    </span>
                    <span class="btn-title">View More Details</span>
                  </a>
                </div>
              </div>
              <div class="image"><img src="images/resource/VIHAAN.png" alt="Nihal Singh Enclave" style="height: 100%; object-fit: cover;"></div>
            </div>
          </div>`;

if (!content.includes('Nihal Singh Enclave')) {
    content = content.replace(
        '<div class="project-h1_inner-container">',
        `<div class="project-h1_inner-container">${newProjectBlock}`
    );
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('Project added to index.html');
