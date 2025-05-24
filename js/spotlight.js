const spotlight = document.getElementById('spotlight');

document.addEventListener('mousemove', e => {
    // Mauskoordinaten in Viewport
    const x = e.clientX;
    const y = e.clientY;

    // Position des Spotlight-Lochs setzen
    spotlight.style.left = x + 'px';
    spotlight.style.top  = y + 'px';
});