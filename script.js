const card = document.getElementById('card');

document.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const deltaX = clientX - centerX;
    const deltaY = clientY - centerY;
    const angleX = deltaY / 20;
    const angleY = deltaX / -20;

    card.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
});