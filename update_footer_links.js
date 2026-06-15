const fs = require('fs');
const path = require('path');

const targetDir = 'c:/Users/91836/PERSONAL/edinmaster/ED';
const files = fs.readdirSync(targetDir).filter(f => f.endsWith('.html'));

const mappings = {
    '<li><a href="#">About Us</a></li>': '<li><a href="page-about.html">About Us</a></li>',
    '<li><a href="#">Our Team</a></li>': '<li><a href="page-team.html">Our Team</a></li>',
    '<li><a href="#">Our Portfolio</a></li>': '<li><a href="page-projects.html">Our Portfolio</a></li>',
    '<li><a href="#">Careers</a></li>': '<li><a href="page-careers.html">Careers</a></li>',
    '<li><a href="#">Contact Us</a></li>': '<li><a href="page-contact.html">Contact Us</a></li>',
    '<li><a href="#">Gated Community Noida</a></li>': '<li><a href="page-gated-community.html">Gated Community Noida</a></li>',
    '<li><a href="#">Construction Management</a></li>': '<li><a href="page-construction-management.html">Construction Management</a></li>',
    '<li><a href="#">Investment &amp; Capital</a></li>': '<li><a href="page-investment-capital.html">Investment &amp; Capital</a></li>',
    '<li><a href="#">Architecture &amp; Design</a></li>': '<li><a href="page-architecture-design.html">Architecture &amp; Design</a></li>',
    '<li><a href="#">Projects Management</a></li>': '<li><a href="page-projects-management.html">Projects Management</a></li>',
    '<li><a href="#0">Privacy Policy</a></li>': '<li><a href="page-privacy-policy.html">Privacy Policy</a></li>',
    '<li><a href="#0">Term of Service</a></li>': '<li><a href="page-terms-of-service.html">Term of Service</a></li>'
};

const missingPagesToCreate = [
    { name: 'page-careers.html', template: 'page-about.html', title: 'Careers' },
    { name: 'page-gated-community.html', template: 'page-project-details.html', title: 'Gated Community Noida' },
    { name: 'page-construction-management.html', template: 'page-service-details.html', title: 'Construction Management' },
    { name: 'page-investment-capital.html', template: 'page-service-details.html', title: 'Investment & Capital' },
    { name: 'page-architecture-design.html', template: 'page-service-details.html', title: 'Architecture & Design' },
    { name: 'page-projects-management.html', template: 'page-service-details.html', title: 'Projects Management' },
    { name: 'page-privacy-policy.html', template: 'page-faq.html', title: 'Privacy Policy' },
    { name: 'page-terms-of-service.html', template: 'page-faq.html', title: 'Terms of Service' }
];

// Create missing pages
missingPagesToCreate.forEach(page => {
    const templatePath = path.join(targetDir, page.template);
    const newPagePath = path.join(targetDir, page.name);
    
    if (fs.existsSync(templatePath)) {
        let content = fs.readFileSync(templatePath, 'utf8');
        // Replace page title in breadcrumbs/header
        content = content.replace(/<title>.*?<\/title>/gi, `<title>${page.title} | ED Infratech</title>`);
        content = content.replace(/<h1 class="page-title">.*?<\/h1>/gi, `<h1 class="page-title">${page.title}</h1>`);
        content = content.replace(/<li class="active">.*?<\/li>/gi, `<li class="active">${page.title}</li>`);
        
        fs.writeFileSync(newPagePath, content, 'utf8');
        console.log(`Created ${page.name} from ${page.template}`);
    }
});

// Refresh file list to include new files
const allFiles = fs.readdirSync(targetDir).filter(f => f.endsWith('.html'));

// Update footer links globally
allFiles.forEach(file => {
    const filePath = path.join(targetDir, file);
    let html = fs.readFileSync(filePath, 'utf8');
    let updated = false;

    for (const [oldTag, newTag] of Object.entries(mappings)) {
        if (html.includes(oldTag)) {
            html = html.split(oldTag).join(newTag);
            updated = true;
        }
    }

    if (updated) {
        fs.writeFileSync(filePath, html, 'utf8');
        console.log(`Updated footer links in ${file}`);
    }
});
