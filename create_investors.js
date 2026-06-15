const fs = require('fs');
const path = require('path');

const targetDir = 'c:/Users/91836/PERSONAL/edinmaster/ED';

// 1. Create page-investors.html from page-about.html
let investorsHtml = fs.readFileSync(path.join(targetDir, 'page-about.html'), 'utf8');

// Update Title and Header
investorsHtml = investorsHtml.replace(/<title>.*?<\/title>/gi, '<title>ED Infratech | Investors</title>');
investorsHtml = investorsHtml.replace(/<h1 class="page-title">.*?<\/h1>/gi, '<h1 class="page-title">Investors</h1>');
investorsHtml = investorsHtml.replace(/<li class="active">.*?<\/li>/gi, '<li class="active">Investors</li>');

// Replace Content
const newContent = `<div class="sec-title">
                 <div class="h6 sub-title">High-Yield Returns</div>
                 <div class="h2 title char-animation">Invest in Premium Land.</div>
                <div class="text">We offer exclusive opportunities to invest directly in premium, highly-vetted land parcels. You are not investing in our company, but rather in hard, tangible assets that appreciate rapidly. Our expert team identifies high-growth corridors before the market catches on, allowing our investors to secure unmatched returns.</div>
              </div>
              <div class="about-block">
                <div class="inner-block">
                  <div class="icon">
                    <i class="flaticon-set-pencil-and-ruler"></i>
                  </div>
                  <div class="content">
                     <div class="h5 title">Direct Land Ownership</div>
                    <div class="text">Acquire prime real estate with massive ROI potential through strategic development and zoning.</div>
                  </div>
                </div>
              </div>
              <div class="about-block">
                <div class="inner-block">
                  <div class="icon">
                    <i class="flaticon-set-architect"></i>
                  </div>
                  <div class="content">
                     <div class="h5 title">Zero Corporate Equity Risk</div>
                    <div class="text">Your investment is backed by tangible, appreciating assets, ensuring maximum security and profit.</div>
                  </div>
                </div>
              </div>
              <div class="bottom-box">
                <a class="theme-btn btn-style-two" href="page-contact.html"><span class="btn-title">Become an Investor</span></a>
              </div>`;

investorsHtml = investorsHtml.replace(/<div class="sec-title">[\s\S]*?<div class="bottom-box">\s*<a class="theme-btn btn-style-two" href="page-about.html">[\s\S]*?<\/a>\s*<\/div>/, newContent);

fs.writeFileSync(path.join(targetDir, 'page-investors.html'), investorsHtml, 'utf8');
console.log('Created page-investors.html');

// 2. Update Menu globally
const files = fs.readdirSync(targetDir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    const filePath = path.join(targetDir, file);
    let html = fs.readFileSync(filePath, 'utf8');
    
    // Add Investors link to menu if it doesn't exist
    if (!html.includes('<a href="page-investors.html">Investors</a>') && html.includes('news-grid.html">News Updates</a></li>')) {
        html = html.replace(/<li><a href="news-grid.html">News Updates<\/a><\/li>\s*<\/ul>/g, `<li><a href="news-grid.html">News Updates</a></li>\n                  <li><a href="page-investors.html">Investors</a></li>\n                </ul>`);
        fs.writeFileSync(filePath, html, 'utf8');
        console.log('Updated menu in ' + file);
    }
});
