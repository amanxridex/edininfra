const fs = require('fs');
const path = require('path');

const targetPath = 'c:/Users/91836/PERSONAL/edinmaster/ED/page-projects.html';
let content = fs.readFileSync(targetPath, 'utf8');

// 1. Inject the custom styles for the select2 dropdowns
const styleBlock = `
        <style>
          .project-filter-bar .select2-container {
              min-width: 170px;
          }
          .project-filter-bar .select2-selection--single {
              background-color: #f8f9fa !important;
              border-radius: 20px !important;
              border: none !important;
              height: 46px !important;
              display: flex !important;
              align-items: center !important;
              padding-left: 15px !important;
              box-shadow: 0 4px 15px rgba(0,0,0,0.05) !important;
          }
          .project-filter-bar .select2-selection__rendered {
              color: #444 !important;
              font-weight: 500;
              font-size: 14px;
          }
          .project-filter-bar .select2-selection__arrow {
              height: 46px !important;
              right: 10px !important;
          }
          .select2-dropdown {
              border-radius: 15px !important;
              border: none !important;
              box-shadow: 0 10px 30px rgba(0,0,0,0.1) !important;
              overflow: hidden;
              padding: 10px 0;
          }
          .select2-results__option {
              padding: 8px 20px !important;
              font-size: 14px;
              transition: all 0.2s ease;
          }
          .select2-results__option--highlighted {
              background-color: #f8f9fa !important;
              color: #0D3B66 !important;
              font-weight: 600;
          }
        </style>
        <!-- Filter Bar -->
`;

content = content.replace('<!-- Filter Bar -->', styleBlock);

// 2. Add 'custom-select' class to all selects in the filter bar
content = content.replace(/<select class="form-select border-0" style="[^"]*">/g, '<select class="custom-select form-select border-0">');

fs.writeFileSync(targetPath, content, 'utf8');
console.log('Successfully added Select2 classes and custom styling!');
