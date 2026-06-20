const fs = require('fs');

const filePath = 'c:/Users/91836/PERSONAL/edinmaster/ED/nihal-singh-enclave-rabupura-sector-20-yamuna-authority.html';
let content = fs.readFileSync(filePath, 'utf8');

// Update Meta Tags
content = content.replace(
    /<title>.*?<\/title>/,
    '<title>Nihal Singh Enclave | Premium Plots in Rabupura Sector 20 | Yamuna Authority</title>'
);
content = content.replace(
    /<meta name="description" content=".*?">/,
    '<meta name="description" content="Invest in Nihal Singh Enclave at Rabupura Sector 20, Yamuna Authority. Registry-ready plots with immediate possession, gated society, RCC roads, utilities, and excellent connectivity to Noida International Airport and Yamuna Expressway.">'
);
content = content.replace(
    /<meta name="keywords" content=".*?">/,
    '<meta name="keywords" content="Nihal Singh Enclave, Nihal Singh Enclave Rabupura, Plots in Rabupura Sector 20, Yamuna Authority Plots, YEIDA Plots for Sale, Residential Plots Near Noida Airport, Plots Near Yamuna Expressway, ED Infratech Projects, Investment Plots in Yamuna Authority, Registry Plots in YEIDA, Immediate Possession Plots, Rabupura Residential Plots, Land Investment Near Jewar Airport, Property Near Film City, Gated Society Plots, Real Estate Investment in YEIDA">'
);

// Update Main Heading
content = content.replace(
    />Vihaan Enclave – Premium Plots on Khair Somna Road</,
    '>Nihal Singh Enclave – Premium Plots in Rabupura Sector 20, Yamuna Authority<'
);

// Update Price
content = content.replace(
    /₹12,499 \/ Sq\. Gaj/,
    '₹31,999 / Sq. Gaj'
);
content = content.replace(
    /₹12,499/,
    '₹31,999'
);

// Update "Why Invest in Vihaan Enclave?" to "Project Highlights"
content = content.replace(
    /Why Invest in Vihaan Enclave\?/,
    'Project Highlights'
);

// Replace Paragraphs
const newMarketingCopy = `<p>Nihal Singh Enclave presents a rare opportunity to invest in one of the most promising locations near the Yamuna Authority region. Surrounded by major infrastructure developments, educational institutions, healthcare facilities, and the upcoming international airport ecosystem, this project is designed for investors looking for growth, security, and long-term returns.</p>
							<p class="mb-5">With registry-ready plots, immediate possession, modern infrastructure, and excellent connectivity, Nihal Singh Enclave stands as a compelling destination for residential construction and future investment appreciation.</p>`;
                            
// Find the paragraphs block in the original and replace
// Original has: <p>Vihaan Enclave by ED Infratech... </p> <p class="mb-5">Whether you are looking... </p>
content = content.replace(
    /<p>Vihaan Enclave by ED Infratech.*?<\/p>\s*<p class="mb-5">.*?<\/p>/s,
    newMarketingCopy
);


