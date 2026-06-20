const fs = require('fs');

const filePath = 'c:/Users/91836/PERSONAL/edinmaster/ED/nihal-singh-enclave-rabupura-sector-20-yamuna-authority.html';
let content = fs.readFileSync(filePath, 'utf8');

// The original sidebar list we want to replace
const oldListPattern = /<ul class="list-unstyled project-details__details-list">[\s\S]*?<\/ul>/;

const newList = `<ul class="list-unstyled project-details__details-list">
									<li style="margin-bottom: 20px;">
										<p class="project-details__client" style="color: rgba(255,255,255,0.7); margin-bottom: 5px; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Developer</p>
										<div class="h5 project-details__name" style="color: #fff; font-size: 18px; font-weight: 600;">ED Infratech</div>
									</li>
									<li style="margin-bottom: 20px;">
										<p class="project-details__client" style="color: rgba(255,255,255,0.7); margin-bottom: 5px; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Location</p>
										<div class="h5 project-details__name" style="color: #fff; font-size: 18px; font-weight: 600;">Rabupura, Sector 20, YEIDA</div>
									</li>
									<li style="margin-bottom: 20px;">
										<p class="project-details__client" style="color: rgba(255,255,255,0.7); margin-bottom: 5px; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Property Type</p>
										<div class="h5 project-details__name" style="color: #fff; font-size: 18px; font-weight: 600;">Residential & Investment Plots</div>
									</li>
									<li style="margin-bottom: 20px;">
										<p class="project-details__client" style="color: rgba(255,255,255,0.7); margin-bottom: 5px; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Possession Status</p>
										<div class="h5 project-details__name" style="color: #fff; font-size: 18px; font-weight: 600;">Immediate Possession</div>
									</li>
									<li style="margin-bottom: 20px;">
										<p class="project-details__client" style="color: rgba(255,255,255,0.7); margin-bottom: 5px; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Legal Status</p>
										<div class="h5 project-details__name" style="color: #fff; font-size: 18px; font-weight: 600;">Registry & Mutation Available</div>
									</li>
									<li style="margin-bottom: 20px;">
										<p class="project-details__client" style="color: rgba(255,255,255,0.7); margin-bottom: 5px; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Loan Facility</p>
										<div class="h5 project-details__name" style="color: #fff; font-size: 18px; font-weight: 600;">Construction Loan Available</div>
									</li>
									<li style="margin-top: 25px;">
										<div style="background: rgba(255,255,255,0.1); padding: 20px; border-radius: 10px; border-left: 3px solid #c8a032;">
											<p style="color: #c8a032; font-weight: 600; margin-bottom: 5px; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Plot Price</p>
											<div class="h5" style="color: #fff; margin-bottom: 0; font-size: 20px; font-weight: 700;">₹31,999 per Sq. Gaj</div>
										</div>
									</li>
								</ul>`;

if (oldListPattern.test(content)) {
    content = content.replace(oldListPattern, newList);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log("Sidebar details successfully updated.");
} else {
    console.log("Could not find the sidebar list pattern.");
}
