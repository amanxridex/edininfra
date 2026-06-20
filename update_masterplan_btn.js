const fs = require('fs');

const filePath = 'c:/Users/91836/PERSONAL/edinmaster/ED/nihal-singh-enclave-rabupura-sector-20-yamuna-authority.html';
let content = fs.readFileSync(filePath, 'utf8');

if (!content.includes('master-plan-2041.pdf')) {
    const searchStr = 'View Site Location\r\n\t\t\t\t\t\t\t\t</a>';
    const replaceStr = `View Site Location\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<a href="master-plan-2041.pdf" target="_blank" class="glowing-masterplan-btn" style="text-decoration: none;">\r\n\t\t\t\t\t\t\t\t\t<i class="fa fa-file-pdf"></i> View Master Plan\r\n\t\t\t\t\t\t\t\t</a>`;
    
    // Also try without \r
    const searchStr2 = 'View Site Location\n\t\t\t\t\t\t\t\t</a>';
    const replaceStr2 = `View Site Location\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<a href="master-plan-2041.pdf" target="_blank" class="glowing-masterplan-btn" style="text-decoration: none;">\n\t\t\t\t\t\t\t\t\t<i class="fa fa-file-pdf"></i> View Master Plan\n\t\t\t\t\t\t\t\t</a>`;

    if (content.includes(searchStr)) {
        content = content.replace(searchStr, replaceStr);
        console.log("Replaced with CRLF");
    } else if (content.includes(searchStr2)) {
        content = content.replace(searchStr2, replaceStr2);
        console.log("Replaced with LF");
    } else {
        console.log("Could not find the target string.");
    }
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('Master plan button injected.');
