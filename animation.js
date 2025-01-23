function glitch() {
    const h1 = document.querySelector('h1'); 
    if (!h1) {
        console.error('No h1 found.');
        return;
    }

    const originalStyles = {
        transform: window.getComputedStyle(h1).transform || 'none',
    };

    const glitchEffect = () => {
        const randomSkewX = Math.random() * 2 - 1;
        const randomSkewY = Math.random() * 2 - 1;
        const randomScale = Math.random() * 0.02 + 0.99;
        const randomTranslateX = Math.random() * 1 - 0.5;
        const randomTranslateY = Math.random() * 1 - 0.5;

        h1.style.transform = `skew(${randomSkewX}deg, ${randomSkewY}deg) scale(${randomScale}) translate(${randomTranslateX}px, ${randomTranslateY}px)`;
    };

    setInterval(() => {
        glitchEffect();
    }, 150);
}
