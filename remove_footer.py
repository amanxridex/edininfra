import os
import glob

directory = r'c:\Users\91836\PERSONAL\edinmaster\ED'
files = glob.glob(os.path.join(directory, '*.html'))

target_string = ' by <a href="https://amanmishra.work" style="color: inherit; text-decoration: underline;">Aman Mishra</a>'

for file in files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if target_string in content:
        content = content.replace(target_string, '')
        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f'Updated {file}')
