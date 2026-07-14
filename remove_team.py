import os
import re

directory = 'c:\\Users\\91836\\PERSONAL\\edinmaster\\ED'
names_to_remove = ['Divyaansh Bhatnagar', 'Malvinder Chauhan', 'Divyaansh', 'Malvinder']

files = [
    'index.html',
    'page-about-our-company.html',
    'page-about.html',
    'page-our-team.html',
    'page-our-core-values.html',
    'page-team.html'
]

# Regex pattern to match a team-block div and its content up to the matching name
# This is tricky with regex. Let's use a non-greedy approach to find blocks that contain the name
pattern = re.compile(r'(<div[^>]*class="[^"]*team-block[^"]*"[^>]*>.*?)(Divyaansh|Malvinder)(.*?</div>\s*</div>\s*</div>\s*</div>)', re.DOTALL | re.IGNORECASE)

# Actually, the team block might have different depth of closing divs.
# It's better to just use a script to find the start of the block and count divs.
def remove_blocks(text, keywords):
    for keyword in keywords:
        while True:
            idx = text.find(keyword)
            if idx == -1:
                break
            
            # Find the closest '<div class="team-block' before this idx
            start_idx = text.rfind('<div', 0, idx)
            # wait, it might be an inner div. We need the outer team-block div.
            # Let's search backwards for 'team-block'
            block_idx = text.rfind('team-block', 0, idx)
            if block_idx == -1:
                # Can't find team block, break to avoid infinite loop
                break
            
            start_idx = text.rfind('<div', 0, block_idx)
            
            if start_idx == -1:
                break
                
            # Now we need to find the matching closing div for this start_idx
            div_count = 1
            curr_idx = start_idx + 4
            end_idx = -1
            while div_count > 0 and curr_idx < len(text):
                next_div_start = text.find('<div', curr_idx)
                next_div_end = text.find('</div', curr_idx)
                
                if next_div_end == -1:
                    break
                    
                if next_div_start != -1 and next_div_start < next_div_end:
                    div_count += 1
                    curr_idx = next_div_start + 4
                else:
                    div_count -= 1
                    curr_idx = next_div_end + 5
            
            if div_count == 0:
                end_idx = curr_idx + 1 # include the '>'
                # Also include any trailing whitespace?
                while end_idx < len(text) and text[end_idx] in ['\n', '\r', '\t', ' ']:
                    end_idx += 1
                
                text = text[:start_idx] + text[end_idx:]
            else:
                break
    return text

for filename in files:
    filepath = os.path.join(directory, filename)
    if os.path.exists(filepath):
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        new_content = remove_blocks(content, ['Divyaansh', 'Malvinder'])
        
        if new_content != content:
            print(f"Removed from {filename}")
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
