const topBar = document.querySelector('#top-bar');
const exteriorColorSection = document.querySelector('#exterior-buttons');
const interiorColorSection = document.querySelector('#interior-buttons');
const exteriorImage = document.querySelector('#exterior-image');
const interiorImage = document.querySelector('#interior-image');

// Handle top bar on scroll
const handleScroll = () => {
    const atTop = window.scrollY === 0;
    topBar.classList.toggle('visible-bar', atTop);
    topBar.classList.toggle('hidden-bar', !atTop);
}

// Image Mapping
const exteriorImages = {
    'Stealth-grey' : '/images/model-y-stealth-grey.jpg',
    'Pearl-white' : '/images/model-y-pearl-white.jpg',
    'Deep-blue' : '/images/model-y-deep-blue-metallic.jpg',
    'Solid-black' : '/images/model-y-solid-black.jpg',
    'Ultra-red' : '/images/model-y-ultra-red.jpg',
    'Quicksilver' : '/images/model-y-quicksilver.jpg'
}

const interiorImages = {
    'Dark' : '/images/model-y-interior-dark.jpg',
    'Light' : '/images/model-y-interior-light.jpg'
}

// Handle Color Selection
const handleColorButtonClick = (e) => {
    let button;

    if(e.target.tagName === 'IMG') {
        button = e.target.closest('button');
    } else if (e.target.tagName === 'BUTTON') {
        button = e.target;
    }

    if (button) {
        const buttons = e.currentTarget.querySelectorAll('button');
        buttons.forEach((btn) => btn.classList.remove('btn-selected'));
        button.classList.add('btn-selected');

        // Change exterior images
        if (e.currentTarget === exteriorColorSection) {
            const color = button.querySelector('img').alt;
            exteriorImage.src = exteriorImages[color];
        }

        // Change interior images
        if (e.currentTarget === interiorColorSection) {
            const color = button.querySelector('img').alt;
            interiorImage.src = interiorImages[color];
        }
    }
}

// Event Listeners
window.addEventListener('scroll', () => requestAnimationFrame(handleScroll));
exteriorColorSection.addEventListener('click', handleColorButtonClick);
interiorColorSection.addEventListener('click', handleColorButtonClick);