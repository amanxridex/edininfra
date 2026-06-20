const fs = require('fs');
const path = require('path');

const projectFile = 'c:/Users/91836/PERSONAL/edinmaster/ED/page-projects.html';
const vihaanFile = 'c:/Users/91836/PERSONAL/edinmaster/ED/vihaan-enclave-khair-somna-road.html';

if (fs.existsSync(projectFile)) {
    let content = fs.readFileSync(projectFile, 'utf8');
    // The Vihaan card uses images/resource/VIHAAN.png twice
    content = content.replace(/<img src="images\/resource\/VIHAAN\.png" alt="Vihaan Enclave"/g, '<img src="VIHAANPRI.png" alt="Vihaan Enclave"');
    fs.writeFileSync(projectFile, content, 'utf8');
    console.log("Updated Vihaan primary image in page-projects.html");
}

if (fs.existsSync(vihaanFile)) {
    let content = fs.readFileSync(vihaanFile, 'utf8');
    // Replace the first slide of the Vihaan Enclave hero slider with VIHAANPRI.png
    content = content.replace(
        '<img src="images/resource/VIHAAN.png" alt="Vihaan Enclave Banner"',
        '<img src="VIHAANPRI.png" alt="Vihaan Enclave Banner"'
    );
    // Also if there are any other places using images/resource/VIHAAN.png for the primary image
    content = content.replace(/<img src="images\/resource\/VIHAAN\.png"/g, '<img src="VIHAANPRI.png"');
    fs.writeFileSync(vihaanFile, content, 'utf8');
    console.log("Updated Vihaan primary image in vihaan-enclave-khair-somna-road.html");
}
