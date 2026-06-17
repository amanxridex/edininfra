import os
import glob
import re

html_files = glob.glob(r"c:\Users\91836\PERSONAL\edinmaster\ED\*.html")

for filepath in html_files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Replace "Read More" and "Reed More" with "Get In Touch" in the right-box
    content = re.sub(r'<span class="btn-title">Read More</span>', '<span class="btn-title">Get In Touch</span>', content, flags=re.IGNORECASE)
    content = re.sub(r'<span class="btn-title">Reed More</span>', '<span class="btn-title">Get In Touch</span>', content, flags=re.IGNORECASE)
    
    # In right-box, the button has href="page-about.html" (or similar) - change to "page-contact.html"
    # We can target the theme-btn btn-style-four
    content = re.sub(r'<a class="theme-btn btn-style-four" href="page-about.html">', '<a class="theme-btn btn-style-four" href="page-contact.html">', content)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

# Add CSS to center the nav menu
css_append = """
/* Center Navigation in headers */
.header-style-two .header-lower .inner-container .main-box {
    justify-content: space-between;
}
.header-style-two .header-lower .inner-container .main-box .left-box {
    gap: 0 !important;
    flex: 1;
}
.header-style-two .header-lower .inner-container .main-box .left-box .nav-outer {
    margin: 0 auto;
}
.header-style-two .header-lower .inner-container .main-box .right-box {
    flex: 1;
    display: flex;
    justify-content: flex-end;
}
.header-style-one .header-lower .inner-container .main-box .nav-outer {
    margin: 0 auto;
}
"""

css_path = r"c:\Users\91836\PERSONAL\edinmaster\ED\css\style.css"
with open(css_path, 'a', encoding='utf-8') as f:
    f.write(css_append)

print("Updated HTML and CSS.")
