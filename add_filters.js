const fs = require('fs');
const path = require('path');

const filePath = 'c:/Users/91836/PERSONAL/edinmaster/ED/page-projects.html';
let content = fs.readFileSync(filePath, 'utf8');

// 1. Add IDs to the select elements and button
content = content.replace(
    '<select class="custom-select form-select border-0">',
    '<select id="filter-type" class="custom-select form-select border-0">'
);
content = content.replace(
    '<select class="custom-select form-select border-0">',
    '<select id="filter-city" class="custom-select form-select border-0">'
);
content = content.replace(
    '<select class="custom-select form-select border-0">',
    '<select id="filter-sort" class="custom-select form-select border-0">'
);

content = content.replace(
    '<button style="background-color: #c8a032;',
    '<button id="search-projects-btn" style="background-color: #c8a032;'
);

// Add missing cities to dropdown
content = content.replace(
    '<option value="noida">Noida</option>',
    '<option value="noida">Noida</option>\n                <option value="khair">Khair - Somna Road</option>\n                <option value="tokyo">Tokyo</option>\n                <option value="miami">Miami</option>\n                <option value="paris">Paris</option>\n                <option value="london">London</option>'
);

// 2. Add data attributes to project wrappers (col-md-6)
// We need to inject data-type and data-city into the col-md-6 divs.
// Project 1 (Vihaan)
content = content.replace(
    '<div class="col-md-6">\n            <div class="project-box1 wow fadeInUp" data-wow-delay=".05s">\n              <div class="inner-box">\n                <div class="thumb">\n                  <a href="vihaan-enclave-khair-somna-road.html"',
    '<div class="col-md-6 project-item" data-type="plots" data-city="khair">\n            <div class="project-box1 wow fadeInUp" data-wow-delay=".05s">\n              <div class="inner-box">\n                <div class="thumb">\n                  <a href="vihaan-enclave-khair-somna-road.html"'
);

// Project 2 (Tokyo)
content = content.replace(
    '<div class="col-md-6">\n            <div class="project-box1 wow fadeInUp" data-wow-delay=".1s">\n              <div class="inner-box">\n                <div class="thumb">\n                  <a href="page-project-details.html" style="display: block;">\n                    <img src="images/resource/project1-1.jpg"',
    '<div class="col-md-6 project-item" data-type="flats" data-city="tokyo">\n            <div class="project-box1 wow fadeInUp" data-wow-delay=".1s">\n              <div class="inner-box">\n                <div class="thumb">\n                  <a href="page-project-details.html" style="display: block;">\n                    <img src="images/resource/project1-1.jpg"'
);

// Project 3 (Miami)
content = content.replace(
    '<div class="col-md-6">\n            <div class="project-box1 wow fadeInUp" data-wow-delay=".2s">\n              <div class="inner-box">\n                <div class="thumb">\n                  <a href="page-project-details.html" style="display: block;">\n                    <img src="images/resource/project1-2.jpg"',
    '<div class="col-md-6 project-item" data-type="super-luxury" data-city="miami">\n            <div class="project-box1 wow fadeInUp" data-wow-delay=".2s">\n              <div class="inner-box">\n                <div class="thumb">\n                  <a href="page-project-details.html" style="display: block;">\n                    <img src="images/resource/project1-2.jpg"'
);

// Project 4 (Paris)
content = content.replace(
    '<div class="col-md-6">\n            <div class="project-box1 wow fadeInUp" data-wow-delay=".3s">\n              <div class="inner-box">\n                <div class="thumb">\n                  <a href="page-project-details.html" style="display: block;">\n                    <img src="images/resource/project1-3.jpg"',
    '<div class="col-md-6 project-item" data-type="super-luxury" data-city="paris">\n            <div class="project-box1 wow fadeInUp" data-wow-delay=".3s">\n              <div class="inner-box">\n                <div class="thumb">\n                  <a href="page-project-details.html" style="display: block;">\n                    <img src="images/resource/project1-3.jpg"'
);

// Project 5 (London)
content = content.replace(
    '<div class="col-md-6">\n            <div class="project-box1 wow fadeInUp" data-wow-delay=".4s">\n              <div class="inner-box">\n                <div class="thumb">\n                  <a href="page-project-details.html" style="display: block;">\n                    <img src="images/resource/project1-4.jpg"',
    '<div class="col-md-6 project-item" data-type="flats" data-city="london">\n            <div class="project-box1 wow fadeInUp" data-wow-delay=".4s">\n              <div class="inner-box">\n                <div class="thumb">\n                  <a href="page-project-details.html" style="display: block;">\n                    <img src="images/resource/project1-4.jpg"'
);

// Add JS for filtering before closing body
const script = `
<script>
  document.addEventListener('DOMContentLoaded', function() {
    const filterBtn = document.getElementById('search-projects-btn');
    if (!filterBtn) return;

    filterBtn.addEventListener('click', function(e) {
      e.preventDefault();
      
      const selectedType = document.getElementById('filter-type').value;
      const selectedCity = document.getElementById('filter-city').value;
      const selectedSort = document.getElementById('filter-sort').value; // Implement later if needed

      const projects = document.querySelectorAll('.project-item');
      
      let visibleCount = 0;

      projects.forEach(project => {
        const pType = project.getAttribute('data-type');
        const pCity = project.getAttribute('data-city');
        
        let show = true;
        
        if (selectedType !== 'all' && pType !== selectedType) {
          show = false;
        }
        
        if (selectedCity !== 'all' && pCity !== selectedCity) {
          show = false;
        }

        if (show) {
          project.style.display = 'block';
          visibleCount++;
        } else {
          project.style.display = 'none';
        }
      });
      
      // Optional: Show "No projects found" message if visibleCount === 0
    });
  });
</script>
</body>`;

content = content.replace('</body>', script);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Filters added successfully.');
