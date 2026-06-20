const fs = require('fs');
const path = require('path');

const targetDir = 'c:/Users/91836/PERSONAL/edinmaster/ED';

const missionText = "At ED Infratech, our mission is to redefine the real estate landscape by delivering innovative, sustainable, and high-quality infrastructure solutions. We are committed to exceeding client expectations, fostering community growth, and setting new benchmarks for excellence in every project we undertake.";
const visionText = "Our vision is to be the most trusted and forward-thinking real estate developer, shaping the future of modern living. We aim to create iconic spaces that inspire communities, embrace sustainable technologies, and leave a lasting legacy for generations to come.";
const coreValuesText = "Integrity, innovation, and excellence are the cornerstones of ED Infratech. We believe in transparent practices, putting our customers first, and maintaining the highest standards of quality and safety in all our developments.";
const aboutText = "ED Infratech is a premier real estate and infrastructure development company dedicated to transforming visions into tangible realities. With a rich history of successful projects and a relentless drive for perfection, we build spaces that elevate lifestyles and empower businesses.";
const defaultText = "We bring unparalleled expertise and dedication to every project, ensuring that our solutions align perfectly with your strategic goals. Our team of professionals is driven by a passion for excellence and a commitment to delivering outstanding results that stand the test of time.";

const placeholder = "Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur ligula, eget egestas magna mi ut arcu. Phasellus nec odio orci. Where Vision Meets Reality.";

function replaceContentSmartly() {
    fs.readdirSync(targetDir).forEach(file => {
        if (file.endsWith('.html')) {
            const filePath = path.join(targetDir, file);
            let content = fs.readFileSync(filePath, 'utf8');
            let modified = false;
            
            // We need to find all occurrences of the placeholder and look at the preceding ~200 characters to determine the context
            let index = content.indexOf(placeholder);
            while (index !== -1) {
                const contextStart = Math.max(0, index - 200);
                const context = content.substring(contextStart, index).toLowerCase();
                
                let newText = defaultText;
                if (context.includes('mission')) {
                    newText = missionText;
                } else if (context.includes('vision')) {
                    newText = visionText;
                } else if (context.includes('core values') || context.includes('guide us')) {
                    newText = coreValuesText;
                } else if (context.includes('about') || context.includes('company')) {
                    newText = aboutText;
                }
                
                content = content.substring(0, index) + newText + content.substring(index + placeholder.length);
                modified = true;
                
                // Find next occurrence
                index = content.indexOf(placeholder);
            }
            
            if (modified) {
                fs.writeFileSync(filePath, content, 'utf8');
                console.log(`Updated ${file}`);
            }
        }
    });
}

replaceContentSmartly();
