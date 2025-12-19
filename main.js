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
    // Respect accessibility setting
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
    }

    const container = document.getElementById('inner-petals-container');
    if (!container) return;

    const isMobile = window.innerWidth < 600;
    const spawnInterval = isMobile ? 1200 : 600;
    const minSize = isMobile ? 20 : 40;
    const sizeRange = isMobile ? 30 : 60;

    const petalImages = [
        './images/vecteezy_elegant-floral-composition-featuring-detailed-art-inspired_55531363.png',
        './images/vecteezy_ai-generated-watercolor-painting-of-rose_41321019.png'
    ];

    let petalTimer;

    function createPetal() {
        const petal = document.createElement('img');
        petal.src = petalImages[Math.floor(Math.random() * petalImages.length)];
        petal.className = 'inner-petal';

        petal.style.left = (Math.random() * 70 + 10) + '%';
        petal.style.width = (Math.random() * sizeRange + minSize) + 'px';
        petal.style.animationDuration = (Math.random() * 5 + 5) + 's';

        container.appendChild(petal);
        petal.addEventListener('animationend', () => petal.remove());
    }

    function start() {
        if (!petalTimer) {
            petalTimer = setInterval(createPetal, spawnInterval);
        }
    }

    function stop() {
        clearInterval(petalTimer);
        petalTimer = null;
    }

    // Pause when tab hidden (huge battery win)
    document.addEventListener('visibilitychange', () => {
        document.hidden ? stop() : start();
    });

    start();
}


// Find the element
document
    .querySelectorAll('.names, .fname, .ampersand')
    .forEach(el => el.classList.add('run-animation'));

//roll text animation
function rollEachCharacter() {
    const initialDelay = 1.0;

    document.querySelectorAll('.roll-line').forEach((lineEl, lineIndex) => {
        const text = lineEl.dataset.text || lineEl.textContent;
        lineEl.innerHTML = '';

        [...text].forEach((char, charIndex) => {
            const span = document.createElement('span');

            if (char === ' ') {
                // Create a non-breaking space span to preserve spacing
                span.className = 'roll-text space';
                span.textContent = '\u00A0';
            } else {
                span.className = 'roll-text';
                span.textContent = char;
                span.style.animationDelay = `${(initialDelay + lineIndex * 0.2 + charIndex * 0.1).toFixed(2)}s`;
            }

            lineEl.appendChild(span);
        });
    });
}

window.addEventListener('DOMContentLoaded', rollEachCharacter);
// Start the effect
startPetalEffect();


