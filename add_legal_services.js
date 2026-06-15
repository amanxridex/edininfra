const fs = require('fs');
const path = require('path');

const targetDir = 'c:/Users/91836/PERSONAL/edinmaster/ED';
const files = fs.readdirSync(targetDir).filter(f => f.endsWith('.html'));

const block06 = `
            <div class="service-block-two swiper-slide">
              <div class="inner-block">
                <div class="content">
                  <div class="icon-box">
                    <div class="icon"><i class="flaticon-set-blueprint"></i></div>
                    <div class="count">06</div>
                  </div>
                  <div class="h4 title"><a href="page-service-details.html">Legal Services</a></div>
                  <div class="text">Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur</div>
                </div>
                <div class="images-box">
                  <a class="btn-icon-style" href="page-service-details.html"><i class="fa-solid fa-arrow-right"></i></a>
                  <div class="image"><img src="images/resource/service2-5.jpg" alt=""></div>
                </div>
              </div>
            </div>`;

files.forEach(file => {
    const filePath = path.join(targetDir, file);
    let html = fs.readFileSync(filePath, 'utf8');

    // This regex looks for the block containing "05" and "Property Rentals" ending with </div>\s*</div>\s*</div>
    // It captures it, and we append the 06 block after it.
    const regex = /(<div class="service-block-two swiper-slide">[\s\S]*?<div class="count">05<\/div>[\s\S]*?Property Rentals[\s\S]*?<\/div>\s*<\/div>\s*<\/div>)/g;

    if (regex.test(html)) {
        html = html.replace(regex, '$1' + block06);
        fs.writeFileSync(filePath, html, 'utf8');
        console.log('Added 06 Legal Services in ' + file);
    }
});
