const fs = require('fs');
const path = 'c:/Users/91836/PERSONAL/edinmaster/ED/css/style.css';

const cssFix = `

/* Upgrade Main Menu Text: Bigger and Bolder */
.main-header .main-menu .navigation > li > a {
    font-size: 18px !important;
    font-weight: 700 !important;
}
`;

fs.appendFileSync(path, cssFix, 'utf8');
console.log('Appended menu text upgrade CSS to style.css');
