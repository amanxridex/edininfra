const fs = require('fs');

const filePath = 'c:/Users/91836/PERSONAL/edinmaster/ED/nihal-singh-enclave-rabupura-sector-20-yamuna-authority.html';
let content = fs.readFileSync(filePath, 'utf8');

// The new content we want to inject for the left side of the page
const newLeftContent = `
							<p>Nihal Singh Enclave presents a rare opportunity to invest in one of the most promising locations near the Yamuna Authority region. Surrounded by major infrastructure developments, educational institutions, healthcare facilities, and the upcoming international airport ecosystem, this project is designed for investors looking for growth, security, and long-term returns.</p>
							<p class="mb-5">With registry-ready plots, immediate possession, modern infrastructure, and excellent connectivity, Nihal Singh Enclave stands as a compelling destination for residential construction and future investment appreciation.</p>
							
							<h4 class="mb-4" style="color: #0D3B66; font-weight: 700;">Why Invest in Nihal Singh Enclave?</h4>
							<div class="row mb-5">
								<div class="col-md-6 mb-3">
									<div class="modern-feature-card" style="background: #fff; padding: 25px; border-radius: 15px; height: 100%; border-left: 4px solid #c8a032; box-shadow: 0 10px 30px rgba(0,0,0,0.05); transition: all 0.3s ease; position: relative; overflow: hidden;">
										<h5 style="color: #0D3B66; font-size: 18px; font-weight: 700;">1. Located in the YEIDA Growth Corridor</h5>
										<p class="mb-0" style="font-size: 14px; color: #555;">The Yamuna Authority region is witnessing large-scale infrastructure investment, making it one of the most promising destinations for long-term capital appreciation.</p>
									</div>
								</div>
								<div class="col-md-6 mb-3">
									<div class="modern-feature-card" style="background: #fff; padding: 25px; border-radius: 15px; height: 100%; border-left: 4px solid #c8a032; box-shadow: 0 10px 30px rgba(0,0,0,0.05); transition: all 0.3s ease; position: relative; overflow: hidden;">
										<h5 style="color: #0D3B66; font-size: 18px; font-weight: 700;">2. Near Noida International Airport</h5>
										<p class="mb-0" style="font-size: 14px; color: #555;">The upcoming airport ecosystem is expected to drive residential, commercial, hospitality, and industrial demand throughout the region.</p>
									</div>
								</div>
								<div class="col-md-6 mb-3">
									<div class="modern-feature-card" style="background: #fff; padding: 25px; border-radius: 15px; height: 100%; border-left: 4px solid #c8a032; box-shadow: 0 10px 30px rgba(0,0,0,0.05); transition: all 0.3s ease; position: relative; overflow: hidden;">
										<h5 style="color: #0D3B66; font-size: 18px; font-weight: 700;">3. Immediate Possession</h5>
										<p class="mb-0" style="font-size: 14px; color: #555;">Unlike many under-development projects, Nihal Singh Enclave offers immediate possession, allowing buyers to begin construction sooner.</p>
									</div>
								</div>
								<div class="col-md-6 mb-3">
									<div class="modern-feature-card" style="background: #fff; padding: 25px; border-radius: 15px; height: 100%; border-left: 4px solid #c8a032; box-shadow: 0 10px 30px rgba(0,0,0,0.05); transition: all 0.3s ease; position: relative; overflow: hidden;">
										<h5 style="color: #0D3B66; font-size: 18px; font-weight: 700;">4. Registry & Mutation Ready</h5>
										<p class="mb-0" style="font-size: 14px; color: #555;">Registry and mutation availability provide additional confidence regarding ownership and legal documentation.</p>
									</div>
								</div>
								<div class="col-md-12 mb-3">
									<div class="modern-feature-card" style="background: #fff; padding: 25px; border-radius: 15px; height: 100%; border-left: 4px solid #c8a032; box-shadow: 0 10px 30px rgba(0,0,0,0.05); transition: all 0.3s ease; position: relative; overflow: hidden;">
										<h5 style="color: #0D3B66; font-size: 18px; font-weight: 700;">5. Strong Connectivity</h5>
										<p class="mb-0" style="font-size: 14px; color: #555;">Excellent access to Yamuna Expressway, educational institutions, hospitals, and commercial developments enhances both livability and investment potential.</p>
									</div>
								</div>
							</div>

							<style>
.modern-feature-card:hover { transform: translateY(-8px); box-shadow: 0 15px 40px rgba(0,0,0,0.1) !important; }
.modern-feature-card::before { content: ''; position: absolute; top: 0; right: 0; width: 50px; height: 50px; background: radial-gradient(circle, rgba(200,160,50,0.2) 0%, transparent 70%); border-radius: 50%; transform: translate(30%, -30%); }
</style>
<h4 class="mb-3" style="color: #0D3B66; font-weight: 700;">Key Features</h4>
							<ul class="list-unstyled mb-5" style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
								<li style="font-weight: 500; color: #444; background: #f8f9fa; padding: 12px; border-radius: 8px;"><i class="fa fa-check-circle me-2" style="color: #c8a032; font-size: 18px;"></i> Registry Available</li>
								<li style="font-weight: 500; color: #444; background: #f8f9fa; padding: 12px; border-radius: 8px;"><i class="fa fa-check-circle me-2" style="color: #c8a032; font-size: 18px;"></i> Mutation Available</li>
								<li style="font-weight: 500; color: #444; background: #f8f9fa; padding: 12px; border-radius: 8px;"><i class="fa fa-check-circle me-2" style="color: #c8a032; font-size: 18px;"></i> Immediate Possession</li>
								<li style="font-weight: 500; color: #444; background: #f8f9fa; padding: 12px; border-radius: 8px;"><i class="fa fa-check-circle me-2" style="color: #c8a032; font-size: 18px;"></i> Construction Loan Facility</li>
								<li style="font-weight: 500; color: #444; background: #f8f9fa; padding: 12px; border-radius: 8px;"><i class="fa fa-check-circle me-2" style="color: #c8a032; font-size: 18px;"></i> Gated Society</li>
								<li style="font-weight: 500; color: #444; background: #f8f9fa; padding: 12px; border-radius: 8px;"><i class="fa fa-check-circle me-2" style="color: #c8a032; font-size: 18px;"></i> RCC Wide Roads</li>
								<li style="font-weight: 500; color: #444; background: #f8f9fa; padding: 12px; border-radius: 8px;"><i class="fa fa-check-circle me-2" style="color: #c8a032; font-size: 18px;"></i> Water & Sewage Infrastructure</li>
								<li style="font-weight: 500; color: #444; background: #f8f9fa; padding: 12px; border-radius: 8px;"><i class="fa fa-check-circle me-2" style="color: #c8a032; font-size: 18px;"></i> 24×7 Electricity</li>
								<li style="font-weight: 500; color: #444; background: #f8f9fa; padding: 12px; border-radius: 8px;"><i class="fa fa-check-circle me-2" style="color: #c8a032; font-size: 18px;"></i> Secure Community Environment</li>
								<li style="font-weight: 500; color: #444; background: #f8f9fa; padding: 12px; border-radius: 8px;"><i class="fa fa-check-circle me-2" style="color: #c8a032; font-size: 18px;"></i> Investment-Friendly Location</li>
							</ul>

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

// Now find the start and end indices of the block to replace
const startIndex = content.indexOf('<p>Nihal Singh Enclave presents a rare opportunity');
const endIndexStr = '</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class="col-xl-4 col-lg-4">';
const endIndexStrFallback = '</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="col-xl-4 col-lg-4">';
let endIndex = content.indexOf(endIndexStr);
if(endIndex === -1) endIndex = content.indexOf(endIndexStrFallback);

if (startIndex !== -1 && endIndex !== -1) {
    const beforeStr = content.substring(0, startIndex);
    const afterStr = content.substring(endIndex);
    content = beforeStr + newLeftContent + '\n' + afterStr;
    console.log("Successfully replaced left content block.");
} else {
    console.log("Could not find start or end index.");
}

fs.writeFileSync(filePath, content, 'utf8');
