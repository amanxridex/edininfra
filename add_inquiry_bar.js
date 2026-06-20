const fs = require('fs');
const path = require('path');

const targetPath = 'c:/Users/91836/PERSONAL/edinmaster/ED/page-project-details.html';
let content = fs.readFileSync(targetPath, 'utf8');

const inquiryBarHTML = `
			<!-- Inquiry Bar -->
			<div class="project-inquiry-bar wow fadeInUp" data-wow-delay="0.1s" style="background: linear-gradient(135deg, #0D3B66 0%, #082544 100%); border-radius: 20px; padding: 30px 40px; margin-bottom: 50px; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; box-shadow: 0 20px 40px rgba(0,0,0,0.15);">
				<div class="inquiry-form d-flex flex-wrap align-items-center" style="flex: 1; gap: 15px;">
					<h4 style="color: #fff; margin-bottom: 0; margin-right: 15px; font-size: 22px;">Interested? Let's Talk</h4>
					<input type="text" name="name" placeholder="Your Name" style="padding: 12px 20px; border-radius: 30px; border: 1px solid rgba(255,255,255,0.2); outline: none; flex: 1; min-width: 150px; background: rgba(255,255,255,0.05); color: #fff;">
					<input type="tel" name="phone" placeholder="Phone Number" style="padding: 12px 20px; border-radius: 30px; border: 1px solid rgba(255,255,255,0.2); outline: none; flex: 1; min-width: 150px; background: rgba(255,255,255,0.05); color: #fff;">
					<button type="submit" class="theme-btn btn-style-one" style="padding: 12px 30px; border-radius: 30px; font-size: 15px; background-color: #c8a032; border: none; cursor: pointer;"><span class="btn-title text-white">Submit</span></button>
				</div>
				
				<div class="inquiry-actions d-flex align-items-center mt-4 mt-xl-0" style="gap: 15px; margin-left: auto;">
					<a href="tel:+918368337869" class="action-btn call-btn d-flex align-items-center justify-content-center" style="width: 55px; height: 55px; border-radius: 50%; background: #ffffff; color: #0D3B66; font-size: 20px; text-decoration: none; box-shadow: 0 5px 15px rgba(0,0,0,0.1); transition: all 0.3s ease;" title="Call Us">
						<i class="fa-solid fa-phone"></i>
					</a>
					<a href="https://wa.me/918368337869" target="_blank" class="action-btn wa-btn d-flex align-items-center justify-content-center" style="width: 55px; height: 55px; border-radius: 50%; background: #25D366; color: #ffffff; font-size: 26px; text-decoration: none; box-shadow: 0 5px 15px rgba(37,211,102,0.3); transition: all 0.3s ease;" title="WhatsApp Us">
						<i class="fab fa-whatsapp"></i>
					</a>
				</div>
			</div>
			<style>
			.project-inquiry-bar input::placeholder {
				color: rgba(255,255,255,0.6);
			}
			.project-inquiry-bar input:focus {
				border-color: #c8a032 !important;
				background: rgba(255,255,255,0.1) !important;
			}
			.action-btn:hover {
				transform: translateY(-5px);
				box-shadow: 0 10px 25px rgba(0,0,0,0.3) !important;
			}
			@media(max-width: 1199px) {
				.inquiry-actions {
					margin-left: 0 !important;
					width: 100%;
					justify-content: flex-start;
				}
			}
			</style>
			<!-- End Inquiry Bar -->
`;

const regex = /(<div class="row">\s*<div class="col-xl-12">\s*<div class="project-details__pagination-box">)/;

if (regex.test(content)) {
	content = content.replace(regex, inquiryBarHTML + '\n			$1');
	fs.writeFileSync(targetPath, content, 'utf8');
	console.log('Successfully injected the inquiry bar using regex!');
} else {
	console.log('Could not find the target anchor with regex.');
}
