const passer = document.querySelector('.header__passer');

document.addEventListener('mousemove', (event) => {
    const rect = passer.getBoundingClientRect();
    const passerX = rect.left + rect.width / 2;
    const passerY = rect.top + rect.height / 2;

    const deltaX = event.clientX - passerX;
    const deltaY = event.clientY - passerY;

    const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
    passer.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
});