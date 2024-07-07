document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.carousel .grande');
  const images = document.querySelectorAll('.carousel .grande img');
  const prevButton = document.querySelector('.contenedor-carousel .previo');
  const nextButton = document.querySelector('.contenedor-carousel .proximo');
  let index = 0;

  carousel.style.width = `${images.length * 100}%`;

  function updateCarousel() {
      const offset = -index * 100 / images.length ;
      carousel.style.transform = `translateX(${offset}%)`;
  }

  prevButton.addEventListener('click', () => {
      if (index > 0) {
          index--;
      } else {
          index = images.length - 1; // Ir a la última imagen
      }
      updateCarousel();
  });

  nextButton.addEventListener('click', () => {
      if (index < images.length - 1) {
          index++;
      } else {
          index = 0; // Volver a la primera imagen
      }
      updateCarousel();
  });

  updateCarousel();
});

document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('scrollButton');
  const target = document.getElementById('carousel-descripcion');

  button.addEventListener('click', () => {
      target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Formulario 

document.getElementById('login').addEventListener('submit', function (e) {
    e.preventDefault();
    const usuario = document.getElementById('usuario').value;
    const contraseña = document.getElementById('contraseña').value;

    fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: usuario, password: contraseña })
    }).then(response => response.json())
      .then(data => {
          if (data.success) {
              localStorage.setItem('token', data.token);
              window.location.href = '/admin.html'; // Cambia esto a la URL de tu página de administración
          } else {
              alert('Login failed');
          }
      });
});

