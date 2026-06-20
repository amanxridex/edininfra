const fs = require('fs');
const path = require('path');

const targetDir = 'c:/Users/91836/PERSONAL/edinmaster/ED';
const filePath = path.join(targetDir, 'index.html');
let html = fs.readFileSync(filePath, 'utf8');

const newPartners = [
    { src: 'GODREJ.jpeg', alt: 'Godrej' },
    { src: 'LODHA.png', alt: 'Lodha' },
    { src: 'MAX.png', alt: 'Max' },
    { src: 'SG.jpg', alt: 'SG' },
    { src: 'PRESTTIGE.jpg', alt: 'Prestige' }
];

const imgStyle = "width: 250px; height: 140px; object-fit: contain; background: transparent; padding: 10px;";

let partnersHtml = '';
newPartners.forEach(p => {
    partnersHtml += `\n                <div class="client-block swiper-slide">\n                  <div class="inner-block">\n                    <div class="image"><img src="${p.src}" style="${imgStyle}" alt="${p.alt}"></div>\n                  </div>\n                </div>`;
});

const regex = /(<div class="swiper-container client-h2-slider pb-0">\s*<div class="swiper-wrapper">)([\s\S]*?)(<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/section>)/;

html = html.replace(regex, (match, p1, p2, p3) => {
    // Also remove the old Godrej URL to avoid duplicates if desired, but we will just append for now
    let newP2 = p2.replace(/<div class="client-block swiper-slide">\s*<div class="inner-block">\s*<div class="image"><img src="https:\/\/yt3\.googleusercontent\.com.*?alt="Godrej"><\/div>\s*<\/div>\s*<\/div>/g, '');
    return p1 + newP2 + partnersHtml + '\n              ' + p3;
});

fs.writeFileSync(filePath, html, 'utf8');

const scriptPath = path.join(targetDir, 'js/script.js');
let script = fs.readFileSync(scriptPath, 'utf8');

const scriptRegex = /var swiper = new Swiper\("\.client-h2-slider", {[\s\S]*?}\);/;
script = script.replace(scriptRegex, `var swiper = new Swiper(".client-h2-slider", {
			speed: 3000,
			autoplay: {
				delay: 0,
				disableOnInteraction: false,
			},
			loop: true,
			slidesPerView: 1,
			spaceBetween: 30,
			breakpoints: {
				420: { slidesPerView: 2 },
				576: { slidesPerView: 3 },
				768: { slidesPerView: 4 },
				1200: { slidesPerView: 5 },
			}
		});`);

fs.writeFileSync(scriptPath, script, 'utf8');

const cssPath = path.join(targetDir, 'css/style.css');
let css = fs.readFileSync(cssPath, 'utf8');
if(!css.includes('.client-h2-slider .swiper-wrapper {')) {
    css += '\n.client-h2-slider .swiper-wrapper {\n  transition-timing-function: linear !important;\n}\n';
    fs.writeFileSync(cssPath, css, 'utf8');
}

console.log('Added images and configured infinite marquee!');