// Replace Feature Cards
// There are three cards: Commercial Potential, Secure Investment, Easy Payment Plan
const newFeatureCards = `<div class="col-md-6 mb-3">
									<div class="modern-feature-card" style="background: #fff; padding: 25px; border-radius: 15px; height: 100%; border-left: 4px solid #c8a032; box-shadow: 0 10px 30px rgba(0,0,0,0.05); transition: all 0.3s ease; position: relative; overflow: hidden;"><style>
.modern-feature-card:hover { transform: translateY(-8px); box-shadow: 0 15px 40px rgba(0,0,0,0.1) !important; }
.modern-feature-card::before { content: ''; position: absolute; top: 0; right: 0; width: 50px; height: 50px; background: radial-gradient(circle, rgba(200,160,50,0.2) 0%, transparent 70%); border-radius: 50%; transform: translate(30%, -30%); }
</style>
<h4 class="mb-3" style="color: #0D3B66; font-size: 18px; font-weight: 700;"><i class="fa fa-chart-line me-2" style="color: #c8a032;"></i> YEIDA Growth Corridor</h4>
										<p style="font-size: 14px; margin-bottom: 0;">The Yamuna Authority region is witnessing large-scale infrastructure investment, making it one of the most promising destinations for long-term capital appreciation.</p>
									</div>
								</div>
								<div class="col-md-6 mb-3">
									<div class="modern-feature-card" style="background: #fff; padding: 25px; border-radius: 15px; height: 100%; border-left: 4px solid #c8a032; box-shadow: 0 10px 30px rgba(0,0,0,0.05); transition: all 0.3s ease; position: relative; overflow: hidden;"><style>
.modern-feature-card:hover { transform: translateY(-8px); box-shadow: 0 15px 40px rgba(0,0,0,0.1) !important; }
.modern-feature-card::before { content: ''; position: absolute; top: 0; right: 0; width: 50px; height: 50px; background: radial-gradient(circle, rgba(200,160,50,0.2) 0%, transparent 70%); border-radius: 50%; transform: translate(30%, -30%); }
</style>
<h4 class="mb-3" style="color: #0D3B66; font-size: 18px; font-weight: 700;"><i class="fa fa-shield-alt me-2" style="color: #c8a032;"></i> Immediate Possession</h4>
										<p style="font-size: 14px; margin-bottom: 0;">Unlike many under-development projects, Nihal Singh Enclave offers immediate possession, allowing buyers to begin construction sooner.</p>
									</div>
								</div>
								<div class="col-md-6 mb-3">
									<div class="modern-feature-card" style="background: #fff; padding: 25px; border-radius: 15px; height: 100%; border-left: 4px solid #c8a032; box-shadow: 0 10px 30px rgba(0,0,0,0.05); transition: all 0.3s ease; position: relative; overflow: hidden;"><style>
.modern-feature-card:hover { transform: translateY(-8px); box-shadow: 0 15px 40px rgba(0,0,0,0.1) !important; }
.modern-feature-card::before { content: ''; position: absolute; top: 0; right: 0; width: 50px; height: 50px; background: radial-gradient(circle, rgba(200,160,50,0.2) 0%, transparent 70%); border-radius: 50%; transform: translate(30%, -30%); }
</style>
<h4 class="mb-3" style="color: #0D3B66; font-size: 18px; font-weight: 700;"><i class="fa fa-file-contract me-2" style="color: #c8a032;"></i> Registry & Mutation Ready</h4>
										<p style="font-size: 14px; margin-bottom: 0;">Registry and mutation availability provide additional confidence regarding ownership and legal documentation.</p>
									</div>
								</div>`;

content = content.replace(
    /<div class="row mb-5">.*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<h4 class="mb-4"/s,
    `<div class="row mb-5">${newFeatureCards}</div><h4 class="mb-4"`
);

// Replace "Location Advantages" with "Key Features"
content = content.replace(
    />Location Advantages</,
    '>Key Features<'
);

