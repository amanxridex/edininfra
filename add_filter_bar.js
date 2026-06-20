const fs = require('fs');
const path = require('path');

const targetPath = 'c:/Users/91836/PERSONAL/edinmaster/ED/page-projects.html';
let content = fs.readFileSync(targetPath, 'utf8');

const filterHTML = `
        <!-- Filter Bar -->
        <div class="project-filter-bar mb-5 wow fadeInUp" data-wow-delay=".1s">
          <div class="filter-inner d-flex flex-wrap align-items-center" style="background: #ffffff; padding: 20px 30px; border-radius: 50px; box-shadow: 0 15px 40px rgba(0,0,0,0.06); border: 1px solid rgba(200,160,50,0.15);">
            
            <!-- Type Filter -->
            <div class="filter-group d-flex align-items-center me-4 mb-3 mb-lg-0">
              <span class="filter-label me-2" style="color: #0D3B66; font-weight: 600; font-size: 15px; white-space: nowrap;"><i class="fa-solid fa-building" style="color: #c8a032;"></i> Type</span>
              <select class="form-select border-0" style="background-color: #f8f9fa; border-radius: 20px; font-weight: 500; cursor: pointer; color: #444; box-shadow: none; min-width: 160px; padding: 10px 35px 10px 20px;">
                <option value="all">All Types</option>
                <option value="flats">Flats</option>
                <option value="villa">Villa</option>
                <option value="farmhouse">Farmhouse</option>
                <option value="plots">Plots</option>
                <option value="commercial">Commercial</option>
                <option value="independent-house">Independent House</option>
                <option value="agriculture-land">Agriculture Land</option>
                <option value="super-luxury">Super Luxury</option>
                <option value="launching-soon">Launching Soon</option>
              </select>
            </div>
            
            <!-- City Filter -->
            <div class="filter-group d-flex align-items-center me-4 mb-3 mb-lg-0">
              <span class="filter-label me-2" style="color: #0D3B66; font-weight: 600; font-size: 15px; white-space: nowrap;"><i class="fa-solid fa-map-location-dot" style="color: #c8a032;"></i> City</span>
              <select class="form-select border-0" style="background-color: #f8f9fa; border-radius: 20px; font-weight: 500; cursor: pointer; color: #444; box-shadow: none; min-width: 170px; padding: 10px 35px 10px 20px;">
                <option value="all">All Locations</option>
                <option value="hill-estate">Hill Estate Area</option>
                <option value="vrindavan">Vrindavan</option>
                <option value="mumbai">Mumbai</option>
                <option value="goa">Goa</option>
                <option value="dehradun">Dehradun</option>
                <option value="mathura">Mathura</option>
                <option value="ayodhya">Ayodhya</option>
                <option value="jewar">Jewar</option>
                <option value="noida">Noida</option>
              </select>
            </div>

            <!-- Sort By Filter -->
            <div class="filter-group d-flex align-items-center me-4 mb-3 mb-lg-0">
              <span class="filter-label me-2" style="color: #0D3B66; font-weight: 600; font-size: 15px; white-space: nowrap;"><i class="fa-solid fa-arrow-down-short-wide" style="color: #c8a032;"></i> Sort</span>
              <select class="form-select border-0" style="background-color: #f8f9fa; border-radius: 20px; font-weight: 500; cursor: pointer; color: #444; box-shadow: none; min-width: 180px; padding: 10px 35px 10px 20px;">
                <option value="default">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>

            <!-- Action Button -->
            <div class="filter-action ms-auto mb-3 mb-lg-0">
              <button class="theme-btn btn-style-one" style="padding: 10px 25px; border-radius: 30px; font-size: 14px;"><span class="btn-title">Search Projects</span></button>
            </div>
          </div>
        </div>
        <!-- End Filter Bar -->

        `;

const targetAnchor = '<div class="row gx-3">';
const newContent = content.replace(targetAnchor, filterHTML + targetAnchor);

fs.writeFileSync(targetPath, newContent, 'utf8');
console.log('Added filter bar successfully!');
