const fs = require('fs');
const path = require('path');

const targetDir = 'c:/Users/91836/PERSONAL/edinmaster/ED';
const files = fs.readdirSync(targetDir).filter(f => f.endsWith('.html'));

const splashStyle = `
<style>
/* Modern Sexy Splash Screen */
.custom-splash {
    position: fixed;
    top: 0; left: 0; width: 100vw; height: 100vh;
    background: #0b1a2e; /* Dark Blue from ED logo */
    z-index: 999999;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    animation: splashFadeOut 0.8s ease-in-out 4.2s forwards;
}

.splash-logo {
    width: 280px;
    opacity: 0;
    transform: scale(0.8) translateY(30px);
    animation: logoReveal 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) 0.3s forwards, logoPulse 2s ease-in-out 1.5s infinite;
}

.splash-lines {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100px;
    background: linear-gradient(transparent, rgba(200, 160, 50, 0.15));
    transform-origin: bottom;
    animation: buildUp 3s ease-out 0.5s forwards;
    opacity: 0;
}

.splash-text {
    margin-top: 30px;
    color: #c8a032; /* Gold from logo */
    font-family: 'Inter', sans-serif;
    font-size: 20px;
    letter-spacing: 8px;
    opacity: 0;
    animation: textFade 1.5s ease-in-out 1.2s forwards;
    text-transform: uppercase;
}

@keyframes logoReveal {
    to { opacity: 1; transform: scale(1) translateY(0); }
}

@keyframes logoPulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); filter: drop-shadow(0 0 20px rgba(200,160,50,0.4)); }
    100% { transform: scale(1); }
}

@keyframes textFade {
    0% { opacity: 0; transform: translateY(10px); }
    100% { opacity: 1; transform: translateY(0); }
}

@keyframes buildUp {
    0% { height: 0; opacity: 0; }
    30% { opacity: 1; }
    100% { height: 40vh; opacity: 0; }
}

@keyframes splashFadeOut {
    0% { opacity: 1; transform: translateY(0); }
    100% { opacity: 0; transform: translateY(-100vh); visibility: hidden; }
}

/* Hide default preloader */
.preloader { display: none !important; opacity: 0 !important; visibility: hidden !important; }
</style>
`;

const splashHTML = `
<div class="custom-splash">
    <img src="images/logo.png" class="splash-logo" alt="ED Infratech">
    <div class="splash-text">Building Visions</div>
    <div class="splash-lines"></div>
</div>
`;

files.forEach(file => {
    const filePath = path.join(targetDir, file);
    let html = fs.readFileSync(filePath, 'utf8');
    
    let updated = false;

    // Fix index-2.html links globally
    if (html.includes('href="index-2.html"')) {
        html = html.split('href="index-2.html"').join('href="index.html"');
        updated = true;
    }
    
    // Inject custom splash screen
    if (!html.includes('custom-splash')) {
        // Insert style right before </head>
        html = html.replace('</head>', splashStyle + '\n</head>');
        
        // Insert HTML right after <body> or <div class="page-wrapper">
        if (html.includes('<div class="preloader"></div>')) {
            html = html.replace('<div class="preloader"></div>', splashHTML + '\n<div class="preloader" style="display:none;"></div>');
        } else {
            html = html.replace('<body>', '<body>\n' + splashHTML);
        }
        updated = true;
    }

    if (updated) {
        fs.writeFileSync(filePath, html, 'utf8');
        console.log(`Updated links & splash in ${file}`);
    }
});
