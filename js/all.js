// all.js - Filtering logic for All Projects Page

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('projectSearch');
    const locationInput = document.getElementById('locationSearch');
    const projectCards = document.querySelectorAll('.p-card');

    function filterProjects() {
        const searchTerm = searchInput.value.toLowerCase();
        const locationTerm = locationInput.value.toLowerCase();

        projectCards.forEach(card => {
            const title = card.querySelector('.p-card-title').textContent.toLowerCase();
            const developer = card.querySelector('.p-card-developer').textContent.toLowerCase();
            const location = card.querySelector('.p-card-location').textContent.toLowerCase();

            const matchesSearch = title.includes(searchTerm) || developer.includes(searchTerm);
            const matchesLocation = location.includes(locationTerm);

            if (matchesSearch && matchesLocation) {
                card.style.display = 'flex';
                // Add a small animation effect when showing
                card.style.animation = 'fadeIn 0.5s ease forwards';
            } else {
                card.style.display = 'none';
            }
        });
    }

    searchInput.addEventListener('input', filterProjects);
    locationInput.addEventListener('input', filterProjects);
});

// Add keyframes for fadeIn if not existing
const style = document.createElement('style');
style.innerHTML = `
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}
`;
document.head.appendChild(style);
