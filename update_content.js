const fs = require('fs');
const path = require('path');

const directoryPath = __dirname;

const filesToUpdate = [
    'index.html',
    'index-2.html',
    'index-3.html',
    'index-4.html',
    'page-about.html',
    'page-team.html',
    'page-team-details.html',
    'page-services.html',
    'page-contact.html',
    'page-pricing.html',
    'page-testimonial.html',
    'page-faq.html',
    'page-project-details.html',
    'page-projects.html'
];

const replacements = [
    // General contact details
    { regex: /1901 Thornridge Cir\. Shiloh, Hawaii 81063/g, replace: 'Delhi NCR, India' },
    { regex: /017-50050088/g, replace: '+91 98765 43210' },
    { regex: /\+01 7500 500 88/g, replace: '+91 98765 43210' },
    { regex: /needhelp@company.com/gi, replace: 'info@edinframtech.com' },
    
    // Cloudflare protected email text replacement (just replacing the mailto link or wrapper if possible, or the text inside)
    { regex: /Mon - Fri: 09\.00am - 10\.00 pm/g, replace: 'Mon - Sat: 09.00am - 07.00 pm' },
    
    // Banners & Vision/Mission
    { regex: /Crafting A Brighter Future With Excellence/g, replace: 'Building Your Future, Brick by Brick' },
    { regex: /We create iconic real estate developments that provide enduring value to investors and communities./g, replace: 'ED InfraTech brings you RERA-approved, loan-approved real estate projects across Delhi NCR, Dubai and beyond.' },
    { regex: /The Foremost Privately Held Firm In Global Real Estate Investment And Management./gi, replace: 'Where Vision Meets Reality.' },
    { regex: /Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur ligula, eget egestas magna mi ut arcu\. Phasellus nec odio orci\. The foremost privately held firm in global real estate investment and management\./gi, replace: 'At ED InfraTech, we believe real estate is more than a portfolio of square footage — it\'s the backdrop of your life\'s most important moments and the foundation of your financial legacy.' },
    { regex: /"We design impactful built environments in fields ranging from energy and healthcare to entertainment and data centers, striving to elevate your project beyond expectations\./g, replace: '"Our mission is to consistently deliver exceptional value to our clients through unwavering commitment to quality, sustainable innovation, and transparent business practices.' },

    // Services
    { regex: /Smart Home <br>System/g, replace: 'RERA <br>Approved' },
    { regex: /Solar Energy <br>Panels/g, replace: 'Loan <br>Assistance' },
    { regex: /Central Air <br>Conditioning/g, replace: 'Legal <br>Verification' },
    { regex: /Investment <br>Consulting/g, replace: 'International <br>Projects' },
    { regex: /Reasonable <br>Price/g, replace: 'Agricultural <br>Lands' },
    
    // Projects
    { regex: /Apartment Building/g, replace: 'Gated Community Noida' },
    { regex: /Eden Estate/g, replace: 'Grade-A Office Delhi' },
    { regex: /Vista at Councill Square/g, replace: 'Premium Apartments Dubai' },
    { regex: /Development/g, replace: 'Residential' },
    { regex: /Ux\/UI design/gi, replace: 'Commercial' },
    { regex: /Mobile solution/gi, replace: 'International' },

    // Team / Founder (page-team and about)
    { regex: /Devon Lane/g, replace: 'Rahul' },
    { regex: /President of Sales/g, replace: 'Founder & Managing Director' },
    { regex: /team1-1\.png/g, replace: 'rahul.jpeg' },
    { regex: /team1-2\.png/g, replace: 'yuvraj.jpeg' },
    { regex: /team1-3\.png/g, replace: 'divyansh.jpeg' },
];

filesToUpdate.forEach(file => {
    const filePath = path.join(directoryPath, file);
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;
        replacements.forEach(r => {
            if (content.match(r.regex)) {
                content = content.replace(r.regex, r.replace);
                modified = true;
            }
        });
        if (modified) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Updated ${file}`);
        }
    }
});
