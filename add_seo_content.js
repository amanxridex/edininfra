const fs = require('fs');
const path = require('path');

const dir = 'c:/Users/91836/PERSONAL/edinmaster/ED';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const jsonLd = `
<!-- SEO Structured Data -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "name": "ED Infratech",
  "image": "https://edinfratech.com/images/logo2.png",
  "url": "https://edinfratech.com/",
  "telephone": "+918368337869",
  "email": "edinfratech6@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "GAURAVDEEP HEIGHTS, B-23A, Sector-62, Near Fortis Hospital",
    "addressLocality": "Noida",
    "addressRegion": "UP",
    "addressCountry": "IN"
  },
  "description": "ED Infratech is the leading real estate developer offering premium freehold plots, luxury villas, and commercial real estate in Noida, YEIDA Region, and Jewar Airport.",
  "priceRange": "₹₹₹"
}
</script>
`;

const seoMetaKeywords = '<meta name="keywords" content="ED Infratech, ED Infratech Real Estate, Nihal Singh Enclave, Vihaan Enclave, Yamuna Authority Plots, YEIDA Plots, Jewar Airport Real Estate, Freehold Plots Noida, Real Estate Developer Noida, Property Investment Delhi NCR, Residential Plots Rabupura, Khair Somna Road Plots">';

const seoFooterParagraph = `
              <div class="footer-widget subscribe-widget wow fadeInLeft" data-wow-delay="200ms">
                 <div class="h5 widget-title" style="margin-bottom: 15px; color: #fff;">About ED Infratech</div>
                 <p class="text" style="color: rgba(255, 255, 255, 0.7); line-height: 1.8; text-align: justify; font-size: 14px;">
                    <strong>ED Infratech</strong> is the leading real estate developer and property investment firm in the NCR region. We specialize in premium freehold plots, luxury villas, and high-yield commercial real estate across rapidly developing corridors like <strong>Yamuna Expressway (YEIDA)</strong>, <strong>Noida</strong>, and <strong>Jewar Airport</strong>. Whether you are looking for secure gated communities like <em>Nihal Singh Enclave</em> or high-growth investment plots in <em>Vihaan Enclave</em>, ED Infratech delivers unparalleled value, immediate possession, and fully registered properties.
                 </p>
              </div>
`;

files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Add JSON-LD before </head> if not already there
    if (!content.includes('application/ld+json')) {
        content = content.replace('</head>', jsonLd + '\n</head>');
    }

    // Add Meta Keywords before </head> if not already there
    if (!content.includes('name="keywords"')) {
        content = content.replace('<meta name="description"', seoMetaKeywords + '\n<meta name="description"');
    }

    // Replace the specific footer section
    if (content.includes('<div class="h5 text">Get the latest inspiration &amp; insights</div>')) {
        content = content.replace(
            /<div class="footer-widget subscribe-widget wow fadeInLeft" data-wow-delay="200ms">[\s\S]*?<div class="h5 text">Get the latest inspiration &amp; insights<\/div>[\s\S]*?<\/div>/,
            seoFooterParagraph
        );
    } else if (content.includes('<div class="h5 text">Get the latest inspiration & insights</div>')) {
		content = content.replace(
            /<div class="footer-widget subscribe-widget wow fadeInLeft" data-wow-delay="200ms">[\s\S]*?<div class="h5 text">Get the latest inspiration & insights<\/div>[\s\S]*?<\/div>/,
            seoFooterParagraph
        );
	}

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated SEO on ${file}`);
});
