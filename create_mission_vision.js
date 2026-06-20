const fs = require('fs');
const path = require('path');

const targetDir = 'c:/Users/91836/PERSONAL/edinmaster/ED';
const missionSrc = path.join(targetDir, 'page-our-mission.html');
const visionSrc = path.join(targetDir, 'page-our-vision.html');
const missionDest = path.join(targetDir, 'mission-1.html');
const visionDest = path.join(targetDir, 'vision-1.html');

function createOnlySectionPage(srcFile, destFile, titlePrefix) {
    let content = fs.readFileSync(srcFile, 'utf8');
    
    // We want to remove services, video, and team sections.
    const sectionsToRemove = [
        ['<!-- Services Section -->', '<!-- End Services Section -->'],
        ['<!-- start video-section -->', '<!-- end video-section -->'],
        ['<!-- start team section two -->', '<!-- end team section two -->'],
        ['<!-- start team section  -->', '<!-- end team section  -->'],
        ['<!-- start team section -->', '<!-- end team section -->']
    ];
    
    for (const [startMarker, endMarker] of sectionsToRemove) {
        const startIdx = content.indexOf(startMarker);
        const endIdx = content.indexOf(endMarker);
        if (startIdx !== -1 && endIdx !== -1) {
            content = content.substring(0, startIdx) + content.substring(endIdx + endMarker.length);
        }
    }
    
    fs.writeFileSync(destFile, content, 'utf8');
    console.log(`Created ${destFile}`);
}

createOnlySectionPage(missionSrc, missionDest, 'Mission');
createOnlySectionPage(visionSrc, visionDest, 'Vision');
