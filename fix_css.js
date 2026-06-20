const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'css', 'mobile-aggressive.css');
if (fs.existsSync(cssPath)) {
    let css = fs.readFileSync(cssPath, 'utf8');
    
    // Add aggressive background color fix to project-inquiry-bar
    if (!css.includes('.project-inquiry-bar { background-color: #0D3B66 !important;')) {
        css += `
/* Fix for transparent inquiry bar on some mobile webviews */
.project-inquiry-bar {
    background-color: #0D3B66 !important;
    background-image: linear-gradient(135deg, #0D3B66 0%, #082544 100%) !important;
}
.inquiry-form input {
    background-color: rgba(255,255,255,0.1) !important;
    border: 1px solid rgba(255,255,255,0.4) !important;
    color: #ffffff !important;
}
.inquiry-form input::placeholder {
    color: rgba(255,255,255,0.8) !important;
}
`;
        fs.writeFileSync(cssPath, css, 'utf8');
        console.log('Fixed mobile CSS for inquiry bar');
    }
}
