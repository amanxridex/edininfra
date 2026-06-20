import os
import requests
import re
from urllib.parse import urljoin

base_url = "https://gaurchrysalis.com/"
output_dir = "images/gaur"

os.makedirs(output_dir, exist_ok=True)

# Important image paths extracted from the HTML
image_paths = [
    "images/banner.jpg",
    "images/banner1.jpg", 
    "images/banner2.jpg",
    "images/building.png",
    "images/club/1.jpg",
    "images/club/2.jpg",
    "images/club/3.jpg",
    "images/club/4.jpg",
    "images/club/5.jpg",
    "images/clubhouse2.jpg",
    "images/amenities/jacuzzi.jpg",
    "images/amenities/Aqua-Gym.jpg",
    "images/amenities/Kids-Pool.jpg",
    "images/amenities/4.jpg",
    "images/amenities/5.jpg",
    "images/amenities/6.jpg",
    "images/amenities/13.jpg",
    "images/amenities/18.jpg",
    "images/location-map-big.jpg",
    "images/amenities/club/1.jpg",
    "images/amenities/club/4.jpg",
    "images/amenities/club/18.jpg",
    "images/amenities/club/16.jpg",
]

for path in image_paths:
    url = urljoin(base_url, path)
    filename = path.replace('/', '_')
    filepath = os.path.join(output_dir, filename)
    
    try:
        response = requests.get(url, headers={'User-Agent': 'Mozilla/5.0'}, timeout=10)
        if response.status_code == 200:
            with open(filepath, 'wb') as f:
                f.write(response.content)
            print(f"Downloaded {filename}")
        else:
            print(f"Failed to download {url} (Status: {response.status_code})")
    except Exception as e:
        print(f"Error downloading {url}: {e}")

