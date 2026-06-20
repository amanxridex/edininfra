import re
import glob

def setup_gaur_chrysalis():
    with open('gaur-chrysalis.html', 'r', encoding='utf-8') as f:
        content = f.read()

    # Meta and titles
    content = content.replace("Friends Colony Dankaur | Residential Plots Near Galgotias University | ED Infratech", "Gaur Chrysalis | Premium Flats in Yamuna Expressway | ED Infratech")
    content = content.replace("Friends Colony", "Gaur Chrysalis")
    content = content.replace("Sector 17A, Dankaur", "Sector 22D, Yamuna Expressway")
    content = content.replace("fcolony.png", "GAUR1.jpg")
    content = content.replace("fcolony2.png", "GAUR2.avif")
    
    # Let's replace the first image block to contain all 4 images
    gallery_old = """<div class="swiper-slide">
										<img src="GAUR1.jpg" alt="Gaur Chrysalis Banner" style="width: 100%; height: 500px; object-fit: cover;"> 
									</div>
									<div class="swiper-slide">
										<img src="GAUR2.avif" alt="Gaur Chrysalis Details" style="width: 100%; height: 500px; object-fit: cover;"> 
									</div>"""
    gallery_new = """<div class="swiper-slide">
										<img src="GAUR1.jpg" alt="Gaur Chrysalis" style="width: 100%; height: 500px; object-fit: cover;"> 
									</div>
									<div class="swiper-slide">
										<img src="GAUR2.avif" alt="Gaur Chrysalis 2" style="width: 100%; height: 500px; object-fit: cover;"> 
									</div>
									<div class="swiper-slide">
										<img src="GAUR3.webp" alt="Gaur Chrysalis 3" style="width: 100%; height: 500px; object-fit: cover;"> 
									</div>
									<div class="swiper-slide">
										<img src="GAUR4.jpg" alt="Gaur Chrysalis 4" style="width: 100%; height: 500px; object-fit: cover;"> 
									</div>"""
    content = content.replace(gallery_old, gallery_new)

    # Make sure text reflects Gaur Chrysalis
    content = content.replace("₹28,000 Per Square Yard", "₹1.53 Cr – 2.16 Cr")
    content = content.replace("₹11,000 Only", "10% of BSP")
    content = content.replace("Residential Plots", "Premium Flats & Apartments")
    content = content.replace("ED Infratech", "Gaurs Group")
    content = content.replace("Friends Colony by Gaurs Group is a premium plotted development located in Sector 22D, Yamuna Expressway. Enjoying a \nstrategic location near Galgotias University, this project offers an investment-friendly environment with wide \ninternal roads, planned layout, and a green environment.", "Gaur Chrysalis by Gaurs Group offers world-class luxury apartments in Sector 22D, Yamuna Expressway. Designed with premium architecture and modern amenities, it is strategically located near the upcoming Noida International Airport, offering unparalleled lifestyle and investment value.")
    
    # Save gaur chrysalis
    with open('gaur-chrysalis.html', 'w', encoding='utf-8') as f:
        f.write(content)

def create_flats_page():
    with open('all.html', 'r', encoding='utf-8') as f:
        content = f.read()
    
    content = content.replace("<title>All Real Estate Projects | ED Infratech</title>", "<title>Flats & Apartments | ED Infratech</title>")
    content = content.replace("Discover All Projects", "Discover Premium Flats")
    content = content.replace("Explore the most sought-after real estate developments", "Explore the most sought-after flats and residential apartments")
    
    # Keep only the projects that are flats (Gaur Chrysalis, Eldeco Echoes, Arihant Seasons, Ace Hive, Nimbus Palm Village, Gaur Bento, ATS Allure, Mahagun Meadows, Ace Golfshire, Purvanchal Royal City, Gaur Saundaryam)
    # Just to be fast, I will write the Flats directly or remove the Plots ones from the HTML block.
    # Actually, flats include:
    # Gaur Chrysalis
    # Since we need to update the href for Gaur Chrysalis anyway, let's update all.html and flats.html
    pass

if __name__ == "__main__":
    setup_gaur_chrysalis()
