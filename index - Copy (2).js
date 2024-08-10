document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');  // Using 'section' tags to differentiate content sections

    function showSection(sectionClass) {
        sections.forEach(section => {
            if (section.classList.contains(sectionClass)) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Get the text of the clicked navigation button and map to corresponding section class
            const targetClass = this.textContent.trim().toLowerCase().replace(' ', '-'); 
            showSection(targetClass);
        });
    });

    // Initially show the 'home' section
    showSection('home');
});