const newAmenitiesGrid = `<ul class="list-unstyled mb-5 modern-amenities-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
								<li class="modern-amenity-item" style="background: #f8f9fa; padding: 12px 18px; border-radius: 12px; font-weight: 600; color: #0D3B66; display: flex; align-items: center; transition: all 0.3s ease;"><i class="fa fa-check-circle me-2" style="color: #c8a032; font-size: 20px;"></i> Registry Available</li>
								<li class="modern-amenity-item" style="background: #f8f9fa; padding: 12px 18px; border-radius: 12px; font-weight: 600; color: #0D3B66; display: flex; align-items: center; transition: all 0.3s ease;"><i class="fa fa-check-circle me-2" style="color: #c8a032; font-size: 20px;"></i> Mutation Available</li>
								<li class="modern-amenity-item" style="background: #f8f9fa; padding: 12px 18px; border-radius: 12px; font-weight: 600; color: #0D3B66; display: flex; align-items: center; transition: all 0.3s ease;"><i class="fa fa-check-circle me-2" style="color: #c8a032; font-size: 20px;"></i> Immediate Possession</li>
								<li class="modern-amenity-item" style="background: #f8f9fa; padding: 12px 18px; border-radius: 12px; font-weight: 600; color: #0D3B66; display: flex; align-items: center; transition: all 0.3s ease;"><i class="fa fa-check-circle me-2" style="color: #c8a032; font-size: 20px;"></i> Construction Loan Facility</li>
								<li class="modern-amenity-item" style="background: #f8f9fa; padding: 12px 18px; border-radius: 12px; font-weight: 600; color: #0D3B66; display: flex; align-items: center; transition: all 0.3s ease;"><i class="fa fa-check-circle me-2" style="color: #c8a032; font-size: 20px;"></i> Gated Society</li>
                                <li class="modern-amenity-item" style="background: #f8f9fa; padding: 12px 18px; border-radius: 12px; font-weight: 600; color: #0D3B66; display: flex; align-items: center; transition: all 0.3s ease;"><i class="fa fa-check-circle me-2" style="color: #c8a032; font-size: 20px;"></i> RCC Wide Roads</li>
                                <li class="modern-amenity-item" style="background: #f8f9fa; padding: 12px 18px; border-radius: 12px; font-weight: 600; color: #0D3B66; display: flex; align-items: center; transition: all 0.3s ease;"><i class="fa fa-check-circle me-2" style="color: #c8a032; font-size: 20px;"></i> Water & Sewage Infrastructure</li>
                                <li class="modern-amenity-item" style="background: #f8f9fa; padding: 12px 18px; border-radius: 12px; font-weight: 600; color: #0D3B66; display: flex; align-items: center; transition: all 0.3s ease;"><i class="fa fa-check-circle me-2" style="color: #c8a032; font-size: 20px;"></i> 24x7 Electricity</li>
							</ul>`;
content = content.replace(
    /<ul class="list-unstyled mb-5 modern-amenities-grid".*?<\/ul>/s,
    newAmenitiesGrid
);

