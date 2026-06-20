def fix_all_html():
    with open('all.html', 'r', encoding='utf-8') as f:
        content = f.read()
        
    content = content.replace('<a href="#" style="text-decoration: none; color: inherit;">', '<a href="gaur-chrysalis.html" style="text-decoration: none; color: inherit;">', 1)
    content = content.replace('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80', 'GAUR1.jpg', 1)
    
    with open('all.html', 'w', encoding='utf-8') as f:
        f.write(content)

if __name__ == "__main__":
    fix_all_html()
