// Import styles and assets
import './styles.css';
import corgiGif from './assets/image/loading-corgi.gif';

// Attach the GIF to the loading screen
const gifElement = document.getElementById('corgi-gif') as HTMLImageElement;
if (gifElement) gifElement.src = corgiGif;

// Multilingual Welcome Messages
const welcomeTexts = [
    "សូមស្វាគមន៍!", // Khmer
    "ยินดีต้อนรับ!", // Thai
    "ສະບາຍດີ!", // Laotian
    "Bienvenue!", // French
    "환영합니다!", // Korean
    "欢迎!",       // Chinese
    "Chào mừng!", // Vietnamese
    "ようこそ!"    // Japanese
];

const welcomeTextElement = document.getElementById('welcome-text') as HTMLElement;
let currentIndex = 0;

// Function to update the welcome message
function updateWelcomeText() {
    if (welcomeTextElement) {
        welcomeTextElement.textContent = welcomeTexts[currentIndex];
        welcomeTextElement.style.animation = "fade-in 2s ease-in-out";

        currentIndex = (currentIndex + 1) % welcomeTexts.length; // Cycle through messages

        // Reset animation for the next text
        setTimeout(() => {
            welcomeTextElement.style.animation = "";
        }, 2000); // Match fade-in duration
    }
}

// Trigger welcome text update every 2.5 seconds
setInterval(updateWelcomeText, 2500);

// Loading Progress
const progressElement = document.getElementById('progress-loading') as HTMLElement;
const loadingScreen = document.getElementById('loading-screen') as HTMLElement;

let progress = 0;
let interval: number;

// Function to update progress
function updateProgress(increment: number) {
    progress = Math.min(progress + increment, 100); // Cap at 100%
    if (progressElement) {
        progressElement.textContent = `${progress}%`;

        // Trigger animation on progress update
        progressElement.classList.add('animated');
        setTimeout(() => {
            progressElement.classList.remove('animated');
        }, 300); // Match CSS animation duration
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
        }, 1000); // Allow fade-out animation to complete
    }
}

// Automatically increment progress every second
window.addEventListener('load', () => {
    interval = window.setInterval(() => {
        updateProgress(10); // Increase progress by 10% every second
    }, 1000);

    // Allow visitors to click anywhere to speed up loading
    if (loadingScreen) {
        loadingScreen.addEventListener('click', () => {
            updateProgress(25); // Add 25% per click
        });
    }
});

// Initialize the first welcome text
updateWelcomeText();

// Navigation color updates based on the current page
const nav = document.querySelector('nav') as HTMLElement;

// Get the current page filename
const currentPage = window.location.pathname.split('/').pop();

// Assign a class to the nav based on the page
if (nav) {
    switch (currentPage) {
        case 'homepage.html':
            nav.classList.add('home-nav');
            break;
        case 'portfolio.html':
            nav.classList.add('portfolio-nav');
            break;
        case 'about.html':
            nav.classList.add('about-nav');
            break;
        case 'contact.html':
            nav.classList.add('contact-nav');
            break;
        default:
            nav.classList.add('default-nav'); // Fallback for unclassified pages
    }
}

const lazyLoadGif = async (id: string, src: string) => {
    const element = document.getElementById(id);
    if (element) {
        element.setAttribute('src', src);
    }
};


// import './styles.css'; // Ensure the CSS file is imported here
// import corgiGif from './assets/image/loading-corgi.gif';
//
// const gifElement = document.getElementById('corgi-gif') as HTMLImageElement;
// if (gifElement) gifElement.src = corgiGif;
//
// console.log('Resolved GIF Path:', corgiGif);
//
// // Smooth scrolling for anchor links with offset for fixed navbar
// document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
//     anchor.addEventListener('click', (event) => {
//         event.preventDefault();
//         const targetId = anchor.getAttribute('href');
//         if (targetId) {
//             const targetElement = document.querySelector(targetId);
//             if (targetElement) {
//                 const offset = 60; // Adjust to match the fixed navbar height
//                 const elementPosition = targetElement.getBoundingClientRect().top;
//                 const offsetPosition = elementPosition + window.pageYOffset - offset;
//
//                 window.scrollTo({
//                     top: offsetPosition,
//                     behavior: 'smooth',
//                 });
//             }
//         }
//     });
// });
//
// const menuItems = document.querySelectorAll('.menu-item') as NodeListOf<HTMLElement>;
//
// // const lavaLamp = document.querySelector('.lava-lamp') as HTMLElement;
//
// function updateLavaLampPosition(activeItem: HTMLElement) {
// }
//
// // Add event listeners for menu clicks
// menuItems.forEach((item) => {
//     item.addEventListener('click', (event) => {
//         event.preventDefault();
//         menuItems.forEach((i) => i.classList.remove('active'));
//         item.classList.add('active');
//         // updateLavaLampPosition(item);
//     });
// });
//
// // Initialize Lava Lamp on page load
// document.addEventListener('DOMContentLoaded', () => {
//     const activeItem = document.querySelector('.menu-item.active') as HTMLElement;
//     if (activeItem) {
//         updateLavaLampPosition(activeItem);
//     }
// });
//
// window.addEventListener('load', () => {
//     const loadingScreen = document.getElementById('loading-screen');
//     const progressElement = document.getElementById('progress-loading') as HTMLElement;
//
//     let progress = 0;
//     let interval: number;
//
//     // Function to update the progress bar
//     function updateProgress(increment: number) {
//         progress = Math.min(progress + increment, 100); // Cap at 100%
//         if (progressElement) {
//             progressElement.textContent = `${progress}%`;
//
//             // Trigger animation on progress update
//             progressElement.classList.add('animated');
//             setTimeout(() => {
//                 progressElement.classList.remove('animated');
//             }, 300); // Match the CSS animation duration
//         }
//
//         // When loading reaches 100%, fade out the screen
//         if (progress === 100) {
//             clearInterval(interval);
//             fadeOutLoadingScreen();
//         }
//     }
//
//     // Function to fade out the loading screen
//     function fadeOutLoadingScreen() {
//         if (loadingScreen) {
//             loadingScreen.classList.add('fade-out');
//             setTimeout(() => {
//                 window.location.href = 'homepage.html'; // Redirect to homepage
//             }, 1000);
//         }
//     }
//
//     // Automatically increment progress every 1 second
//     interval = window.setInterval(() => {
//         updateProgress(25); // Increase progress by 25% every second
//     }, 1000);
//
//     // Allow visitors to click anywhere to speed up loading
//     if (loadingScreen) {
//         loadingScreen.addEventListener('click', () => {
//             updateProgress(25); // Increase progress by 25% per click
//         });
//     }
// });
//
//
// // // Code structure for under construction page
// // import { gsap } from 'gsap';
// //
// // window.addEventListener('DOMContentLoaded', () => {
// //     // Animate the heading with a bounce effect
// //     gsap.fromTo(
// //         "#loading-screen h1",
// //         { opacity: 0, y: -50 },
// //         { opacity: 1, y: 0, duration: 1.5, ease: "bounce.out", repeat: -1, yoyo: true }
// //     );
// //
// //     // Keep the paragraph static (optional fade-in effect)
// //     gsap.from("#loading-screen p", {
// //         opacity: 0,
// //         duration: 1,
// //         delay: 0.5,
// //         ease: "power2.inOut",
// //     });
// // });
//