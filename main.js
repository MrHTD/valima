const weddingDate = new Date("March 29, 2026 13:00:00").getTime();

const x = setInterval(function () {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const countdownElement = document.getElementById("countdown");

    if (distance < 0) {
        clearInterval(x);
        countdownElement.innerHTML = "We are married!";
    } else {
        countdownElement.innerHTML = `${days}d ${hours}h ${seconds}s`;
    }
}, 1000);
// --- OPTIMIZED FALLING PETALS FUNCTION ---
function startPetalEffect() {
    // 1. Detect if the device is Mobile (screen less than 600px)
    const isMobile = window.innerWidth < 600;

    // 2. Set Configurations based on device
    // Mobile: Spawn slower (1200ms) to save battery and space
    // Desktop: Spawn faster (600ms) for a fuller look
    const spawnInterval = isMobile ? 1200 : 600;

    // Mobile: Size between 20px and 45px
    // Desktop: Size between 40px and 80px
    const minSize = isMobile ? 20 : 40;
    const sizeRange = isMobile ? 30 : 60;

    function createInnerPetal() {
        const container = document.getElementById('inner-petals-container');
        // Safety check: if container doesn't exist, stop
        if (!container) return;

        const petal = document.createElement('img');

        const petalImages = [
            './images/white-flower.webp',
            './images/light-blue-flower.png'
        ];

        const randomImage = petalImages[Math.floor(Math.random() * petalImages.length)];
        petal.src = randomImage;

        petal.classList.add('inner-petal');

        // Random Horizontal Position
        petal.style.left = (Math.random() * 70 + 10) + '%';
        // OPTIMIZED SIZING LOGIC
        const size = Math.random() * sizeRange + minSize;
        petal.style.width = size + 'px';

        // Random Animation Duration (Slower fall for smaller petals looks more natural)
        // Between 5s and 10s
        petal.style.animationDuration = Math.random() * 5 + 5 + 's';

        container.appendChild(petal);

        // Remove after animation to prevent memory leak
        petal.addEventListener('animationend', () => {
            petal.remove();
        });
    }

    // Start the interval with the optimized speed
    setInterval(createInnerPetal, spawnInterval);
}

// Find the element
const allNames = document.querySelectorAll('.names, .fname, .ampersand');
allNames.forEach((element, index) => {
    element.classList.add('run-animation');
});

// Start the effect
startPetalEffect();