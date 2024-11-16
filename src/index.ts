import './styles.css';

window.addEventListener('DOMContentLoaded', () => {
    const loadingScreen = document.getElementById('loading-screen');
    const welcomeScreen = document.getElementById('welcome-screen');

    if (loadingScreen && welcomeScreen) {
        // Show the loading screen for 5 seconds
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            welcomeScreen.style.display = 'flex';
        }, 5000); // Adjust the time (5000 ms = 5 seconds)
    }
});
