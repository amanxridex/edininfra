import os

with open('all.html', 'r', encoding='utf-8') as f:
    content = f.read()

header_end = content.find('<!--End Main Header -->')
if header_end != -1:
    header_end += len('<!--End Main Header -->')

footer_start = content.find('<!-- Main Footer -->')

if header_end != -1 and footer_start != -1:
    new_content = content[:header_end] + """

    <!-- ALL PROJECTS SECTION -->
    <link href="css/all.css" rel="stylesheet">
    
    <section class="all-projects-header">
        <div class="container">
            <h1>Discover All Projects</h1>
            <p>Explore the most sought-after real estate developments across Yamuna Expressway, Greater Noida, and beyond.</p>
        </div>
    </section>

    <div class="filter-bar">
        <input type="text" id="projectSearch" class="filter-input" placeholder="Search by Project or Developer...">
        <input type="text" id="locationSearch" class="filter-input" placeholder="Filter by Location (e.g., Sector 22D)...">
        <button class="filter-btn"><i class="fa fa-search"></i> Search</button>
    </div>

    <section class="container pb-100">
        <div class="projects-grid">
            <!-- Project 1 -->
            <div class="p-card">
                <div class="p-card-tag">Premium</div>
                <div class="p-card-img">
                    <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80" alt="Gaur Chrysalis">
                </div>
                <div class="p-card-content">
                    <div class="p-card-developer">Gaurs Group</div>
                    <div class="p-card-title">Gaur Chrysalis</div>
                    <div class="p-card-location"><i class="fa fa-map-marker-alt"></i> Sector 22D, Yamuna Expressway</div>
                    <div class="p-card-price"><i class="fa fa-tag"></i> ₹1.53 Cr – 2.16 Cr</div>
                    <div class="p-card-desc">Luxury apartments offering world-class amenities in the heart of Sector 22D, near the upcoming Noida International Airport.</div>
                    <a href="#" class="p-card-action">View Details <i class="fa fa-arrow-right"></i></a>
                </div>
            </div>

            <!-- Project 2 -->
            <div class="p-card">
                <div class="p-card-tag">Luxury</div>
                <div class="p-card-img">
                    <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80" alt="Eldeco Echoes of Eden">
                </div>
                <div class="p-card-content">
                    <div class="p-card-developer">Eldeco Group</div>
                    <div class="p-card-title">Eldeco Echoes of Eden</div>
                    <div class="p-card-location"><i class="fa fa-map-marker-alt"></i> Sector 22D, Yamuna Expressway</div>
                    <div class="p-card-price"><i class="fa fa-tag"></i> ₹1.39 Cr – 2.61 Cr</div>
                    <div class="p-card-desc">Premium residential project focusing on green living and modern aesthetics, perfectly positioned for future growth.</div>
                    <a href="#" class="p-card-action">View Details <i class="fa fa-arrow-right"></i></a>
                </div>
            </div>

            <!-- Project 3 -->
            <div class="p-card">
                <div class="p-card-tag">Hot Investment</div>
                <div class="p-card-img">
                    <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80" alt="Arihant Seasons">
                </div>
                <div class="p-card-content">
                    <div class="p-card-developer">Arihant Group</div>
                    <div class="p-card-title">Arihant Seasons</div>
                    <div class="p-card-location"><i class="fa fa-map-marker-alt"></i> Sector 22D, Yamuna Expressway</div>
                    <div class="p-card-price"><i class="fa fa-tag"></i> ₹1.74 Cr – 5.15 Cr</div>
                    <div class="p-card-desc">High-end luxury residences providing spacious layouts, state-of-the-art clubhouses, and premium lifestyle facilities.</div>
                    <a href="#" class="p-card-action">View Details <i class="fa fa-arrow-right"></i></a>
                </div>
            </div>

            <!-- Project 4 -->
            <div class="p-card">
                <div class="p-card-tag">Plots</div>
                <div class="p-card-img">
                    <img src="fcolony.png" alt="Friends Colony">
                </div>
                <div class="p-card-content">
                    <div class="p-card-developer">ED Infratech</div>
                    <div class="p-card-title">Friends Colony</div>
                    <div class="p-card-location"><i class="fa fa-map-marker-alt"></i> Sector 17A, Dankaur</div>
                    <div class="p-card-price"><i class="fa fa-tag"></i> ₹28,000 / Sq. Yd.</div>
                    <div class="p-card-desc">Premium residential plots near Galgotias University with easy access to Yamuna Expressway. Freehold and secure.</div>
                    <a href="friends-colony-dankaur-sector-17a.html" class="p-card-action">View Details <i class="fa fa-arrow-right"></i></a>
                </div>
            </div>

            <!-- Project 5 -->
            <div class="p-card">
                <div class="p-card-tag">Commercial & Res</div>
                <div class="p-card-img">
                    <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80" alt="Ace Hive">
                </div>
                <div class="p-card-content">
                    <div class="p-card-developer">ACE Group</div>
                    <div class="p-card-title">Ace Hive</div>
                    <div class="p-card-location"><i class="fa fa-map-marker-alt"></i> Sector 22A, Yamuna Expressway</div>
                    <div class="p-card-price"><i class="fa fa-tag"></i> ₹1.12 Cr – 1.28 Cr</div>
                    <div class="p-card-desc">A strategic mix of commercial and residential spaces designed for maximum ROI and modern urban living.</div>
                    <a href="#" class="p-card-action">View Details <i class="fa fa-arrow-right"></i></a>
                </div>
            </div>

            <!-- Project 6 -->
            <div class="p-card">
                <div class="p-card-tag">Plots</div>
                <div class="p-card-img">
                    <img src="sddam.png" alt="Shree Ji Dham">
                </div>
                <div class="p-card-content">
                    <div class="p-card-developer">Olivera Home Developers</div>
                    <div class="p-card-title">Shree Ji Dham Vrindavan</div>
                    <div class="p-card-location"><i class="fa fa-map-marker-alt"></i> Vrindavan, Uttar Pradesh</div>
                    <div class="p-card-price"><i class="fa fa-tag"></i> ₹29,500 / Sq. Yd.</div>
                    <div class="p-card-desc">Premium residential plots in the sacred city of Vrindavan. Immediate possession available with excellent connectivity.</div>
                    <a href="shree-ji-dham-vrindavan.html" class="p-card-action">View Details <i class="fa fa-arrow-right"></i></a>
                </div>
            </div>

            <!-- Project 7 -->
            <div class="p-card">
                <div class="p-card-tag">Township</div>
                <div class="p-card-img">
                    <img src="https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=600&q=80" alt="Nimbus The Palm Village">
                </div>
                <div class="p-card-content">
                    <div class="p-card-developer">Nimbus Group</div>
                    <div class="p-card-title">Nimbus The Palm Village</div>
                    <div class="p-card-location"><i class="fa fa-map-marker-alt"></i> YEIDA Region</div>
                    <div class="p-card-price"><i class="fa fa-tag"></i> ₹85 L – 2.31 Cr</div>
                    <div class="p-card-desc">An expansive integrated township offering a mix of studio apartments, standard flats, and luxury villas.</div>
                    <a href="#" class="p-card-action">View Details <i class="fa fa-arrow-right"></i></a>
                </div>
            </div>

            <!-- Project 8 -->
            <div class="p-card">
                <div class="p-card-tag">Township</div>
                <div class="p-card-img">
                    <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80" alt="Gaur Bento">
                </div>
                <div class="p-card-content">
                    <div class="p-card-developer">Gaurs Group</div>
                    <div class="p-card-title">Gaur Bento (GYC)</div>
                    <div class="p-card-location"><i class="fa fa-map-marker-alt"></i> Sector 19, Gaur Yamuna City</div>
                    <div class="p-card-price"><i class="fa fa-tag"></i> ₹1 Cr onwards</div>
                    <div class="p-card-desc">Part of the massive Gaur Yamuna City integrated township, featuring pristine lakes, schools, and commercial zones.</div>
                    <a href="#" class="p-card-action">View Details <i class="fa fa-arrow-right"></i></a>
                </div>
            </div>
            
            <!-- Project 9 -->
            <div class="p-card">
                <div class="p-card-tag">Plots</div>
                <div class="p-card-img">
                    <img src="NSE1.png" alt="Nihal Singh Enclave">
                </div>
                <div class="p-card-content">
                    <div class="p-card-developer">ED Infratech</div>
                    <div class="p-card-title">Nihal Singh Enclave</div>
                    <div class="p-card-location"><i class="fa fa-map-marker-alt"></i> Rabupura, Sector 20</div>
                    <div class="p-card-price"><i class="fa fa-tag"></i> On Request</div>
                    <div class="p-card-desc">Prime residential plots situated within the highly sought-after Yamuna Authority area near the international airport.</div>
                    <a href="nihal-singh-enclave-rabupura-sector-20-yamuna-authority.html" class="p-card-action">View Details <i class="fa fa-arrow-right"></i></a>
                </div>
            </div>

        </div>
    </section>

    <!-- Scripts -->
    <script src="js/all.js"></script>

""" + content[footer_start:]
    
    new_content = new_content.replace('<title>ED Infratech | Home Page 01</title>', '<title>All Real Estate Projects | ED Infratech</title>')

    with open('all.html', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Successfully created all.html")
else:
    print("Could not find header or footer")
