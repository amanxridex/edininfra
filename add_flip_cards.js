const fs = require('fs');
const path = require('path');

const targetPath = 'c:/Users/91836/PERSONAL/edinmaster/ED/page-services.html';
let content = fs.readFileSync(targetPath, 'utf8');

const css = `
<style>
/* Flip Card CSS */
.service-block-two .inner-block {
    background-color: transparent;
    perspective: 1000px; 
    height: 100%;
}

.service-block-two .inner-block-flip-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transform-style: preserve-3d;
}

.service-block-two .inner-block:hover .inner-block-flip-inner {
    transform: rotateY(180deg);
}

.service-block-two .flip-front, .service-block-two .flip-back {
    position: relative;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border-radius: 30px;
    background: #ffffff;
    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
}

.service-block-two .flip-back {
    transform: rotateY(180deg);
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(135deg, #0D3B66 0%, #082544 100%);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px;
    text-align: left;
}

.service-block-two .flip-back .h4 {
    color: #c8a032;
    margin-bottom: 15px;
}

.service-block-two .flip-back p {
    color: rgba(255,255,255,0.9);
    font-size: 15px;
    line-height: 1.6;
    margin-bottom: 20px;
}

.service-block-two .flip-back ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.service-block-two .flip-back ul li {
    position: relative;
    padding-left: 20px;
    margin-bottom: 10px;
    color: rgba(255,255,255,0.8);
    font-size: 14px;
}

.service-block-two .flip-back ul li::before {
    content: "✓";
    position: absolute;
    left: 0;
    color: #c8a032;
    font-weight: bold;
}
</style>
`;

if (!content.includes('/* Flip Card CSS */')) {
    content = content.replace('</head>', css + '</head>');
}

const descriptions = {
    "Construction Management": {
        desc: "We take full ownership of the construction process, ensuring seamless execution from blueprint to handover.",
        points: ["End-to-End Supervision", "Cost Management", "Quality Control", "Timely Delivery"]
    },
    "Architecture &amp; Design": {
        desc: "Our architectural team creates visionary designs that blend aesthetics with functionality and sustainability.",
        points: ["Master Planning", "Interior Design", "Sustainable Arch", "3D Visualization"]
    },
    "Investment &amp; Capital": {
        desc: "We provide strategic capital allocation and real estate investment advisory for maximum ROI.",
        points: ["Portfolio Optimization", "Risk Mitigation", "High-Yield Investments", "Market Analysis"]
    },
    "Projects Management": {
        desc: "Dedicated project managers ensure all stakeholders are aligned, mitigating risks and delays.",
        points: ["Vendor Coordination", "Risk Management", "Compliance & Safety", "Resource Allocation"]
    },
    "Gated Community Noida": {
        desc: "Building premium gated communities with world-class amenities and unparalleled security in Noida.",
        points: ["Prime Locations", "Smart Homes", "Clubhouse Facilities", "24/7 Security"]
    },
    "Legal Services": {
        desc: "Expert legal assistance for property acquisition, ensuring a smooth and compliant transaction process.",
        points: ["Title Verification", "RERA Compliance", "Contract Drafting", "Dispute Resolution"]
    }
};

let parts = content.split('<div class="inner-block">');
let newContent = parts[0];

for (let i = 1; i < parts.length; i++) {
    let part = parts[i];
    
    let titleMatch = part.match(/<div class="h4 title"><a href="[^"]+">(.*?)<\/a><\/div>/);
    let title = titleMatch ? titleMatch[1] : "Service Details";
    let backData = descriptions[title] || { desc: "Detailed information about this service.", points: ["Expert execution", "Quality assured"] };
    
    let backPointsHTML = '';
    for(let pt of backData.points) {
        backPointsHTML += '<li>' + pt + '</li>\n';
    }
    
    let backHTML = '<div class="flip-back">\n<div class="h4">' + title.replace('&amp;', '&') + '</div>\n<p>' + backData.desc + '</p>\n<ul>\n' + backPointsHTML + '</ul>\n</div>';

    let imgBoxIdx = part.indexOf('<div class="images-box">');
    if (imgBoxIdx !== -1) {
        let firstDivClose = part.indexOf('</div>', imgBoxIdx);
        let secondDivClose = part.indexOf('</div>', firstDivClose + 1);
        
        let frontContent = part.substring(0, secondDivClose + 6);
        let restContent = part.substring(secondDivClose + 6);
        
        let newBlockHTML = '<div class="inner-block-flip-inner">\n<div class="flip-front">\n' + frontContent + '\n</div>\n' + backHTML + '\n</div>';
        
        newContent += newBlockHTML + restContent;
    } else {
        newContent += '<div class="inner-block">' + part;
    }
}

fs.writeFileSync(targetPath, newContent, 'utf8');
console.log('Added flip card effect successfully!');
