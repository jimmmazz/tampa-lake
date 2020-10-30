const hero = document.getElementById('hero');
const modal = document.querySelector('.modal');
const contactBtn = document.querySelector('.hero-btn');
const locationBtn = document.querySelector('.location-btn');
const locationSection = document.getElementById('location');

// MODAL
contactBtn.addEventListener('click', (e) => {
  e.preventDefault();
  modal.classList.add('show');
})

hero.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal') || e.target.classList.contains('close-modal')) {
    modal.classList.remove('show');
  };
})

// lightbox

const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

const images = document.querySelectorAll('.gallery-img');
images.forEach((image) => {
  image.addEventListener('click', (e) => {
    lightbox.classList.add('lightbox-active');
    const img = document.createElement('img');
    img.src = image.src;
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild);
    }
    lightbox.appendChild(img);
  })
})

lightbox.addEventListener('click', (e) => {
  if (e.target !== e.currentTarget) return;
  lightbox.classList.remove('lightbox-active');
})
