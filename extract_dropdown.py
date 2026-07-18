import re
with open('c:\\Users\\91836\\PERSONAL\\edinmaster\\ED\\index.html', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('<li class="dropdown"><a href="page-projects.html">Projects</a>')
end_idx = text.find('</li>', text.find('Launching Soon</a></li>')) + 5
# actually, let's just find the closing </ul> and </li> of the dropdown.
print(text[idx:idx+1500])
