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
    perspective: 1000px;
    animation: splashFadeOut 1s cubic-bezier(0.8, 0, 0.2, 1) 4.5s forwards;
    overflow: hidden;
}

.custom-splash::before {
    content: '';
    position: absolute;
    top: 50%; left: 50%;
    width: 200vw; height: 200vw;
    background: radial-gradient(circle, rgba(200,160,50,0.06) 0%, transparent 60%);
    transform: translate(-50%, -50%) scale(0.5);
    animation: pulseAura 3s ease-in-out infinite;
}

.splash-logo {
    width: 420px;
    opacity: 0;
    transform: translateY(60px) scale(0.8) rotateX(15deg);
    filter: drop-shadow(0 25px 45px rgba(0,0,0,0.08));
    animation: logoReveal 1.5s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards, logoFloat 4s ease-in-out 1.7s infinite;
    position: relative;
    z-index: 2;
}

.splash-text-container {
    overflow: hidden;
    margin-top: 45px;
    position: relative;
    z-index: 2;
}

.splash-text {
    color: #0D3B66; /* Deep blue for premium contrast on white */
    font-family: 'Inter', sans-serif;
    font-size: 27px;
    font-weight: 700;
    letter-spacing: 6px;
    opacity: 0;
    transform: translateY(150%);
    animation: textSlideUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) 1s forwards;
    text-transform: uppercase;
}

.splash-text span {
    color: #c8a032; /* Gold accent */
}

.splash-accent-line {
    width: 0px;
    height: 3px;
    background: linear-gradient(90deg, transparent, #c8a032, transparent);
    margin-top: 30px;
    animation: lineExpand 2.2s cubic-bezier(0.16, 1, 0.3, 1) 1.2s forwards;
    opacity: 0;
}

@keyframes pulseAura {
    0%, 100% { transform: translate(-50%, -50%) scale(0.8); opacity: 0.5; }
    50% { transform: translate(-50%, -50%) scale(1.3); opacity: 1; }
}

@keyframes logoReveal {
    0% { opacity: 0; transform: translateY(60px) scale(0.8) rotateX(15deg); }
    100% { opacity: 1; transform: translateY(0) scale(1) rotateX(0deg); }
}

@keyframes logoFloat {
    0%, 100% { transform: translateY(0); filter: drop-shadow(0 25px 45px rgba(0,0,0,0.08)); }
    50% { transform: translateY(-15px); filter: drop-shadow(0 35px 55px rgba(200,160,50,0.25)); }
}

@keyframes textSlideUp {
    0% { opacity: 0; transform: translateY(150%); letter-spacing: 6px; }
    100% { opacity: 1; transform: translateY(0); letter-spacing: 12px; }
}

@keyframes lineExpand {
    0% { width: 0px; opacity: 0; }
    100% { width: 300px; opacity: 1; }
}

@keyframes splashFadeOut {
    0% { opacity: 1; transform: scale(1); filter: blur(0px); }
    100% { opacity: 0; transform: scale(1.1); filter: blur(15px); visibility: hidden; }
}

/* Hide default preloader */
.preloader { display: none !important; opacity: 0 !important; visibility: hidden !important; }`;

files.forEach(file => {
    const filePath = path.join(targetDir, file);
    let html = fs.readFileSync(filePath, 'utf8');
    
    let updated = false;

    // Replace old style with regex
    if (html.includes('/* Ultra-Premium White Splash Screen */')) {
        const regex = /\/\* Ultra-Premium White Splash Screen \*\/(.|\n)*?\.preloader \{ display: none !important; opacity: 0 !important; visibility: hidden !important; \}/;
        if (regex.test(html)) {
            html = html.replace(regex, newSplashStyle);
            updated = true;
        }
    }

    if (updated) {
        fs.writeFileSync(filePath, html, 'utf8');
        console.log(`Upgraded splash screen in ${file}`);
    }
});
