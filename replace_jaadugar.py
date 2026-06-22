import os
import glob

directory = r'c:\Users\91836\PERSONAL\edinmaster\ED'
files = glob.glob(os.path.join(directory, '*.html'))

target_string1 = '<p class="copyright-text">&copy; Copyright Reserved</p>'
target_string2 = '<p class="copyright-text">&copy;\nCopyright Reserved</p>'
target_string3 = ' by <a href="https://amanmishra.work" style="color: inherit; text-decoration: underline;">Aman Mishra</a>'
target_string4 = ' by <a href="https://amanmishra.work">Aman Mishra</a>'

for file in files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # First, if the old Aman Mishra strings exist, replace them with ' by Jaadugar'
    # Actually, if the string was already removed, we just have "&copy; Copyright Reserved"
    # So let's normalize everything to have " by Jaadugar"
    
    # Let's just do a clean replace
    if 'Aman Mishra' in content:
        # replace the whole a tag
        import re
        content = re.sub(r' by <a href="[^"]*".*?>Aman Mishra</a>', ' by Jaadugar', content)
        content = re.sub(r' by <a href="[^"]*">Aman Mishra</a>', ' by Jaadugar', content)
        
    if '<p class="copyright-text">&copy; Copyright Reserved</p>' in content:
        content = content.replace('<p class="copyright-text">&copy; Copyright Reserved</p>', '<p class="copyright-text">&copy; Copyright Reserved by Jaadugar</p>')
        
    if '<p class="copyright-text">&copy; \nCopyright Reserved</p>' in content:
         content = content.replace('<p class="copyright-text">&copy; \nCopyright Reserved</p>', '<p class="copyright-text">&copy; Copyright Reserved by Jaadugar</p>')
         
    if '<p class="copyright-text">&copy;\nCopyright Reserved</p>' in content:
         content = content.replace('<p class="copyright-text">&copy;\nCopyright Reserved</p>', '<p class="copyright-text">&copy; Copyright Reserved by Jaadugar</p>')
         
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f'Updated {file}')
