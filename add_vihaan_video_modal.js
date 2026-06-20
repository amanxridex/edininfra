const fs = require('fs');
const path = require('path');

const targetPath = 'c:/Users/91836/PERSONAL/edinmaster/ED/vihaan-enclave-khair-somna-road.html';
let content = fs.readFileSync(targetPath, 'utf8');

// 1. Remove the inline video box from the left column
const inlineVideoHtml = `							<h4 class="mb-4" style="color: #0D3B66; font-weight: 700;">Project Video Tour</h4>
							<div class="video-box mb-5" style="border-radius: 15px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.15); background: #000;">
								<video width="100%" controls style="display: block;">
									<source src="images/resource/VIHAAN.mp4" type="video/mp4">
									Your browser does not support the video tag.
								</video>
							</div>`;
content = content.replace(inlineVideoHtml, '');

// 2. Add glowing button to the right sidebar
const buttonHtml = `								<button class="glowing-video-btn" data-bs-toggle="modal" data-bs-target="#videoModal">
									<i class="fa fa-play-circle"></i> View Video Tour
								</button>
								<style>
								.glowing-video-btn {
									display: flex; align-items: center; justify-content: center; width: 100%;
									padding: 15px 20px; margin-bottom: 25px;
									background: linear-gradient(90deg, #c8a032, #f3c951, #c8a032);
									background-size: 200% auto;
									color: #fff; font-size: 16px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;
									border: none; border-radius: 10px; cursor: pointer;
									animation: glowGradient 3s infinite linear, glowPulse 2s infinite alternate;
									box-shadow: 0 0 15px rgba(200, 160, 50, 0.6);
									transition: transform 0.3s ease;
								}
								.glowing-video-btn:hover { transform: scale(1.03); color: #fff; }
								.glowing-video-btn i { font-size: 22px; margin-right: 10px; }
								@keyframes glowGradient { 0% { background-position: 0% center; } 100% { background-position: 200% center; } }
								@keyframes glowPulse { 0% { box-shadow: 0 0 10px rgba(200, 160, 50, 0.4); } 100% { box-shadow: 0 0 25px rgba(200, 160, 50, 0.8); } }
								</style>`;

content = content.replace(
    '<h4 style="color: #fff; margin-bottom: 25px; font-size: 24px; font-weight: 700; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 15px;">Project Overview</h4>',
    '<h4 style="color: #fff; margin-bottom: 25px; font-size: 24px; font-weight: 700; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 15px;">Project Overview</h4>\n' + buttonHtml
);

// 3. Add the Modal before End Page Wrapper
const modalHtml = `
<!-- Video Modal -->
<div class="modal fade" id="videoModal" tabindex="-1" aria-labelledby="videoModalLabel" aria-hidden="true" style="z-index: 999999;">
  <div class="modal-dialog modal-lg modal-dialog-centered">
    <div class="modal-content" style="background: transparent; border: none;">
      <div class="modal-header" style="border-bottom: none; padding-bottom: 10px;">
        <h5 class="modal-title" id="videoModalLabel" style="color: #fff; font-size: 24px; font-weight: 700; text-shadow: 0 2px 4px rgba(0,0,0,0.8);">Vihaan Enclave</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close" style="text-shadow: 0 2px 4px rgba(0,0,0,0.8);"></button>
      </div>
      <div class="modal-body" style="padding: 0 10px 10px 10px;">
        <div style="border-radius: 15px; overflow: hidden; box-shadow: 0 10px 40px rgba(0,0,0,0.5); background: #000;">
            <video id="vihaanVideoPlayer" width="100%" controls>
                <source src="images/resource/VIHAAN.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
      </div>
    </div>
  </div>
</div>

<script>
    document.addEventListener('DOMContentLoaded', function() {
        var videoModal = document.getElementById('videoModal');
        var vihaanVideoPlayer = document.getElementById('vihaanVideoPlayer');
        if(videoModal && vihaanVideoPlayer) {
            videoModal.addEventListener('hidden.bs.modal', function () {
                vihaanVideoPlayer.pause();
            });
            videoModal.addEventListener('shown.bs.modal', function () {
                vihaanVideoPlayer.play();
            });
        }
    });
</script>
`;

content = content.replace('<!-- End Page Wrapper -->', modalHtml + '\n<!-- End Page Wrapper -->');

fs.writeFileSync(targetPath, content, 'utf8');
console.log('Successfully updated Vihaan Enclave page with video modal!');
