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
const lavaLamp = document.querySelector('.lava-lamp') as HTMLElement; // Lava lamp indicator

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

            // Move the Lava Lamp indicator to the active menu item
            const rect = (item as HTMLElement).getBoundingClientRect();
            lavaLamp.style.left = `${rect.left}px`;
            lavaLamp.style.width = `${rect.width}px`;
        }
    });
});

// Handle loading screen functionality
window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading-screen');

    if (loadingScreen) {
        console.log('Loading screen found, starting timer...'); // Debugging log
        setTimeout(() => {
            console.log('Fading out loading screen...');
            loadingScreen.classList.add('fade-out'); // Add fade-out animation

            setTimeout(() => {
                console.log('Redirecting to homepage.html...');
                window.location.href = 'homepage.html'; // Correct path to homepage
            }, 1000); // Delay matches fade-out duration
        }, 10000); // Wait for 10 seconds before starting fade-out
    } else {
        console.error('Loading screen element not found.');
    }
});



// // Code structure for under construction page
// import { gsap } from 'gsap';
//
// window.addEventListener('DOMContentLoaded', () => {
//     // Animate the heading with a bounce effect
//     gsap.fromTo(
//         "#loading-screen h1",
//         { opacity: 0, y: -50 },
//         { opacity: 1, y: 0, duration: 1.5, ease: "bounce.out", repeat: -1, yoyo: true }
//     );
//
//     // Keep the paragraph static (optional fade-in effect)
//     gsap.from("#loading-screen p", {
//         opacity: 0,
//         duration: 1,
//         delay: 0.5,
//         ease: "power2.inOut",
//     });
// });

