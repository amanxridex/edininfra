const fs = require('fs');
const path = require('path');

const targetDir = 'c:/Users/91836/PERSONAL/edinmaster/ED';
const files = fs.readdirSync(targetDir).filter(f => f.endsWith('.html'));

const newSplashStyle = `/* Ultra-Premium White Splash Screen */
.custom-splash {
    position: fixed;
    top: 0; left: 0; width: 100vw; height: 100vh;
    background: #ffffff; /* Clean white */
    z-index: 999999;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    animation: splashFadeOut 0.8s cubic-bezier(0.8, 0, 0.2, 1) 4.2s forwards;
    overflow: hidden;
}

.custom-splash::before {
    content: '';
    position: absolute;
    top: 50%; left: 50%;
    width: 200vw; height: 200vw;
    background: radial-gradient(circle, rgba(200,160,50,0.03) 0%, transparent 60%);
    transform: translate(-50%, -50%) scale(0.5);
    animation: pulseAura 4s ease-in-out infinite;
}

.splash-logo {
    width: 280px;
    opacity: 0;
    transform: translateY(40px);
    filter: drop-shadow(0 15px 35px rgba(0,0,0,0.05));
    animation: logoReveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards, logoFloat 3s ease-in-out 1.5s infinite;
    position: relative;
    z-index: 2;
}

.splash-text-container {
    overflow: hidden;
    margin-top: 30px;
    position: relative;
    z-index: 2;
}

.splash-text {
    color: #0D3B66; /* Deep blue for premium contrast on white */
    font-family: 'Inter', sans-serif;
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 4px;
    opacity: 0;
    transform: translateY(100%);
    animation: textSlideUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.8s forwards;
    text-transform: uppercase;
}

.splash-text span {
    color: #c8a032; /* Gold accent */
}

.splash-accent-line {
    width: 0px;
    height: 2px;
    background: linear-gradient(90deg, transparent, #c8a032, transparent);
    margin-top: 20px;
    animation: lineExpand 2s cubic-bezier(0.16, 1, 0.3, 1) 1.2s forwards;
    opacity: 0;
}

@keyframes pulseAura {
    0%, 100% { transform: translate(-50%, -50%) scale(0.8); opacity: 0.5; }
    50% { transform: translate(-50%, -50%) scale(1.2); opacity: 1; }
}

@keyframes logoReveal {
    0% { opacity: 0; transform: translateY(40px) scale(0.95); }
    100% { opacity: 1; transform: translateY(0) scale(1); }
}

@keyframes logoFloat {
    0%, 100% { transform: translateY(0); filter: drop-shadow(0 15px 35px rgba(0,0,0,0.05)); }
    50% { transform: translateY(-10px); filter: drop-shadow(0 25px 40px rgba(200,160,50,0.15)); }
}

@keyframes textSlideUp {
    0% { opacity: 0; transform: translateY(100%); letter-spacing: 4px; }
    100% { opacity: 1; transform: translateY(0); letter-spacing: 8px; }
}

@keyframes lineExpand {
    0% { width: 0px; opacity: 0; }
    100% { width: 150px; opacity: 1; }
}

@keyframes splashFadeOut {
    0% { opacity: 1; transform: scale(1); filter: blur(0px); }
    100% { opacity: 0; transform: scale(1.05); filter: blur(10px); visibility: hidden; }
}

/* Hide default preloader */
.preloader { display: none !important; opacity: 0 !important; visibility: hidden !important; }`;

const newSplashHtml = `<div class="custom-splash">
    <img src="images/logo.png" class="splash-logo" alt="ED Infratech">
    <div class="splash-accent-line"></div>
    <div class="splash-text-container">
        <div class="splash-text">Building <span>Visions</span></div>
    </div>
</div>`;

files.forEach(file => {
    const filePath = path.join(targetDir, file);
    let html = fs.readFileSync(filePath, 'utf8');
    
    let updated = false;

    // Replace old style
    if (html.includes('/* Modern Sexy Splash Screen */')) {
        html = html.replace(/\/\* Modern Sexy Splash Screen \*\/(.|\n)*?\.preloader \{ display: none !important; opacity: 0 !important; visibility: hidden !important; \}/, newSplashStyle);
        updated = true;
    }

    // Replace old HTML
    if (html.includes('<div class="custom-splash">')) {
        html = html.replace(/<div class="custom-splash">(.|\n)*?<\/div>\s*<\/div>/, newSplashHtml);
        updated = true;
    }

    if (updated) {
        fs.writeFileSync(filePath, html, 'utf8');
        console.log(`Upgraded splash screen in ${file}`);
    }
});
