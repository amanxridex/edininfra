import glob
import re

def fix_breadcrumbs():
    html_files = glob.glob('*.html')
    
    # We want to find:
    # <ul class="page-breadcrumb">
    #   <li><a href="index.html">Home</a></li>
    #   <li class="dropdown"><a href="page-about.html">About Us</a>
    #     <ul> ... </ul>
    #   </li>
    #   <li>Some Page Name</li>
    # </ul>
    
    # Since the exact spacing might vary, let's use regex to find the page-breadcrumb block and clean it up.
    
    pattern = re.compile(r'(<ul class="page-breadcrumb">\s*<li><a href="index.html">Home</a></li>\s*)<li class="dropdown"><a href="page-about.html">About Us</a>\s*<ul>\s*<li><a href="page-about-our-company\.html">About Our Company</a></li>\s*<li><a href="mission-1\.html">Our Mission</a></li>\s*<li><a href="vision-1\.html">Our Vision</a></li>\s*<li><a href="page-our-core-values\.html">Our Core Values</a></li>\s*<li><a href="page-team\.html">Our Team</a></li>\s*</ul>\s*</li>\s*', re.DOTALL)
    
    for file in html_files:
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()
            
        new_content, count = pattern.subn(r'\1', content)
        
        # Also clean up the case where it was just <li><a href="page-about.html">About Us</a></li> in the breadcrumb
        pattern2 = re.compile(r'(<ul class="page-breadcrumb">\s*<li><a href="index.html">Home</a></li>\s*)<li><a href="page-about.html">About Us</a></li>\s*', re.DOTALL)
        new_content, count2 = pattern2.subn(r'\1', new_content)
        
        if count > 0 or count2 > 0:
            with open(file, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Fixed breadcrumbs in {file}")

if __name__ == "__main__":
    fix_breadcrumbs()
