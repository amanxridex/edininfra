const fs = require('fs');
const path = require('path');

const filePath = 'c:/Users/91836/PERSONAL/edinmaster/ED/vihaan-enclave-khair-somna-road.html';
let content = fs.readFileSync(filePath, 'utf8');

// 1. Update Hero Slider
const oldSlider = `<div class="swiper project-details-hero-slider" style="border-radius: 15px; overflow: hidden; position: relative; max-height: 500px;">
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
						</div>`;

const newSlider = `<div class="swiper project-details-hero-slider" style="border-radius: 20px; overflow: hidden; position: relative; max-height: 500px; box-shadow: 0 20px 40px rgba(0,0,0,0.1);">
							<div class="swiper-wrapper">
								<!-- Slide 1 -->
								<div class="swiper-slide" style="overflow: hidden;">
									<div class="project-details__img hero-img-container" style="height: 100%; position: relative;"> 
										<img src="images/resource/VIHAAN.png" alt="Vihaan Enclave Banner" class="hero-zoom-img" style="width: 100%; height: 500px; object-fit: cover;"> 
										<div class="hero-overlay"></div>
									</div>
								</div>
								<!-- Slide 2 -->
								<div class="swiper-slide" style="overflow: hidden;">
									<div class="project-details__img hero-img-container" style="height: 100%; position: relative;"> 
										<img src="images/resource/VIHAAN1.png" alt="Vihaan Enclave Details" class="hero-zoom-img" style="width: 100%; height: 500px; object-fit: cover;"> 
										<div class="hero-overlay"></div>
									</div>
								</div>
							</div>
							<style>
								.hero-zoom-img { transition: transform 8s ease; }
								.swiper-slide-active .hero-zoom-img { transform: scale(1.08); }
								.hero-overlay { position: absolute; bottom: 0; left: 0; width: 100%; height: 50%; background: linear-gradient(to top, rgba(13, 59, 102, 0.6), transparent); pointer-events: none; }
							</style>
							<!-- Navigation Arrows -->
							<div class="swiper-button-next" style="color: #fff; text-shadow: 0 2px 10px rgba(0,0,0,0.5);"></div>
							<div class="swiper-button-prev" style="color: #fff; text-shadow: 0 2px 10px rgba(0,0,0,0.5);"></div>
							<!-- Pagination -->
							<div class="swiper-pagination"></div>
						</div>`;

content = content.replace(oldSlider, newSlider);


// 2. Update Typography (Gradient Heading)
const oldHeading = `<div class="h3 mb-0" style="color: #0D3B66; font-weight: 700;">Vihaan Enclave – Premium Plots on Khair Somna Road</div>`;
const newHeading = `<div class="h3 mb-0" style="font-weight: 800; background: linear-gradient(90deg, #0D3B66, #c8a032); -webkit-background-clip: text; -webkit-text-fill-color: transparent; text-shadow: 0 2px 10px rgba(200, 160, 50, 0.1);">Vihaan Enclave – Premium Plots on Khair Somna Road</div>`;
content = content.replace(oldHeading, newHeading);


// 3. Update Feature Cards
// First card
content = content.replace(
	`<div style="background: #f8f9fa; padding: 20px; border-radius: 10px; height: 100%; border-left: 4px solid #c8a032; box-shadow: 0 5px 15px rgba(0,0,0,0.03);">`,
	`<div class="modern-feature-card" style="background: #fff; padding: 25px; border-radius: 15px; height: 100%; border-left: 4px solid #c8a032; box-shadow: 0 10px 30px rgba(0,0,0,0.05); transition: all 0.3s ease; position: relative; overflow: hidden;">`
);
// Second card
content = content.replace(
	`<div style="background: #f8f9fa; padding: 20px; border-radius: 10px; height: 100%; border-left: 4px solid #c8a032; box-shadow: 0 5px 15px rgba(0,0,0,0.03);">`,
	`<div class="modern-feature-card" style="background: #fff; padding: 25px; border-radius: 15px; height: 100%; border-left: 4px solid #c8a032; box-shadow: 0 10px 30px rgba(0,0,0,0.05); transition: all 0.3s ease; position: relative; overflow: hidden;">`
);
// Third card
content = content.replace(
	`<div style="background: #f8f9fa; padding: 20px; border-radius: 10px; height: 100%; border-left: 4px solid #c8a032; box-shadow: 0 5px 15px rgba(0,0,0,0.03);">`,
	`<div class="modern-feature-card" style="background: #fff; padding: 25px; border-radius: 15px; height: 100%; border-left: 4px solid #c8a032; box-shadow: 0 10px 30px rgba(0,0,0,0.05); transition: all 0.3s ease; position: relative; overflow: hidden;">`
);

