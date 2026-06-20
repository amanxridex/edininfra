const fs = require('fs');
const path = require('path');

const targetDir = 'c:/Users/91836/PERSONAL/edinmaster/ED';

function fixExtraDiv(filename) {
    const filePath = path.join(targetDir, filename);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // The incorrect snippet looks like this:
    /*
              </div>
              
              </div>
            </div>
    */
    // We want to remove the extra </div>
    const badSnippet = `              </div>
              
              </div>
            </div>`;
    const goodSnippet = `              </div>
            </div>`;
            
    content = content.replace(badSnippet, goodSnippet);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed ${filename}`);
}

fixExtraDiv('mission-1.html');
fixExtraDiv('vision-1.html');
