const images = [
    'images/resim.jpg',
    'images/resim2.jpg',
];

let currentImageIndex = 1;

function showCurrentImage() {
    const image = document.getElementById('surpriseImage');
    image.src = images[currentImageIndex];
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showCurrentImage();
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showCurrentImage();
}

function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

function createHeartFlood() {
    const heart = document.createElement('div');
    heart.className = 'heart-flood';
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 1 + 's';
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 3000);
}

function showLove() {
    for (let i = 0; i < 20; i++) {
        setTimeout(createHeart, i * 150);
    }
}

function addFrameHearts() {
    const frame = document.getElementById('imageFrame');
    const positions = [
        { top: '-12px', left: '50%', transform: 'translateX(-50%)' },
        { bottom: '-12px', left: '50%', transform: 'translateX(-50%)' },
        { left: '-12px', top: '50%', transform: 'translateY(-50%)' },
        { right: '-12px', top: '50%', transform: 'translateY(-50%)' }
    ];

    positions.forEach(pos => {
        const heart = document.createElement('div');
        heart.className = 'frame-heart';
        heart.innerHTML = '❤️';
        Object.assign(heart.style, pos);
        frame.appendChild(heart);
    });
}

function showImage() {
    const bigHeart = document.getElementById('bigHeart');
    const imageFrame = document.getElementById('imageFrame');
    const image = document.getElementById('surpriseImage');
    const controls = document.querySelector('.gallery-controls');

    document.querySelector('.overlay').classList.add('show');
    bigHeart.classList.add('show');
    
    setTimeout(() => {
        bigHeart.classList.add('fade');
        imageFrame.classList.add('show');
        image.classList.add('show');
        controls.classList.add('show');

        addFrameHearts();
    }, 1000);
    
    setTimeout(() => {
        bigHeart.classList.remove('show', 'fade');
    }, 1500);
}

function hideImage() {
    document.getElementById('bigHeart').classList.remove('show', 'fade');
    document.getElementById('imageFrame').classList.remove('show');
    document.getElementById('surpriseImage').classList.remove('show');
    document.querySelector('.overlay').classList.remove('show');
    document.querySelector('.gallery-controls').classList.remove('show');

}

document.addEventListener('DOMContentLoaded', () => {
    setInterval(createHeart, 300);
    
    document.getElementById('surpriseImage').addEventListener('click', (e) => {
        e.stopPropagation();
        for (let i = 0; i < 30; i++) {
            setTimeout(createHeartFlood, i * 50);
        }
    });
});