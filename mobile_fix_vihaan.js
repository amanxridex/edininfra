const fs = require('fs');
const targetPath = 'c:/Users/91836/PERSONAL/edinmaster/ED/vihaan-enclave-khair-somna-road.html';
let content = fs.readFileSync(targetPath, 'utf8');

const additionalStyles = `
			@media(max-width: 767px) {
				.inquiry-form {
					flex-direction: column !important;
					align-items: stretch !important;
				}
				.inquiry-form h4 {
					margin-bottom: 15px !important;
					text-align: center;
				}
				.inquiry-form input, .inquiry-form button {
					width: 100% !important;
					min-width: 100% !important;
					margin-bottom: 5px;
				}
				.inquiry-actions {
					flex-direction: column !important;
				}
				.inquiry-actions a {
					width: 100% !important;
				}
				.project-inquiry-bar {
					padding: 20px 15px !important;
				}
				.project-details__details-box {
					padding: 30px 20px !important;
				}
			}
`;

content = content.replace('</style>', additionalStyles + '\t\t\t</style>');

fs.writeFileSync(targetPath, content, 'utf8');
console.log('Mobile styles added to Vihaan Enclave page');
