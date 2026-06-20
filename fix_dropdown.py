import glob

def fix_about_us_dropdown():
    html_files = glob.glob('*.html')
    
    old_code = '<li><a href="page-about.html">About Us</a></li>'
    new_code = """<li class="dropdown"><a href="page-about.html">About Us</a>
                    <ul>
                      <li><a href="page-about-our-company.html">About Our Company</a></li>
                      <li><a href="mission-1.html">Our Mission</a></li>
                      <li><a href="vision-1.html">Our Vision</a></li>
                      <li><a href="page-our-core-values.html">Our Core Values</a></li>
                      <li><a href="page-team.html">Our Team</a></li>
                    </ul>
                  </li>"""
                  
    for file in html_files:
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()
            
        if old_code in content:
            new_content = content.replace(old_code, new_code)
            with open(file, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated {file}")

if __name__ == "__main__":
    fix_about_us_dropdown()
