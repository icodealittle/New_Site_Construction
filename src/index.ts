// // Import styles and assets
// import './styles.css';
// import corgiGif from './assets/image/loading-corgi.gif';
//
// // Attach the GIF to the loading screen
// const gifElement = document.getElementById('corgi-gif') as HTMLImageElement;
// if (gifElement) gifElement.src = corgiGif;
//
// // Multilingual Welcome Messages
// const welcomeTexts = [
//     "សូមស្វាគមន៍!", // Khmer
//     "ยินดีต้อนรับ!", // Thai
//     "ສະບາຍດີ!", // Laotian
//     "Bienvenue!", // French
//     "환영합니다!", // Korean
//     "欢迎!",       // Chinese
//     "Chào mừng!", // Vietnamese
//     "ようこそ!"    // Japanese
// ];
//
// const welcomeTextElement = document.getElementById('welcome-text') as HTMLElement;
// let currentIndex = 0;
//
// // Function to update the welcome message
// function updateWelcomeText() {
//     if (welcomeTextElement) {
//         welcomeTextElement.textContent = welcomeTexts[currentIndex];
//         welcomeTextElement.style.animation = "fade-in 2s ease-in-out";
//
//         currentIndex = (currentIndex + 1) % welcomeTexts.length; // Cycle through messages
//
//         // Reset animation for the next text
//         setTimeout(() => {
//             welcomeTextElement.style.animation = "";
//         }, 2000); // Match fade-in duration
//     }
// }
//
// // Trigger welcome text update every 2.5 seconds
// setInterval(updateWelcomeText, 2500);
//
// // Loading Progress
// const progressElement = document.getElementById('progress-loading') as HTMLElement;
// const loadingScreen = document.getElementById('loading-screen') as HTMLElement;
//
// let progress = 0;
// let interval: number;
//
// // Function to update progress
// function updateProgress(increment: number) {
//     progress = Math.min(progress + increment, 100); // Cap at 100%
//     if (progressElement) {
//         progressElement.textContent = `${progress}%`;
//
//         // Trigger animation on progress update
//         progressElement.classList.add('animated');
//         setTimeout(() => {
//             progressElement.classList.remove('animated');
//         }, 300); // Match CSS animation duration
//     }
//
//     // When loading reaches 100%, fade out the screen
//     if (progress === 100) {
//         clearInterval(interval);
//         fadeOutLoadingScreen();
//     }
// }
//
// // Function to fade out the loading screen
// function fadeOutLoadingScreen() {
//     if (loadingScreen) {
//         loadingScreen.classList.add('fade-out');
//         setTimeout(() => {
//             window.location.href = 'homepage.html'; // Redirect to homepage
//         }, 1000); // Allow fade-out animation to complete
//     }
// }
//
// // Automatically increment progress every second
// window.addEventListener('load', () => {
//     interval = window.setInterval(() => {
//         updateProgress(10); // Increase progress by 10% every second
//     }, 1000);
//
//     // Allow visitors to click anywhere to speed up loading
//     if (loadingScreen) {
//         loadingScreen.addEventListener('click', () => {
//             updateProgress(25); // Add 25% per click
//         });
//     }
// });
//
// // Initialize the first welcome text
// updateWelcomeText();
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
// // Navigation color updates based on the current page
// const nav = document.querySelector('nav') as HTMLElement;
//
// // Get the current page filename
// const currentPage = window.location.pathname.split('/').pop();
//
// // Assign a class to the nav based on the page
// if (nav) {
//     switch (currentPage) {
//         case 'homepage.html':
//             nav.classList.add('home-nav');
//             break;
//         case 'portfolio.html':
//             nav.classList.add('portfolio-nav');
//             break;
//         case 'about.html':
//             nav.classList.add('about-nav');
//             break;
//         case 'contact.html':
//             nav.classList.add('contact-nav');
//             break;
//         default:
//             nav.classList.add('default-nav'); // Fallback for unclassified pages
//     }
// }
//
// // //UX.html
// // document.addEventListener("DOMContentLoaded", () => {
// //     const viewProjectButtons = document.querySelectorAll(".view-project-btn");
// //
// //     viewProjectButtons.forEach((button) => {
// //         button.addEventListener("click", (event) => {
// //             const targetId = (event.currentTarget as HTMLButtonElement).dataset.target;
// //             const targetElement = document.getElementById(targetId);
// //
// //             if (targetElement) {
// //                 targetElement.classList.toggle("hidden"); // Toggle visibility
// //             }
// //         });
// //     });
// // });
//
// //ux
// document.addEventListener("DOMContentLoaded", () => {
//     const viewProjectButtons = document.querySelectorAll(".view-project-btn");
//
//     viewProjectButtons.forEach((button) => {
//         button.addEventListener("click", (event) => {
//             const targetButton = event.currentTarget as HTMLButtonElement;
//             if (!targetButton || !targetButton.dataset.target) {
//                 console.error("Button or target ID is missing.");
//                 return;
//             }
//
//             const targetId = targetButton.dataset.target;
//             const targetElement = document.getElementById(targetId);
//
//             if (targetElement) {
//                 targetElement.classList.toggle("hidden"); // Toggle visibility
//             } else {
//                 console.error(`No element found with ID: ${targetId}`);
//             }
//         });
//     });
// });
//
//
// // Read More Toggle
// document.addEventListener("DOMContentLoaded", () => {
//     const moreContent = document.getElementById("more-content") as HTMLDivElement | null;
//     const readMoreBtn = document.getElementById("read-more-btn") as HTMLButtonElement | null;
//
//     if (moreContent && readMoreBtn) {
//         readMoreBtn.addEventListener("click", () => {
//             if (moreContent.classList.contains("hidden")) {
//                 moreContent.classList.remove("hidden");
//                 readMoreBtn.textContent = "Read Less";
//             } else {
//                 moreContent.classList.add("hidden");
//                 readMoreBtn.textContent = "Read More";
//             }
//         });
//     }
// });

// Import styles and assets
import './styles.css';
// import corgiGif from './assets/image/loading-corgi.gif';

// // Attach the GIF to the loading screen
// const gifElement = document.getElementById('corgi-gif') as HTMLImageElement;
// if (gifElement) gifElement.src = corgiGif;

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


// Read More Toggle
document.addEventListener('DOMContentLoaded', function () {
    const readMoreBtn = document.getElementById('read-more-btn');
    const moreContent = document.getElementById('more-content');

    if (readMoreBtn && moreContent) {
        readMoreBtn.addEventListener('click', function () {
            moreContent.classList.toggle('show');

            if (moreContent.classList.contains('show')) {
                readMoreBtn.textContent = 'Show Less';
            } else {
                readMoreBtn.textContent = 'Read More';
            }
        });
    }
});




// UX Project Tabs Navigation
document.addEventListener("DOMContentLoaded", () => {
    const tabButtons = document.querySelectorAll(".ux-tab");
    const tabContents = document.querySelectorAll(".ux-content");

    tabButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            const targetButton = event.currentTarget as HTMLButtonElement;
            if (!targetButton || !targetButton.dataset.target) {
                console.error("Button or target ID is missing.");
                return;
            }

            const targetId = targetButton.dataset.target;
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                tabContents.forEach((content) => content.classList.add("hidden")); // Hide all
                targetElement.classList.remove("hidden"); // Show selected
                tabButtons.forEach((btn) => btn.classList.remove("active"));
                targetButton.classList.add("active");
            } else {
                console.error(`No element found with ID: ${targetId}`);
            }
        });
    });
});

