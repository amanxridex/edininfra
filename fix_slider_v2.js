const fs = require('fs');

const htmlFile = 'c:/Users/91836/PERSONAL/edinmaster/ED/index.html';
let html = fs.readFileSync(htmlFile, 'utf8');

// The banner slides are inside:
// <div class="swiper-container banner-h1-slider pb-0">
//   <div class="swiper-wrapper">
//     <div class="banner-block swiper-slide">...</div>
//     <div class="banner-block swiper-slide">...</div>
//     <div class="banner-block swiper-slide">...</div>
//   </div>
// </div>

const startMarker = '<div class="banner-block swiper-slide">';
const parts = html.split(startMarker);

if (parts.length >= 4) {
    let slide1 = startMarker + parts[1];
    let slide2 = startMarker + parts[2];
    
    // parts[3] has slide 3 AND the rest of the file.
    // The slide 3 ends right before `          </div>` which closes the `swiper-wrapper`.
    // Let's split parts[3] using `</div>\n          </div>\n          <div class="arrow-box">` ? Wait.
    // Let's just find the 5 closing divs from the image.
    // In index.html, it's:
    // <div class="image"><img src="images/resource/banner1-1.png" alt=""></div>
    // </div>
    // </div>
    // </div>
    // </div>
    
    // Safer regex for slide 3 alone:
    const safeSlide3Regex = /<div class="banner-block swiper-slide">(?:(?!<div class="banner-block swiper-slide">)[\s\S])*?<img src="images\/banner\/banner1-3\.jpg"(?:(?!<div class="banner-block swiper-slide">)[\s\S])*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/;
    
    const match = html.match(safeSlide3Regex);
    if (match) {
        let slide3Text = match[0];
        let slide4Text = slide3Text.replace('banner1-3.jpg', 'banner1-4.jpg');
        let slide5Text = slide3Text.replace('banner1-3.jpg', 'banner1-5.jpg');

        html = html.replace(slide3Text, slide3Text + '\n' + slide4Text + '\n' + slide5Text);
        html = html.replace('images/banner/banner1-1.jpg', 'images/banner/banner1-1.webp');

        fs.writeFileSync(htmlFile, html, 'utf8');
        console.log('Fixed slider and added slides 4 and 5 correctly.');
    } else {
        console.log('Could not match slide 3 safely.');
    }
}
