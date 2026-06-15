const fs = require('fs');
const path = require('path');

const targetDir = 'c:/Users/91836/PERSONAL/edinmaster/ED';
const files = fs.readdirSync(targetDir).filter(f => f.endsWith('.html'));

const newMenu = `<ul class="navigation">
                  <li class="current"><a href="index.html">Home</a></li>
                  <li><a href="page-about.html">About Us</a></li>
                  <li class="dropdown"><a href="page-projects.html">Projects</a>
                    <ul>
                      <li><a href="page-projects.html">Project Grid</a></li>
                      <li><a href="page-project-details.html">Project Details</a></li>
                    </ul>
                  </li>
                  <li class="dropdown"><a href="page-services.html">Services</a>
                    <ul>
                      <li><a href="page-services.html">Services Grid</a></li>
                      <li><a href="page-service-details.html">Services Details</a></li>
                    </ul>
                  </li>
                  <li class="dropdown"><a href="news-grid.html">News Updates</a>
                    <ul>
                      <li><a href="news-grid.html">News Grid</a></li>
                      <li><a href="news-details.html">News Details</a></li>
                    </ul>
                  </li>
                  <li class="dropdown"><a href="#">More</a>
                    <ul>
                      <li class="dropdown"><a href="#">Team</a>
                        <ul>
                          <li><a href="page-team.html">Team Grid</a></li>
                          <li><a href="page-team-details.html">Team Details</a></li>
                        </ul>
                      </li>
                      <li><a href="page-pricing.html">Pricing</a></li>
                      <li><a href="page-testimonial.html">Testimonials</a></li>
                      <li><a href="page-faq.html">Faq</a></li>
                      <li><a href="page-contact.html">Contact</a></li>
                      <li class="dropdown"><a href="#">Shop</a>
                        <ul>
                          <li><a href="shop-products.html">Products</a></li>
                          <li><a href="shop-products-sidebar.html">Products with Sidebar</a></li>
                          <li><a href="shop-product-details.html">Product Details</a></li>
                          <li><a href="shop-cart.html">Cart</a></li>
                          <li><a href="shop-checkout.html">Checkout</a></li>
                        </ul>
                      </li>
                      <li><a href="page-404.html">404 Error</a></li>
                    </ul>
                  </li>
                </ul>`;

files.forEach(file => {
    const filePath = path.join(targetDir, file);
    let html = fs.readFileSync(filePath, 'utf8');
    
    const regex = /<ul class="navigation">[\s\S]*?<\/ul>\s*<\/nav>/;
    if (regex.test(html)) {
        html = html.replace(regex, newMenu + '\n              </nav>');
        fs.writeFileSync(filePath, html, 'utf8');
        console.log('Updated menu in ' + file);
    }
});
