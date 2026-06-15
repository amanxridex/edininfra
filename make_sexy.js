const fs = require('fs');
const path = require('path');

const targetDir = 'c:/Users/91836/PERSONAL/edinmaster/ED';

// Read index template to extract cool sections
let indexHtml = fs.readFileSync(path.join(targetDir, 'index.html'), 'utf8');

// Extract Fun Fact section
const funFactMatch = indexHtml.match(/<section class="fun-fact-section[\s\S]*?<\/section>/);
let funFactSection = funFactMatch ? funFactMatch[0] : '';
if (funFactSection) {
    funFactSection = funFactSection.replace('800', '350').replace('Projects Completed', 'Average ROI (%)');
    funFactSection = funFactSection.replace('200', '15').replace('Active Experts', 'High-Yield Projects');
    funFactSection = funFactSection.replace('200', '5000').replace('Happy Clients', 'Acres Secured');
    funFactSection = funFactSection.replace('20', '0').replace('Win Awards', 'Corporate Risk');
}

// Extract Video Section for a sexy wide image/video banner
const videoMatch = indexHtml.match(/<section class="video-section[\s\S]*?<\/section>/);
let videoSection = videoMatch ? videoMatch[0] : '';
if (videoSection) {
    videoSection = videoSection.replace('We Build Building', 'Tangible Asset Backing');
    videoSection = videoSection.replace('And Transforming Dreams', 'Massive Capital Growth');
}

// Read current investors page to reconstruct
let investorsHtml = fs.readFileSync(path.join(targetDir, 'page-investors.html'), 'utf8');

// Find the about section and replace everything after it (until footer) with the new cool sections
const newBody = `
    <!-- About Section -->
    <section class="about-section pt-100 pb-100">
      <div class="auto-container">
        <div class="row">
          <div class="image-column col-xl-5 col-md-7">
            <div class="inner-column">
              <div class="images-box one">
                <div class="image"><img src="images/resource/about1-1.jpg" alt="" style="border-radius:10px; box-shadow:0 20px 40px rgba(0,0,0,0.2);"></div>
              </div>
            </div>
          </div>
          <div class="content-column col-xl-7">
            <div class="inner-column">
              <div class="sec-title">
                 <div class="h6 sub-title" style="color:var(--theme-color1); letter-spacing:3px;">HIGH-YIELD RETURNS</div>
                 <div class="h2 title" style="font-size: 50px; line-height:1.1; margin-bottom:20px;">Invest in Premium Land.</div>
                <div class="text" style="font-size: 18px; line-height:1.8; color:#555;">We offer exclusive opportunities to invest directly in premium, highly-vetted land parcels. You are not investing in our company, but rather in hard, tangible assets that appreciate rapidly. Our expert team identifies high-growth corridors before the market catches on, allowing our investors to secure unmatched returns.</div>
              </div>
              <div class="row mt-5">
                  <div class="col-md-6 mb-4">
                      <div style="background:#fff; padding:30px; border-radius:10px; box-shadow:0 10px 30px rgba(0,0,0,0.05); border-bottom:3px solid var(--theme-color1);">
                          <h4 style="font-weight:700; margin-bottom:15px;">Direct Ownership</h4>
                          <p>Acquire prime real estate with massive ROI potential through strategic development and zoning.</p>
                      </div>
                  </div>
                  <div class="col-md-6 mb-4">
                      <div style="background:#fff; padding:30px; border-radius:10px; box-shadow:0 10px 30px rgba(0,0,0,0.05); border-bottom:3px solid var(--theme-color1);">
                          <h4 style="font-weight:700; margin-bottom:15px;">Zero Equity Risk</h4>
                          <p>Your investment is backed by tangible, appreciating assets, ensuring maximum security and profit.</p>
                      </div>
                  </div>
              </div>
              <div class="bottom-box mt-4">
                <a class="theme-btn btn-style-one" href="page-contact.html" style="padding:15px 40px; font-size:16px; font-weight:700;"><span class="btn-title">Become an Investor Today</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    ${funFactSection}
    ${videoSection}
`;

// Replace the existing about-section with the newly constructed sexy body
investorsHtml = investorsHtml.replace(/<section class="about-section">[\s\S]*?<\/section>/, newBody);

fs.writeFileSync(path.join(targetDir, 'page-investors.html'), investorsHtml, 'utf8');
console.log('Made Investors page sexy.');
