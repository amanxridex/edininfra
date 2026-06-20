const fs = require('fs');
const path = require('path');

const targetDir = 'c:/Users/91836/PERSONAL/edinmaster/ED';

function fixExtraDiv(filename) {
    const filePath = path.join(targetDir, filename);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace:
    //               </div>
    //               
    //               </div>
    //             </div>
    // with:
    //               </div>
    //             </div>
    
    const regex = /<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/section>/g;
    const replacement = `</div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>`;
    
    let newContent = content.replace(regex, replacement);
    if (newContent !== content) {
        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log(`Fixed ${filename}`);
    } else {
        console.log(`Failed to fix ${filename}`);
    }
}

fixExtraDiv('mission-1.html');
fixExtraDiv('vision-1.html');
