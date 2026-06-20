import sys

def replace_team_section(filename, start_marker, end_marker, new_content):
    with open(filename, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    start_idx = -1
    end_idx = -1
    
    for i, line in enumerate(lines):
        if start_marker in line:
            # We want to keep <div class="swiper-wrapper"> which is the line AFTER start_marker
            start_idx = i + 2
        if end_marker in line and start_idx != -1 and end_idx == -1:
            # We want to keep </div></div> which are 2 lines before end_marker
            end_idx = i - 2
            
    if start_idx != -1 and end_idx != -1:
        new_lines = lines[:start_idx] + [new_content + '\n'] + lines[end_idx:]
        with open(filename, 'w', encoding='utf-8') as f:
            f.writelines(new_lines)
        print(f"Updated {filename}")
    else:
        print(f"Could not find markers in {filename}")

team_html = '''          <div class="team-block swiper-slide featured">
            <div class="inner-block">
              <div class="images-box">
                <div class="image"><img src="images/resource/rahul.jpeg" alt=""></div>
                <svg class="shape" width="304" height="543" viewBox="0 0 304 543" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M304 0H103.746L0 288.319H86.8571L14.4762 543L265.397 192.212H176.127L304 0Z"></path>
                </svg>
                <ul class="social-link">
                  <li><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
                  <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                  <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                </ul>
              </div>
              <div class="author-info">
                <div class="inner-box">
                   <div class="h4 name"><a href="page-team-details.html">Rahul Sharma</a></div>
                  <div class="designation">Managing Director</div>
                </div>
              </div>
            </div>
          </div>
          <div class="team-block swiper-slide">
            <div class="inner-block">
              <div class="images-box">
                <div class="image"><img src="images/resource/aman.png" alt=""></div>
                <svg class="shape" width="304" height="543" viewBox="0 0 304 543" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M304 0H103.746L0 288.319H86.8571L14.4762 543L265.397 192.212H176.127L304 0Z"></path>
                </svg>
                <ul class="social-link">
                  <li><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
                  <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                  <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                </ul>
              </div>
              <div class="author-info">
                <div class="inner-box">
                   <div class="h4 name"><a href="page-team-details.html">Aman</a></div>
                  <div class="designation">Sales and Marketing Head</div>
                </div>  
              </div>
            </div>
          </div>
          <div class="team-block swiper-slide">
            <div class="inner-block">
              <div class="images-box">
                <div class="image"><img src="images/resource/khushi.png" alt=""></div>
                <svg class="shape" width="304" height="543" viewBox="0 0 304 543" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M304 0H103.746L0 288.319H86.8571L14.4762 543L265.397 192.212H176.127L304 0Z"></path>
                </svg>
                <ul class="social-link">
                  <li><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
                  <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                  <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                </ul>
              </div>
              <div class="author-info">
                <div class="inner-box">
                   <div class="h4 name"><a href="page-team-details.html">Khushi Jha</a></div>
                  <div class="designation">HR Head</div>
                </div>
              </div>
            </div>
          </div>
          <div class="team-block swiper-slide">
            <div class="inner-block">
              <div class="images-box">
                <div class="image"><img src="images/resource/divyansh.jpeg" alt=""></div>
                <svg class="shape" width="304" height="543" viewBox="0 0 304 543" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M304 0H103.746L0 288.319H86.8571L14.4762 543L265.397 192.212H176.127L304 0Z"></path>
                </svg>
                <ul class="social-link">
                  <li><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
                  <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                  <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                </ul>
              </div>
              <div class="author-info">
                <div class="inner-box">
                   <div class="h4 name"><a href="page-team-details.html">Divyansh Bhatnagar</a></div>
                  <div class="designation">Investment consultant</div>
                </div>
              </div>
            </div>
          </div>
          <div class="team-block swiper-slide">
            <div class="inner-block">
              <div class="images-box">
                <div class="image"><img src="images/resource/yuvraj.jpeg" alt=""></div>
                <svg class="shape" width="304" height="543" viewBox="0 0 304 543" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M304 0H103.746L0 288.319H86.8571L14.4762 543L265.397 192.212H176.127L304 0Z"></path>
                </svg>
                <ul class="social-link">
                  <li><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
                  <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                  <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                </ul>
              </div>
              <div class="author-info">
                <div class="inner-box">
                   <div class="h4 name"><a href="page-team-details.html">Yuvraj Rai</a></div>
                  <div class="designation">Sales Manager</div>
                </div>
              </div>
            </div>
          </div>'''

# For index.html
replace_team_section('index.html', '<div class="swiper-container team-h1-slider pb-0">', '<!-- end team section  -->', team_html)

# For page-our-team.html (check the exact end marker first)
replace_team_section('page-our-team.html', '<div class="swiper-container team-h1-slider pb-0">', '<!-- end team section  -->', team_html)
