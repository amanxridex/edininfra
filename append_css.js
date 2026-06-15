const fs = require('fs');
const path = 'c:/Users/91836/PERSONAL/edinmaster/ED/css/style.css';

const cssFix = `

/* Fix for Newmanind Footer Image */
.footer-style-one .shape-1 {
    left: 50% !important;
    transform: translateX(-50%);
    bottom: 0 !important;
}
.footer-style-one .shape-1 img {
    max-height: 520px;
    width: auto;
    object-fit: contain;
    display: block;
}
@media (max-width: 1599.98px) {
  .footer-style-one .shape-1 { left: 50% !important; }
}
@media (max-width: 1299.98px) {
  .footer-style-one .shape-1 { left: 50% !important; }
}
@media (max-width: 1199.98px) {
  .footer-style-one .shape-1 { display: none !important; }
}
`;

fs.appendFileSync(path, cssFix, 'utf8');
console.log('Appended CSS fix to style.css');
