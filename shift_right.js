const fs = require('fs');
const path = 'c:/Users/91836/PERSONAL/edinmaster/ED/css/style.css';

const cssFix = `

/* Re-align Newmanind Footer Image slightly to the Right */
.footer-style-one .shape-1 {
    left: 38% !important;
}
@media (max-width: 1599.98px) {
  .footer-style-one .shape-1 { left: 30% !important; }
}
@media (max-width: 1299.98px) {
  .footer-style-one .shape-1 { left: 25% !important; }
}
`;

fs.appendFileSync(path, cssFix, 'utf8');
console.log('Appended slight right alignment CSS to style.css');
