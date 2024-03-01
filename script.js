const heart = document.querySelector('.heart');
setInterval(() => {
    heart.style.transform = 'scale(1.1)';
    setTimeout(() => heart.style.transform = 'scale(1)', 500);
}, 1000);
