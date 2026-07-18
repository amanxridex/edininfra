import glob
import os

def fix_projects_dropdown():
    html_files = glob.glob('*.html')
    
    old_code = '<li><a href="page-projects.html">Projects</a></li>'
    new_code = """<li class="dropdown"><a href="page-projects.html">Projects</a>
                    <ul>
                      <li class="dropdown"><a href="#">Plots</a>
                        <ul>
                          <li><a href="#">rera plots</a></li>
                          <li><a href="#">authority plots</a></li>
                          <li><a href="#">freehold plots</a></li>
                        </ul>
                      </li>
                      <li><a href="flats.html">Flats</a></li>
                      <li><a href="#">Commercial</a></li>
                      <li><a href="#">Villa</a></li>
                      <li><a href="#">Farmhouse</a></li>
                      <li><a href="#">Independent House</a></li>
                      <li><a href="#">Agriculture Land</a></li>
                      <li><a href="#">Super Luxury</a></li>
                      <li><a href="#">Launching Soon</a></li>
                    </ul>
                  </li>"""
                  
    count = 0
    for file in html_files:
        # Avoid fixing index.html if it's already correct, though old_code might not be found anyway
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()
            
        if old_code in content:
            new_content = content.replace(old_code, new_code)
            with open(file, 'w', encoding='utf-8') as f:
                f.write(new_content)
            count += 1
            print(f"Updated {file}")
            
    print(f"Updated {count} files.")

if __name__ == "__main__":
    fix_projects_dropdown()
