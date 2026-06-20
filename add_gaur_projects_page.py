def add_gaur_to_projects():
    with open('page-projects.html', 'r', encoding='utf-8') as f:
        content = f.read()

    gaur_block = """
            <div class="col-md-6 project-item" data-type="flats" data-city="yamuna">
              <div class="project-box1 wow fadeInUp" data-wow-delay=".05s">
                <div class="inner-box">
                  <div class="thumb">
                    <a href="gaur-chrysalis.html" style="display: block;">
                    <img src="GAUR1.jpg" alt="Gaur Chrysalis" style="height: 480px; object-fit: cover;">
                    <img src="GAUR2.avif" alt="Gaur Chrysalis" style="height: 480px; object-fit: cover;">
                    </a>
                    <a href="gaur-chrysalis.html" class="arrow-icon"><i class="fa-solid fa-arrow-right"></i></a>
                    <div class="tag">Premium Flats</div>
                  </div>
                  <div class="content">
                    <div class="catogory-box"><a href="gaur-chrysalis.html">Sector 22D, Yamuna Expressway</a></div>
                   <div class="h4 title"><a href="gaur-chrysalis.html">Gaur Chrysalis</a></div>
                  </div>
                </div>
              </div>
            </div>
            
            """

    # We will insert it right before the first project item, which is friends colony
    search_str = '<div class="col-md-6 project-item" data-type="plots" data-city="dankaur">'
    
    if search_str in content:
        content = content.replace(search_str, gaur_block + search_str, 1)
        
    with open('page-projects.html', 'w', encoding='utf-8') as f:
        f.write(content)

if __name__ == "__main__":
    add_gaur_to_projects()