// Add style for feature cards
const cardStyle = `<style>
.modern-feature-card:hover { transform: translateY(-8px); box-shadow: 0 15px 40px rgba(0,0,0,0.1) !important; }
.modern-feature-card::before { content: ''; position: absolute; top: 0; right: 0; width: 50px; height: 50px; background: radial-gradient(circle, rgba(200,160,50,0.2) 0%, transparent 70%); border-radius: 50%; transform: translate(30%, -30%); }
</style>
<h4 class="mb-3"`;
content = content.replace(`<h4 class="mb-3"`, cardStyle);


// 4. Update Amenities List
const oldList = `<ul class="list-unstyled mb-5" style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
								<li style="font-weight: 500; color: #444;"><i class="fa fa-check-circle me-2" style="color: #c8a032; font-size: 18px;"></i> Direct Road Connectivity</li>
								<li style="font-weight: 500; color: #444;"><i class="fa fa-check-circle me-2" style="color: #c8a032; font-size: 18px;"></i> Developing Residential Zone</li>
								<li style="font-weight: 500; color: #444;"><i class="fa fa-check-circle me-2" style="color: #c8a032; font-size: 18px;"></i> Future Growth Potential</li>
								<li style="font-weight: 500; color: #444;"><i class="fa fa-check-circle me-2" style="color: #c8a032; font-size: 18px;"></i> Easy Access to Local Markets</li>
							</ul>`;
const newList = `<ul class="list-unstyled mb-5 modern-amenities-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
								<li class="modern-amenity-item" style="background: #f8f9fa; padding: 12px 18px; border-radius: 12px; font-weight: 600; color: #0D3B66; display: flex; align-items: center; transition: all 0.3s ease;"><i class="fa fa-check-circle me-2" style="color: #c8a032; font-size: 20px;"></i> Direct Road Connectivity</li>
								<li class="modern-amenity-item" style="background: #f8f9fa; padding: 12px 18px; border-radius: 12px; font-weight: 600; color: #0D3B66; display: flex; align-items: center; transition: all 0.3s ease;"><i class="fa fa-check-circle me-2" style="color: #c8a032; font-size: 20px;"></i> Developing Residential Zone</li>
								<li class="modern-amenity-item" style="background: #f8f9fa; padding: 12px 18px; border-radius: 12px; font-weight: 600; color: #0D3B66; display: flex; align-items: center; transition: all 0.3s ease;"><i class="fa fa-check-circle me-2" style="color: #c8a032; font-size: 20px;"></i> Future Growth Potential</li>
								<li class="modern-amenity-item" style="background: #f8f9fa; padding: 12px 18px; border-radius: 12px; font-weight: 600; color: #0D3B66; display: flex; align-items: center; transition: all 0.3s ease;"><i class="fa fa-check-circle me-2" style="color: #c8a032; font-size: 20px;"></i> Easy Access to Local Markets</li>
							</ul>
							<style>
								.modern-amenity-item:hover { background: #0D3B66 !important; color: #fff !important; transform: translateX(5px); box-shadow: 0 5px 15px rgba(13, 59, 102, 0.2); }
								@media (max-width: 575px) { .modern-amenities-grid { grid-template-columns: 1fr !important; } }
							</style>`;
content = content.replace(oldList, newList);

// 5. Update Right Sidebar (Floating animation and glassmorphism)
const oldSidebar = `<div class="project-details__details-box" style="background: linear-gradient(135deg, #0D3B66 0%, #082544 100%); border-radius: 15px; padding: 40px 30px; box-shadow: 0 15px 40px rgba(0,0,0,0.15);">`;
const newSidebar = `<div class="project-details__details-box modern-sidebar-card" style="background: linear-gradient(135deg, rgba(13, 59, 102, 0.95) 0%, rgba(8, 37, 68, 0.98) 100%); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.1); border-radius: 20px; padding: 40px 30px; box-shadow: 0 20px 50px rgba(0,0,0,0.2);">
							<style>
								.modern-sidebar-card { animation: floatingCard 6s ease-in-out infinite; }
								@keyframes floatingCard { 0% { transform: translateY(0px); } 50% { transform: translateY(-8px); } 100% { transform: translateY(0px); } }
							</style>`;
content = content.replace(oldSidebar, newSidebar);


fs.writeFileSync(filePath, content, 'utf8');
console.log('Update complete.');
