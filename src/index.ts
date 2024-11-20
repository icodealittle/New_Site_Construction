import './styles.css'; // Ensure the CSS file is imported here

// Smooth scrolling for anchor links with offset for fixed navbar
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = anchor.getAttribute('href');
        if (targetId) {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const offset = 60; // Adjust to match the fixed navbar height
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth',
                });
            }
        }
    });
});

// Add active class to the current menu item based on scroll position
const sections = document.querySelectorAll('section'); // All page sections
const menuItems = document.querySelectorAll('.menu-item'); // All navigation links

window.addEventListener('scroll', () => {
    let currentSection = '';

    // Determine the current section in view
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute('id') || '';
        }
    });

    // Update active class on menu items
    menuItems.forEach((item) => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${currentSection}`) {
            item.classList.add('active');
        }
    });
});

// Handle loading screen functionality
window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading-screen');

    if (loadingScreen) {
        // Keep loading screen visible for 5 seconds
        setTimeout(() => {
            loadingScreen.classList.add('fade-out'); // Trigger fade-out animation

            // Wait for the fade-out animation to complete, then redirect to homepage.html
            setTimeout(() => {
                window.location.href = 'homepage.html'; // Redirect to homepage
            }, 1000); // Match fade-out duration
        }, 5000); // Adjust timeout to control how long the loading screen is visible
    }
});
