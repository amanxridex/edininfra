const fs = require('fs');
const path = require('path');

const dir = 'c:/Users/91836/PERSONAL/edinmaster/ED';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Remove old OG tags if they exist to avoid duplication
    content = content.replace(/<meta property="og:.*?>/g, '');
    content = content.replace(/<meta name="twitter:.*?>/g, '');

    // Extract title
    let titleMatch = content.match(/<title>(.*?)<\/title>/i);
    let title = titleMatch ? titleMatch[1] : 'ED Infratech - Real Estate';

    // Extract description
    let descMatch = content.match(/<meta name="description" content="(.*?)">/i);
    let description = descMatch ? descMatch[1] : 'Premium real estate projects in Noida, Jewar, and YEIDA Region.';

    // Choose image
    let imageUrl = 'https://edinfratech.com/NSE1.png';
    if (file.includes('vihaan')) {
        imageUrl = 'https://edinfratech.com/images/resource/VIHAAN.png';
    }

    let url = `https://edinfratech.com/${file === 'index.html' ? '' : file}`;

    const ogTags = `
<!-- Open Graph / SEO Meta Tags -->
<meta property="og:title" content="${title}">
<meta property="og:description" content="${description}">
<meta property="og:image" content="${imageUrl}">
<meta property="og:url" content="${url}">
<meta property="og:type" content="website">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${title}">
<meta name="twitter:description" content="${description}">
<meta name="twitter:image" content="${imageUrl}">
`;

    // Insert before </head>
    if (content.includes('</head>')) {
        content = content.replace('</head>', ogTags + '</head>');
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Added SEO tags to ${file}`);
    }
});
