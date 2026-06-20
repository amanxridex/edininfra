import os
import glob

def add_about_us():
    html_files = glob.glob('*.html')
    for file in html_files:
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if About Us is already in the navigation menu
        if 'page-about.html">About Us</a>' in content or 'page-about-our-company.html">About Us</a>' in content:
            continue
            
        # Add About Us after Home
        # The pattern looks like: <li class="current"><a href="index.html">Home</a></li>
        # or <li><a href="index.html">Home</a></li>
        new_content = content.replace(
            '<a href="index.html">Home</a></li>\n',
            '<a href="index.html">Home</a></li>\n                    <li><a href="page-about.html">About Us</a></li>\n'
        )
        # also handle case without newline
        new_content = new_content.replace(
            '<a href="index.html">Home</a></li><li',
            '<a href="index.html">Home</a></li><li><a href="page-about.html">About Us</a></li><li'
        )
        
        if new_content != content:
            with open(file, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated {file}")

if __name__ == "__main__":
    add_about_us()
