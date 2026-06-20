const fs = require('fs');
const targetPath = 'c:/Users/91836/PERSONAL/edinmaster/ED/page-projects.html';
let content = fs.readFileSync(targetPath, 'utf8');

const additionalStyles = `
          @media(max-width: 991px) {
              .filter-inner {
                  border-radius: 20px !important;
                  padding: 20px !important;
                  flex-direction: column !important;
                  align-items: stretch !important;
              }
              .filter-group {
                  margin-right: 0 !important;
                  margin-bottom: 15px !important;
                  flex-direction: column !important;
                  align-items: stretch !important;
              }
              .filter-label {
                  margin-bottom: 5px !important;
              }
              .project-filter-bar .select2-container {
                  width: 100% !important;
              }
              .filter-action button {
                  width: 100% !important;
                  justify-content: center;
              }
          }
`;

content = content.replace('</style>', additionalStyles + '        </style>');

fs.writeFileSync(targetPath, content, 'utf8');
console.log('Mobile styles added to projects page filter bar');
