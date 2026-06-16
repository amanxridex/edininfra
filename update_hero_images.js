const fs = require('fs');
const path = require('path');
const https = require('https');

const dir = 'c:/Users/91836/PERSONAL/edinmaster/ED/images/banner';
const htmlFile = 'c:/Users/91836/PERSONAL/edinmaster/ED/index.html';

const urls = [
    { url: 'https://svrfarms.com/wp-content/uploads/2025/04/New-Project-12-1024x538.webp', filename: 'banner1-1.webp' },
    { url: 'https://instafarms.in/blog/wp-content/uploads/2025/06/3144.jpg', filename: 'banner1-2.jpg' },
    { url: 'https://www.jkcement.com/wp-content/uploads/2023/08/beautiful-landscape-with-small-village-1024x575.jpg', filename: 'banner1-3.jpg' },
    { url: 'https://aceupdate.com/wp-content/uploads/2024/10/32-3.jpg', filename: 'banner1-4.jpg' },
    { url: 'https://www.rewariproperties.com/public/uploads/newsphotos/advantages-of-living-in-a-villa.jpg', filename: 'banner1-5.jpg' }
];

function download(url, dest) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        https.get(url, (response) => {
            if (response.statusCode === 200) {
                response.pipe(file);
                file.on('finish', () => {
                    file.close(resolve);
                });
            } else {
                // follow redirects if needed, but assuming direct links for now
                if (response.statusCode > 300 && response.statusCode < 400 && response.headers.location) {
                    https.get(response.headers.location, (res) => {
                        res.pipe(file);
                        file.on('finish', () => {
                            file.close(resolve);
                        });
                    }).on('error', reject);
                } else {
                    reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
                }
            }
        }).on('error', (err) => {
            fs.unlink(dest, () => {});
            reject(err);
        });
    });
}

async function run() {
    console.log('Downloading images...');
    for (const item of urls) {
        const dest = path.join(dir, item.filename);
        try {
            await download(item.url, dest);
            console.log(`Downloaded ${item.filename}`);
        } catch (e) {
            console.error(e);
        }
    }

    console.log('Updating index.html...');
    let html = fs.readFileSync(htmlFile, 'utf8');

    // 1. Update banner1-1.jpg to banner1-1.webp
    html = html.replace(/images\/banner\/banner1-1\.jpg/g, 'images/banner/banner1-1.webp');

    // 2. Add slide 4 and 5 by duplicating slide 3
    // We need to capture slide 3 which ends at the start of the next section or the closing wrapper.
    // The slide looks like: <div class="banner-block swiper-slide"> ... <div class="bg bg-image"><img src="images/banner/banner1-3.jpg" alt=""></div> ... </div>
    // Let's find exactly the block.
    
    // Instead of complex regex, let's just find the start of slide 3 and the start of the next div after it.
    const parts = html.split('<div class="banner-block swiper-slide">');
    if (parts.length >= 4) { // part 0 is before slide 1, part 1 is slide 1, part 2 is slide 2, part 3 is slide 3
        const slide3 = '<div class="banner-block swiper-slide">' + parts[3];
        // We know parts[3] contains the rest of the file. Wait, parts[3] goes all the way to the end!
        // No, we split by the start tag, so parts[3] is everything from slide 3 onwards until the END of the file (since there are only 3 slides).
        // Let's refine the split.
    }

    // Safest way: identify slide 3 content by matching banner1-3.jpg
    const slideRegex = /<div class="banner-block swiper-slide">[\s\S]*?<img src="images\/banner\/banner1-3\.jpg"[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/;
    const match = html.match(slideRegex);
    
    if (match) {
        let slide3Text = match[0];
        // Create slide 4
        let slide4Text = slide3Text.replace('banner1-3.jpg', 'banner1-4.jpg');
        // Create slide 5
        let slide5Text = slide3Text.replace('banner1-3.jpg', 'banner1-5.jpg');

        // Check if we haven't already added them
        if (!html.includes('banner1-4.jpg')) {
            html = html.replace(slide3Text, slide3Text + '\n' + slide4Text + '\n' + slide5Text);
            console.log('Added slides 4 and 5 to index.html');
        }
    }

    fs.writeFileSync(htmlFile, html, 'utf8');
    console.log('Done!');
}

run();
