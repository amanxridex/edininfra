import os

index_path = r"c:\Users\91836\PERSONAL\edinmaster\ED\index.html"
team_path = r"c:\Users\91836\PERSONAL\edinmaster\ED\page-our-team.html"

with open(index_path, 'r', encoding='utf-8') as f:
    index_lines = f.readlines()

team_section_lines = index_lines[929:1139] # lines 930 to 1139

with open(team_path, 'r', encoding='utf-8') as f:
    team_content = f.read()

# Replace the generic page content with Team specific details
team_content = team_content.replace("<title>ED Infratech | About Us</title>", "<title>ED Infratech | Our Team</title>")
team_content = team_content.replace('<div class="h1 title">About Us</div>', '<div class="h1 title">Our Team</div>')
team_content = team_content.replace('<li>About</li>', '<li>Our Team</li>')

# Now find where the team section two is and replace it
lines = team_content.split('\n')
start_idx = -1
end_idx = -1
for i, line in enumerate(lines):
    if "<!-- start team section two -->" in line:
        start_idx = i
    if "<!-- end team section two -->" in line:
        end_idx = i

if start_idx != -1 and end_idx != -1:
    new_lines = lines[:start_idx] + [line.rstrip('\n') for line in team_section_lines] + lines[end_idx+1:]
    team_content = '\n'.join(new_lines)

with open(team_path, 'w', encoding='utf-8') as f:
    f.write(team_content)

print("Updated page-our-team.html")
