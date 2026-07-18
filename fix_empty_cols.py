import os
import re

directory = 'c:\\Users\\91836\\PERSONAL\\edinmaster\\ED'

files = [
    'index.html',
    'page-about-our-company.html',
    'page-about.html',
    'page-our-team.html',
    'page-our-core-values.html',
    'page-team.html'
]

# Pattern to find a div containing 'col' in its class, which only contains whitespace, up to its closing tag
pattern = re.compile(r'<div[^>]*class="[^"]*col[^"]*"[^>]*>\s*</div>', re.IGNORECASE)

for filename in files:
    filepath = os.path.join(directory, filename)
    if os.path.exists(filepath):
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        new_content = pattern.sub('', content)
        
        if new_content != content:
            print(f"Removed empty cols from {filename}")
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
