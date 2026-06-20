const fs = require('fs');
const targetPath = 'c:/Users/91836/PERSONAL/edinmaster/ED/vihaan-enclave-khair-somna-road.html';
let content = fs.readFileSync(targetPath, 'utf8');

// I'll run git checkout to undo my corrupted edit
require('child_process').execSync('git checkout -- ' + targetPath);
content = fs.readFileSync(targetPath, 'utf8');

// The original line was:
// <div class="project-inquiry-bar wow fadeInUp" data-wow-delay="0.1s" style="background: linear-gradient(135deg, #0D3B66 0%, #082544 100%); border-radius: 20px; padding: 25px 30px; margin-bottom: 50px; box-shadow: 0 20px 40px rgba(0,0,0,0.15);">
const targetString = '<div class="project-inquiry-bar wow fadeInUp" data-wow-delay="0.1s" style="background: linear-gradient(135deg, #0D3B66 0%, #082544 100%); border-radius: 20px; padding: 25px 30px; margin-bottom: 50px; box-shadow: 0 20px 40px rgba(0,0,0,0.15);">';
const newString = '<div class="project-inquiry-bar wow fadeInUp" data-wow-delay="0.1s" style="margin-top: 50px; background: linear-gradient(135deg, #0D3B66 0%, #082544 100%); border-radius: 20px; padding: 25px 30px; margin-bottom: 50px; box-shadow: 0 20px 40px rgba(0,0,0,0.15); clear: both;">';

content = content.replace(targetString, newString);
fs.writeFileSync(targetPath, content, 'utf8');
console.log('Fixed inquiry bar margin!');
