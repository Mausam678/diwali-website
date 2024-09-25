window.onload = function() {
    const fireworks = document.querySelectorAll('.firework');
    
    fireworks.forEach((firework, index) => {
        setTimeout(() => {
            firework.style.top = `${Math.random() * 100}vh`;
            firework.style.left = `${Math.random() * 100}vw`;
        }, index * 500); // Delays the appearance of each firework
    });
};
