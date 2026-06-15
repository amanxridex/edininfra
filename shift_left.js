const fs = require('fs');
const path = 'c:/Users/91836/PERSONAL/edinmaster/ED/css/style.css';

const cssFix = `

/* Re-align Newmanind Footer Image to Left */
.footer-style-one .shape-1 {
    left: 30.5% !important;
    transform: none !important;
}
@media (max-width: 1599.98px) {
  .footer-style-one .shape-1 { left: 23% !important; }
}
@media (max-width: 1299.98px) {
  .footer-style-one .shape-1 { left: 19% !important; }
}
`;

fs.appendFileSync(path, cssFix, 'utf8');
console.log('Appended left alignment CSS to style.css');
