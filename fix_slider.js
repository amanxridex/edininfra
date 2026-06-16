const fs = require('fs');

const htmlFile = 'c:/Users/91836/PERSONAL/edinmaster/ED/index.html';
let html = fs.readFileSync(htmlFile, 'utf8');

// The wrapper for the slides ends with </div> just before the arrow-box or end banner-section-h1
// Let's find slide 3 by finding exactly its content.
const parts = html.split('<div class="banner-block swiper-slide">');

if (parts.length >= 4) {
    // parts[0] is everything before slide 1
    // parts[1] is slide 1 content (without the starting tag)
    // parts[2] is slide 2 content
    // parts[3] is slide 3 content to the end of the file
    
    // We only want the slide 3 content. It ends where the next outer div closes, but it's simpler:
    // It's just the exact string from `<div class="bg bg-image"><img src="images/banner/banner1-3.jpg"` up to the next closing div structure.
    // Instead of doing that, let's just use a more careful regex.
}

// Safer regex that does NOT contain `<div class="banner-block swiper-slide">` inside the capture
const safeSlide3Regex = /<div class="banner-block swiper-slide">(?:(?!<div class="banner-block swiper-slide">)[\s\S])*?<img src="images\/banner\/banner1-3\.jpg"(?:(?!<div class="banner-block swiper-slide">)[\s\S])*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/;

const match = html.match(safeSlide3Regex);
if (match) {
    let slide3Text = match[0];
    let slide4Text = slide3Text.replace('banner1-3.jpg', 'banner1-4.jpg');
    let slide5Text = slide3Text.replace('banner1-3.jpg', 'banner1-5.jpg');

    html = html.replace(slide3Text, slide3Text + '\n' + slide4Text + '\n' + slide5Text);
    
    // Also update slide 1 from banner1-1.jpg to banner1-1.webp
    html = html.replace('images/banner/banner1-1.jpg', 'images/banner/banner1-1.webp');

    fs.writeFileSync(htmlFile, html, 'utf8');
    console.log('Fixed slider and added slides 4 and 5 correctly.');
} else {
    console.log('Could not match slide 3 safely.');
}
