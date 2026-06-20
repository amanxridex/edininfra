const fs = require('fs');
const path = require('path');

const targetPath = 'c:/Users/91836/PERSONAL/edinmaster/ED/vihaan-enclave-khair-somna-road.html';
let content = fs.readFileSync(targetPath, 'utf8');

// 1. Update Title and Meta Description
content = content.replace(
    /<title>.*?<\/title>/,
    '<title>Vihaan Enclave | Residential & Commercial Plots on Khair Somna Road | ED Infratech</title>\n  <meta name="description" content="Invest in Vihaan Enclave by ED Infratech. Premium residential and commercial plots on Khair Somna Road with registry, wide roads, security, water supply and 36-month interest-free installments.">'
);

// 2. Replace Swiper Slider
const swiperSliderHtml = `
						<div class="swiper project-details-hero-slider" style="border-radius: 15px; overflow: hidden; position: relative; max-height: 500px;">
							<div class="swiper-wrapper">
								<!-- Slide 1 -->
								<div class="swiper-slide">
									<div class="project-details__img" style="height: 100%;"> 
										<img src="images/resource/VIHAAN.png" alt="Vihaan Enclave Banner" style="width: 100%; height: 500px; object-fit: cover;"> 
									</div>
								</div>
								<!-- Slide 2 -->
								<div class="swiper-slide">
									<div class="project-details__img" style="height: 100%;"> 
										<img src="images/resource/VIHAAN1.png" alt="Vihaan Enclave Details" style="width: 100%; height: 500px; object-fit: cover;"> 
									</div>
								</div>
							</div>
							<!-- Navigation Arrows -->
							<div class="swiper-button-next" style="color: #c8a032;"></div>
							<div class="swiper-button-prev" style="color: #c8a032;"></div>
							<!-- Pagination -->
							<div class="swiper-pagination"></div>
						</div>
`;
content = content.replace(/<div class="swiper project-details-hero-slider"[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/, swiperSliderHtml + '\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>');

// 3. Replace Content Area
const projectContentHtml = `
			<div class="project-details__content">
				<div class="row">
					<div class="col-xl-8 col-lg-8">
						<div class="project-details__content-left">
							<div class="h3 mb-4" style="color: #0D3B66; font-weight: 700;">Vihaan Enclave – Premium Plots on Khair Somna Road</div>
							<p>Vihaan Enclave by ED Infratech is a premium plotted development located on the rapidly growing Khair Somna Road. Offering both residential and commercial plots, the project combines affordability, connectivity, and modern infrastructure. With wide roads, street lighting, water supply, 24x7 security, and green landscaped areas, Vihaan Enclave is designed for comfortable living and smart investment.</p>
							<p class="mb-5">Whether you are looking to build your dream home or secure a high-potential land investment, Vihaan Enclave provides flexible payment options with only a 10% booking amount and up to 36 months interest-free installments. The project also offers registry-enabled plots, ensuring complete ownership security and peace of mind.</p>
							
							<h4 class="mb-4" style="color: #0D3B66; font-weight: 700;">Why Invest in Vihaan Enclave?</h4>
							<div class="row mb-5">
								<div class="col-md-6 mb-3">
									<div style="background: #f8f9fa; padding: 20px; border-radius: 10px; height: 100%; border-left: 4px solid #c8a032; box-shadow: 0 5px 15px rgba(0,0,0,0.03);">
										<h5 style="color: #0D3B66; font-size: 18px; font-weight: 700;">Affordable Entry Point</h5>
										<p class="mb-0" style="font-size: 14px; color: #555;">Residential plots starting at ₹15,000 per sq. yard, providing an accessible investment.</p>
									</div>
								</div>
								<div class="col-md-6 mb-3">
									<div style="background: #f8f9fa; padding: 20px; border-radius: 10px; height: 100%; border-left: 4px solid #c8a032; box-shadow: 0 5px 15px rgba(0,0,0,0.03);">
										<h5 style="color: #0D3B66; font-size: 18px; font-weight: 700;">Commercial Potential</h5>
										<p class="mb-0" style="font-size: 14px; color: #555;">Commercial plots at ₹22,000 per sq. yard for long-term business and rental opportunities.</p>
									</div>
								</div>
								<div class="col-md-6 mb-3">
									<div style="background: #f8f9fa; padding: 20px; border-radius: 10px; height: 100%; border-left: 4px solid #c8a032; box-shadow: 0 5px 15px rgba(0,0,0,0.03);">
										<h5 style="color: #0D3B66; font-size: 18px; font-weight: 700;">Secure Investment</h5>
										<p class="mb-0" style="font-size: 14px; color: #555;">Registry availability ensures legal ownership and complete transparency.</p>
									</div>
								</div>
								<div class="col-md-6 mb-3">
									<div style="background: #f8f9fa; padding: 20px; border-radius: 10px; height: 100%; border-left: 4px solid #c8a032; box-shadow: 0 5px 15px rgba(0,0,0,0.03);">
										<h5 style="color: #0D3B66; font-size: 18px; font-weight: 700;">Easy Payment Plan</h5>
										<p class="mb-0" style="font-size: 14px; color: #555;">Only 10% booking amount with up to 36 months interest-free installments.</p>
									</div>
								</div>
							</div>

							<h4 class="mb-3" style="color: #0D3B66; font-weight: 700;">Location Advantage</h4>
							<p class="mb-4">Vihaan Enclave is strategically located on <strong>Khair–Somna Road</strong>, a rapidly developing corridor connecting major areas of Western Uttar Pradesh. The project offers excellent connectivity while maintaining a peaceful environment suitable for residential living and future investment appreciation.</p>
							<ul class="list-unstyled mb-5" style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
								<li style="font-weight: 500; color: #444;"><i class="fa fa-check-circle me-2" style="color: #c8a032; font-size: 18px;"></i> Direct Road Connectivity</li>
								<li style="font-weight: 500; color: #444;"><i class="fa fa-check-circle me-2" style="color: #c8a032; font-size: 18px;"></i> Developing Residential Zone</li>
								<li style="font-weight: 500; color: #444;"><i class="fa fa-check-circle me-2" style="color: #c8a032; font-size: 18px;"></i> Future Growth Potential</li>
								<li style="font-weight: 500; color: #444;"><i class="fa fa-check-circle me-2" style="color: #c8a032; font-size: 18px;"></i> Easy Access to Local Markets</li>
							</ul>

							<h4 class="mb-4" style="color: #0D3B66; font-weight: 700;">Project Video Tour</h4>
							<div class="video-box mb-5" style="border-radius: 15px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.15); background: #000;">
								<video width="100%" controls style="display: block;">
									<source src="images/resource/VIHAAN.mp4" type="video/mp4">
									Your browser does not support the video tag.
								</video>
							</div>
						</div>
					</div>
					<div class="col-xl-4 col-lg-4">
						<div class="project-details__content-right sticky-top" style="top: 100px;">
							<div class="project-details__details-box" style="background: linear-gradient(135deg, #0D3B66 0%, #082544 100%); border-radius: 15px; padding: 40px 30px; box-shadow: 0 15px 40px rgba(0,0,0,0.15);">
								<div class="project-details__bg-shape"> </div>
								<h4 style="color: #fff; margin-bottom: 25px; font-size: 24px; font-weight: 700; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 15px;">Project Overview</h4>
								<ul class="list-unstyled project-details__details-list">
									<li style="margin-bottom: 20px;">
										<p class="project-details__client" style="color: rgba(255,255,255,0.7); margin-bottom: 5px; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Developer</p>
										<div class="h5 project-details__name" style="color: #fff; font-size: 18px; font-weight: 600;">ED Infratech</div>
									</li>
									<li style="margin-bottom: 20px;">
										<p class="project-details__client" style="color: rgba(255,255,255,0.7); margin-bottom: 5px; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Location</p>
										<div class="h5 project-details__name" style="color: #fff; font-size: 18px; font-weight: 600;">Khair – Somna Road, UP</div>
									</li>
									<li style="margin-bottom: 20px;">
										<p class="project-details__client" style="color: rgba(255,255,255,0.7); margin-bottom: 5px; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Property Type</p>
										<div class="h5 project-details__name" style="color: #fff; font-size: 18px; font-weight: 600;">Freehold Plots</div>
									</li>
									<li style="margin-bottom: 20px;">
										<p class="project-details__client" style="color: rgba(255,255,255,0.7); margin-bottom: 5px; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Ownership</p>
										<div class="h5 project-details__name" style="color: #fff; font-size: 18px; font-weight: 600;">Registry Available</div>
									</li>
									<li style="margin-bottom: 20px;">
										<p class="project-details__client" style="color: rgba(255,255,255,0.7); margin-bottom: 5px; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Booking Amount</p>
										<div class="h5 project-details__name" style="color: #fff; font-size: 18px; font-weight: 600;">10%</div>
									</li>
									<li style="margin-bottom: 20px;">
										<p class="project-details__client" style="color: rgba(255,255,255,0.7); margin-bottom: 5px; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">EMI Facility</p>
										<div class="h5 project-details__name" style="color: #fff; font-size: 18px; font-weight: 600;">36 Months Interest-Free</div>
									</li>
									<li style="margin-top: 25px;">
										<div style="background: rgba(255,255,255,0.1); padding: 20px; border-radius: 10px; border-left: 3px solid #c8a032;">
											<p style="color: #c8a032; font-weight: 600; margin-bottom: 5px; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Commercial Plots</p>
											<div class="h5" style="color: #fff; margin-bottom: 15px; font-size: 20px; font-weight: 700;">₹22,000 / Sq. Yd</div>
											<p style="color: #c8a032; font-weight: 600; margin-bottom: 5px; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Residential Plots</p>
											<div class="h5" style="color: #fff; margin-bottom: 0; font-size: 20px; font-weight: 700;">₹15,000 / Sq. Yd</div>
										</div>
									</li>
								</ul>
								<div class="mt-4 pt-4" style="border-top: 1px solid rgba(255,255,255,0.1);">
									<h5 style="color: #fff; margin-bottom: 15px; font-size: 18px; font-weight: 700;">Key Features</h5>
									<ul class="list-unstyled" style="color: rgba(255,255,255,0.9); padding-left: 0; line-height: 2;">
										<li><i class="fa fa-angle-right" style="color: #c8a032; margin-right: 8px;"></i> Wide Internal Roads</li>
										<li><i class="fa fa-angle-right" style="color: #c8a032; margin-right: 8px;"></i> Street Lighting & Water</li>
										<li><i class="fa fa-angle-right" style="color: #c8a032; margin-right: 8px;"></i> 24×7 Security</li>
										<li><i class="fa fa-angle-right" style="color: #c8a032; margin-right: 8px;"></i> Park & Green Area</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>`;

content = content.replace(/<div class="project-details__content">[\s\S]*?<!-- Inquiry Bar -->/, projectContentHtml + '\n\t\t\t\n\t\t\t<!-- Inquiry Bar -->');

// 4. Remove the pagination section to keep it clean
content = content.replace(/<div class="row">\s*<div class="col-xl-12">\s*<div class="project-details__pagination-box">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/, '');

fs.writeFileSync(targetPath, content, 'utf8');
console.log('Successfully created vihaan-enclave-khair-somna-road.html with all content!');
