import os
import glob

html_files = glob.glob('*.html')

target = '                  <li><a href="page-services.html">Services</a></li>'
replacement = '''                  <li class="dropdown"><a href="page-services.html">Services</a>
                    <ul>
                      <li><a href="page-construction-management.html">Construction Management</a></li>
                      <li><a href="page-architecture-design.html">Architecture &amp; Design</a></li>
                      <li><a href="page-investment-capital.html">Investment &amp; Capital</a></li>
                      <li><a href="page-projects-management.html">Projects Management</a></li>
                      <li><a href="page-gated-community.html">Gated Community Noida</a></li>
                      <li><a href="page-contact.html">Legal Services</a></li>
                    </ul>
                  </li>'''

for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if target in content:
        content = content.replace(target, replacement)
        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {file}")