// Add Connectivity Table
const connectivityTable = `
<h4 class="mb-4" style="color: #0D3B66; font-weight: 700;">Connectivity & Nearby Landmarks</h4>
<p>Nihal Singh Enclave is strategically located in the rapidly developing <strong>Yamuna Authority (YEIDA) region</strong>, one of North India's fastest-growing real estate corridors.</p>
<div class="table-responsive mb-5">
    <table class="table table-bordered table-striped" style="border-radius: 10px; overflow: hidden; box-shadow: 0 5px 15px rgba(0,0,0,0.05);">
        <thead style="background-color: #0D3B66; color: white;">
            <tr>
                <th style="font-weight: 600; padding: 12px 20px;">Landmark</th>
                <th style="font-weight: 600; padding: 12px 20px; width: 150px;">Distance</th>
            </tr>
        </thead>
        <tbody>
            <tr><td style="padding: 12px 20px; font-weight: 500;">Cricket Stadium</td><td style="padding: 12px 20px; color: #c8a032; font-weight: 600;">100 Meters</td></tr>
            <tr><td style="padding: 12px 20px; font-weight: 500;">Yamuna Expressway</td><td style="padding: 12px 20px; color: #c8a032; font-weight: 600;">4 KM</td></tr>
            <tr><td style="padding: 12px 20px; font-weight: 500;">Film City</td><td style="padding: 12px 20px; color: #c8a032; font-weight: 600;">4 KM</td></tr>
            <tr><td style="padding: 12px 20px; font-weight: 500;">JBM University Hospital</td><td style="padding: 12px 20px; color: #c8a032; font-weight: 600;">4 KM</td></tr>
            <tr><td style="padding: 12px 20px; font-weight: 500;">Airport</td><td style="padding: 12px 20px; color: #c8a032; font-weight: 600;">6 KM</td></tr>
            <tr><td style="padding: 12px 20px; font-weight: 500;">AIIMS Hospital</td><td style="padding: 12px 20px; color: #c8a032; font-weight: 600;">6 KM</td></tr>
            <tr><td style="padding: 12px 20px; font-weight: 500;">Galgotias University</td><td style="padding: 12px 20px; color: #c8a032; font-weight: 600;">10 KM</td></tr>
            <tr><td style="padding: 12px 20px; font-weight: 500;">Noida International University</td><td style="padding: 12px 20px; color: #c8a032; font-weight: 600;">11 KM</td></tr>
            <tr><td style="padding: 12px 20px; font-weight: 500;">Buddh International Circuit (F1 Track)</td><td style="padding: 12px 20px; color: #c8a032; font-weight: 600;">11 KM</td></tr>
            <tr><td style="padding: 12px 20px; font-weight: 500;">Pari Chowk</td><td style="padding: 12px 20px; color: #c8a032; font-weight: 600;">20 KM</td></tr>
        </tbody>
    </table>
</div>

<h4 class="mb-4" style="color: #0D3B66; font-weight: 700;">Nihal Singh Enclave – Premium Plots in Rabupura Sector 20, Yamuna Authority</h4>
<p>Nihal Singh Enclave by ED Infratech is a premium plotted development located in Rabupura Sector 20 within the rapidly expanding Yamuna Authority region. Offering registry-ready plots with immediate possession, the project provides an exceptional opportunity for homebuyers and investors seeking long-term value appreciation.</p>
<p>Strategically positioned near Yamuna Expressway, the upcoming Noida International Airport, Film City, leading universities, hospitals, and major infrastructure projects, Nihal Singh Enclave combines location advantage with modern amenities such as RCC roads, gated security, water and sewage facilities, and 24×7 electricity.</p>
<p class="mb-5">Whether you are planning to build your dream home or invest in one of India's fastest-growing real estate corridors, Nihal Singh Enclave offers a secure and future-ready investment opportunity.</p>
`;

content = content.replace(
    /<\/style>\s*<\/div>\s*<\/div>\s*<\/div>/,
    `</style>\n${connectivityTable}\n						</div>\n					</div>\n				</div>`
);


// Update Sidebar Info
content = content.replace(/>Project Name:<\/strong> Vihaan Enclave/, '>Project Name:</strong> Nihal Singh Enclave');
content = content.replace(/>Location:<\/strong> Khair – Somna Road, Aligarh/, '>Location:</strong> Rabupura, Sector 20, Yamuna Authority Area');
content = content.replace(/>Possession:<\/strong> To be announced/, '>Possession:</strong> Immediate Possession');
content = content.replace(/>Legal Status:<\/strong> Freehold, Registry Enabled/, '>Legal Status:</strong> Registry & Mutation Available');
content = content.replace(/>Loan Facility:<\/strong> Available \(up to 36 months interest-free\)/, '>Loan Facility:</strong> Construction Loan Available');

// For now, removing the Vihaan brochure PDF and sitemap since we don't have one for Nihal Singh Enclave yet.
content = content.replace(
    /<a href="vihaan-brochure.jpeg".*?<\/a>/,
    ''
);

content = content.replace(
    /<a href="Vihaan_Enclave_Rough_Layout.pdf".*?<\/a>/,
    ''
);

content = content.replace(
    /<button class="glowing-location-btn".*?<\/button>/,
    ''
);

// We keep the View Video Tour but remove the sitemap/location for now since we don't have links
content = content.replace(
    /<a href="Vihaan_Enclave_Rough_Layout.pdf" target="_blank" class="glowing-sitemap-btn".*?<\/a>/,
    ''
);
content = content.replace(
    /<button class="glowing-location-btn" onclick="window.open\('https:\/\/www.google.com.*?<\/button>/,
    ''
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Nihal Singh Enclave page updated.');
