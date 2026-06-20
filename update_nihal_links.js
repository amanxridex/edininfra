const fs = require('fs');

const filePath = 'c:/Users/91836/PERSONAL/edinmaster/ED/nihal-singh-enclave-rabupura-sector-20-yamuna-authority.html';
let content = fs.readFileSync(filePath, 'utf8');

// 1. Update brochure link
content = content.replace(
    'href="vihaan-brochure.jpeg"',
    'href="nihalsinghbrochure.jpeg"'
);

// 2. Update Video Modal title and video source
content = content.replace(
    '<h5 class="modal-title" id="videoModalLabel" style="color: #fff; font-size: 24px; font-weight: 700; text-shadow: 0 2px 4px rgba(0,0,0,0.8);">Vihaan Enclave</h5>',
    '<h5 class="modal-title" id="videoModalLabel" style="color: #fff; font-size: 24px; font-weight: 700; text-shadow: 0 2px 4px rgba(0,0,0,0.8);">Nihal Singh Enclave</h5>'
);
content = content.replace(
    '<source src="images/resource/VIHAAN.mp4" type="video/mp4">',
    '<source src="nihal-video.mp4" type="video/mp4">'
);

// 3. Update Sitemap Link
content = content.replace(
    'href="Vihaan_Enclave_Rough_Layout.pdf"',
    'href="nihal-singh-enclave-sitemap.pdf"'
);

// 4. Update Location Link
content = content.replace(
    'https://www.google.com/maps/place/27%C2%B058\'50.2%22N+77%C2%B052\'59.0%22E/@27.9806194,77.8804894,769m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d27.9806194!4d77.8830643?hl=en&entry=ttu&g_ep=EgoyMDI2MDYxNi4wIKXMDSoASAFQAw%3D%3D',
    'https://www.google.com/maps/place/28%C2%B015\'52.8%22N+77%C2%B036\'07.7%22E/@28.2646562,77.5995731,767m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d28.2646562!4d77.602148?hl=en&entry=ttu&g_ep=EgoyMDI2MDYxNi4wIKXMDSoASAFQAw%3D%3D'
);

// 5. Add Masterplan Button & CSS
const locationBtnHtml = `<a href="https://www.google.com/maps/place/28%C2%B015'52.8%22N+77%C2%B036'07.7%22E/@28.2646562,77.5995731,767m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d28.2646562!4d77.602148?hl=en&entry=ttu&g_ep=EgoyMDI2MDYxNi4wIKXMDSoASAFQAw%3D%3D" target="_blank" class="glowing-location-btn" style="text-decoration: none;">
									<i class="fa fa-map-marker-alt"></i> View Site Location
								</a>`;

const masterPlanBtnHtml = `
								<a href="master-plan-2041.pdf" target="_blank" class="glowing-masterplan-btn" style="text-decoration: none;">
									<i class="fa fa-file-pdf"></i> View Master Plan
								</a>`;

content = content.replace(
    locationBtnHtml,
    locationBtnHtml + masterPlanBtnHtml
);

// Update CSS for the new button
content = content.replace(
    '.glowing-video-btn, .glowing-sitemap-btn, .glowing-location-btn {',
    '.glowing-video-btn, .glowing-sitemap-btn, .glowing-location-btn, .glowing-masterplan-btn {'
);
content = content.replace(
    '.glowing-location-btn { margin-bottom: 25px; } /* Last button gets more bottom margin */',
    '.glowing-location-btn { margin-bottom: 15px; }\n\t\t\t\t\t\t\t\t.glowing-masterplan-btn { margin-bottom: 25px; } /* Last button gets more bottom margin */'
);
content = content.replace(
    '.glowing-video-btn:hover, .glowing-sitemap-btn:hover, .glowing-location-btn:hover { transform: scale(1.03); color: #fff; }',
    '.glowing-video-btn:hover, .glowing-sitemap-btn:hover, .glowing-location-btn:hover, .glowing-masterplan-btn:hover { transform: scale(1.03); color: #fff; }'
);
content = content.replace(
    '.glowing-video-btn i, .glowing-sitemap-btn i, .glowing-location-btn i { font-size: 22px; margin-right: 10px; }',
    '.glowing-video-btn i, .glowing-sitemap-btn i, .glowing-location-btn i, .glowing-masterplan-btn i { font-size: 22px; margin-right: 10px; }'
);

const masterPlanCss = `
								/* Masterplan (Amethyst Purple) */
								.glowing-masterplan-btn {
									background-image: linear-gradient(90deg, #8b5cf6, #c4b5fd, #8b5cf6);
									animation: glowGradientMasterplan 3s infinite linear, glowPulseMasterplan 2s infinite alternate;
									box-shadow: 0 0 15px rgba(139, 92, 246, 0.6);
								}
								@keyframes glowGradientMasterplan { 0% { background-position: 0% center; } 100% { background-position: 200% center; } }
								@keyframes glowPulseMasterplan { 0% { box-shadow: 0 0 10px rgba(139, 92, 246, 0.4); } 100% { box-shadow: 0 0 25px rgba(139, 92, 246, 0.8); } }
								</style>`;

content = content.replace(
    '</style>',
    masterPlanCss
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Links and buttons updated.');
