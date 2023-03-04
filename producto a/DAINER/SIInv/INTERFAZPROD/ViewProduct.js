const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const auto = true; // Opción para que el carrusel se mueva automáticamente
const intervalTime = 5000; // Tiempo entre cada cambio de imagen
let slideInterval;

// Función para pasar a la siguiente imagen
const nextSlide = () => {
  // Buscamos la imagen actual
  const current = document.querySelector('.current');
  // Quitamos la clase 'current' de la imagen actual
  current.classList.remove('current');
  // Comprobamos si hay una imagen siguiente
  if (current.nextElementSibling) {
    // Añadimos la clase 'current' a la siguiente imagen
    current.nextElementSibling.classList.add('current');
  } else {
    // Si no hay una siguiente imagen, volvemos al principio
    slides[0].classList.add('current');
  }
  // Borramos la información de la imagen anterior
  document.querySelector('.slide-info').remove();
  // Añadimos la información de la imagen actual
  const info = current.querySelector('.slide-info').cloneNode(true);
  document.querySelector('#slide-container').appendChild(info);
};

// Función para pasar a la imagen anterior
const prevSlide = () => {
  // Buscamos la imagen actual
  const current = document.querySelector('.current');
  // Quitamos la clase 'current' de la imagen actual
  current.classList.remove('current');
  // Comprobamos si hay una imagen anterior
  if (current.previousElementSibling) {
    // Añadimos la clase 'current' a la imagen anterior
    current.previousElementSibling.classList.add('current');
  } else {
    // Si no hay una imagen anterior, nos vamos a la última imagen
    slides[slides.length - 1].classList.add('current');
  }
  // Borramos la información de la imagen anterior
  document.querySelector('.slide-info').remove();
  // Añadimos la información de la imagen actual
  const info = current.querySelector('.slide-info').cloneNode(true);
  document.querySelector('#slide-container').appendChild(info);
};

// Event listener para el botón 'next'
next.addEventListener('click', () => {
  // Pasamos a la siguiente imagen
  nextSlide();
  // Reiniciamos el intervalo de tiempo
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

// Event listener para el botón 'prev'
prev.addEventListener('click', () => {
  // Pasamos a la imagen anterior
  prevSlide();
  // Reiniciamos el intervalo de tiempo
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

// Inicializamos el carrusel
const initCarousel = () => {
  // Añadimos la clase 'current' a la primera imagen
  slides[0].classList.add('current');
  // Añadimos la información de la primera imagen
  const info = slides[0].querySelector('.slide-info').cloneNode(true);
  document.querySelector('#slide-container').appendChild(info);
  // Iniciamos el intervalo de tiempo si la opción 'auto' está activada
  if (auto) {
    slideInterval = setInterval(nextSlide, intervalTime);
  }
};

initCarousel();

