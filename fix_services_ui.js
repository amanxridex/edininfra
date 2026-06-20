const fs = require('fs');
const path = require('path');

const targetPath = 'c:/Users/91836/PERSONAL/edinmaster/ED/page-services.html';
let content = fs.readFileSync(targetPath, 'utf8');

// The missing `<div class="inner-block">` caused the layout and hover issues.
// We just need to add it right before `<div class="inner-block-flip-inner">`.

content = content.replace(/<div class="inner-block-flip-inner">/g, '<div class="inner-block">\n<div class="inner-block-flip-inner">');

fs.writeFileSync(targetPath, content, 'utf8');
console.log('Fixed page-services.html HTML structure.');
