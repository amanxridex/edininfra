import os

files = {
    "page-our-mission.html": {"Title": "Our Mission", "Breadcrumb": "Mission", "SubTitle": "Our Mission", "Headline": "Defining Our Mission."},
    "page-our-vision.html": {"Title": "Our Vision", "Breadcrumb": "Vision", "SubTitle": "Our Vision", "Headline": "Looking into the Future."},
    "page-our-core-values.html": {"Title": "Our Core Values", "Breadcrumb": "Core Values", "SubTitle": "Our Core Values", "Headline": "Principles that Guide Us."},
    "page-about-our-company.html": {"Title": "About Our Company", "Breadcrumb": "Company", "SubTitle": "About Our Company", "Headline": "Who We Are."},
    "page-what-we-do.html": {"Title": "What We Do", "Breadcrumb": "What We Do", "SubTitle": "What We Do", "Headline": "Our Services and Expertise."}
}

for filename, data in files.items():
    filepath = os.path.join(r"c:\Users\91836\PERSONAL\edinmaster\ED", filename)
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    content = content.replace("<title>ED Infratech | About Us</title>", f"<title>ED Infratech | {data['Title']}</title>")
    content = content.replace('<div class="h1 title">About Us</div>', f'<div class="h1 title">{data["Title"]}</div>')
    content = content.replace('<li>About</li>', f'<li>{data["Breadcrumb"]}</li>')
    content = content.replace('<div class="h6 sub-title">About our company</div>', f'<div class="h6 sub-title">{data["SubTitle"]}</div>')
    content = content.replace('<div class="h2 title char-animation">Where Vision Meets Reality.</div>', f'<div class="h2 title char-animation">{data["Headline"]}</div>')

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

print("Updated 5 generic files.")
