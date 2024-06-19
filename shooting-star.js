const backgroundStars = document.querySelector('.background-stars');
const numStars = 2;

for (let i = 0; i < numStars; i++)
    {
        const shape = document.createElement('div');
        shape.className = 'shooting-star';
        backgroundStars.appendChild(shape);
    }

const randomShapes = document.querySelectorAll('.shooting-star');

randomShapes.forEach((shape) => {
    const randomX = Math.random() * (window.innerWidth - shape.clientWidth); // Adjusted X position range
    const randomY = Math.random(); // Adjusted Y position range
    
    shape.style.left = `${randomX}px`;
    shape.style.top = `${randomY}px`;
    
    // Add falling animation
    shape.style.animationDuration = `${Math.random() * 1 + 3}s`; // Random duration between 1s and 4s
    
});