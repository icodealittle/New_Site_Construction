import './styles.css'; // Ensure the CSS file is imported here
import corgiGif from './assets/image/loading-corgi.gif';

const gifElement = document.getElementById('corgi-gif') as HTMLImageElement;
if (gifElement) gifElement.src = corgiGif;

console.log('Resolved GIF Path:', corgiGif);

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

const menuItems = document.querySelectorAll('.menu-item') as NodeListOf<HTMLElement>;

// const lavaLamp = document.querySelector('.lava-lamp') as HTMLElement;

function updateLavaLampPosition(activeItem: HTMLElement) {
    // const rect = activeItem.getBoundingClientRect();
    // const parentRect = activeItem.parentElement?.getBoundingClientRect(); // Get parent offset
    //
    // // Adjust the left position relative to the parent container
    // lavaLamp.style.left = `${rect.left - (parentRect?.left || 0)}px`;
    // lavaLamp.style.width = `${rect.width}px`;
    // console.log(`Updated Lava Lamp -> Left: ${lavaLamp.style.left}, Width: ${lavaLamp.style.width}`);
}

// Add event listeners for menu clicks
menuItems.forEach((item) => {
    item.addEventListener('click', (event) => {
        event.preventDefault();
        menuItems.forEach((i) => i.classList.remove('active'));
        item.classList.add('active');
        // updateLavaLampPosition(item);
    });
});

// Initialize Lava Lamp on page load
document.addEventListener('DOMContentLoaded', () => {
    const activeItem = document.querySelector('.menu-item.active') as HTMLElement;
    if (activeItem) {
        updateLavaLampPosition(activeItem);
    }
});

window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading-screen');
    const progressElement = document.getElementById('progress-loading') as HTMLElement;

    let progress = 0;
    let interval: number;

    // Function to update the progress bar
    function updateProgress(increment: number) {
        progress = Math.min(progress + increment, 100); // Cap at 100%
        if (progressElement) {
            progressElement.textContent = `${progress}%`;

            // Trigger animation on progress update
            progressElement.classList.add('animated');
            setTimeout(() => {
                progressElement.classList.remove('animated');
            }, 300); // Match the CSS animation duration
        }

        // When loading reaches 100%, fade out the screen
        if (progress === 100) {
            clearInterval(interval);
            fadeOutLoadingScreen();
        }
    }

    // Function to fade out the loading screen
    function fadeOutLoadingScreen() {
        if (loadingScreen) {
            loadingScreen.classList.add('fade-out');
            setTimeout(() => {
                window.location.href = 'homepage.html'; // Redirect to homepage
            }, 1000);
        }
    }

    // Automatically increment progress every 1 second
    interval = window.setInterval(() => {
        updateProgress(25); // Increase progress by 25% every second
    }, 1000);

    // Allow visitors to click anywhere to speed up loading
    if (loadingScreen) {
        loadingScreen.addEventListener('click', () => {
            updateProgress(25); // Increase progress by 25% per click
        });
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

