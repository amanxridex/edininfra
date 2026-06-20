const fs = require('fs');
const path = require('path');

const targetPath = 'c:/Users/91836/PERSONAL/edinmaster/ED/page-project-details.html';
let content = fs.readFileSync(targetPath, 'utf8');

const targetStr = `					<div class="project-details__top mb-30">
						<div class="project-details__img"> <img src="images/resource/project-details.jpg" alt=""> </div>
					</div>`;

const newHTML = `					<div class="project-details__top mb-30">
						<!-- Swiper Slider for Hero Image -->
						<div class="swiper project-details-hero-slider" style="border-radius: 15px; overflow: hidden; position: relative;">
							<div class="swiper-wrapper">
								<!-- Slide 1 -->
								<div class="swiper-slide">
									<div class="project-details__img"> 
										<img src="images/resource/project-details.jpg" alt="Project Image 1" style="width: 100%; object-fit: cover;"> 
									</div>
								</div>
								<!-- Slide 2 -->
								<div class="swiper-slide">
									<div class="project-details__img"> 
										<img src="images/resource/project1-2.jpg" alt="Project Image 2" style="width: 100%; object-fit: cover;"> 
									</div>
								</div>
								<!-- Slide 3 -->
								<div class="swiper-slide">
									<div class="project-details__img"> 
										<img src="images/resource/project1-3.jpg" alt="Project Image 3" style="width: 100%; object-fit: cover;"> 
									</div>
								</div>
							</div>
							<!-- Navigation Arrows -->
							<div class="swiper-button-next" style="color: #c8a032;"></div>
							<div class="swiper-button-prev" style="color: #c8a032;"></div>
							<!-- Pagination -->
							<div class="swiper-pagination"></div>
						</div>
					</div>`;

if (content.includes(targetStr)) {
    content = content.replace(targetStr, newHTML);
} else {
    // try a more relaxed replace
    const fallbackRegex = /<div class="project-details__top mb-30">[\s\S]*?<div class="project-details__img"> <img src="images\/resource\/project-details.jpg" alt=""> <\/div>[\s\S]*?<\/div>/;
    content = content.replace(fallbackRegex, newHTML);
}

// Ensure Swiper init script is present
const initScript = `
<script>
document.addEventListener('DOMContentLoaded', function() {
    if(typeof Swiper !== 'undefined') {
        new Swiper('.project-details-hero-slider', {
            loop: true,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: '.project-details-hero-slider .swiper-button-next',
                prevEl: '.project-details-hero-slider .swiper-button-prev',
            },
            pagination: {
                el: '.project-details-hero-slider .swiper-pagination',
                clickable: true,
            },
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            }
        });
    }
});
</script>
</body>`;

content = content.replace('</body>', initScript);

fs.writeFileSync(targetPath, content, 'utf8');
console.log('Successfully updated the project details hero image to a slider.');
