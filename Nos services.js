

// Sélectionnez le titre h3
const title = document.querySelector('h3');

// Définissez la fonction d'animation pour le fondu
function animateTitle() {
  anime({
    targets: title,
    opacity: {
      value: [0, 1], // Animation de l'opacité du titre de 0 (invisible) à 1 (visible)
      duration: 2000, // Durée de l'animation en millisecondes
      easing: 'easeInOutQuad' // Fonction d'interpolation pour un fondu en douceur
    },
    complete: () => {
      animateLetters(); // Démarrez l'animation des lettres
    }
  });
}

// Anime chaque lettre individuellement
function animateLetters() {
  const letters = title.textContent.split('');
  title.innerHTML = '';

  letters.forEach((letter, index) => {
    const letterElement = document.createElement('span');
    letterElement.textContent = letter;
    letterElement.style.display = 'inline-block';

    anime({
      targets: letterElement,
      translateY: ['-10px', '10px', '0px'],
      duration: 500,
      easing: 'easeInOutQuad',
      delay: index * 100 // Ajoutez un délai pour décaler l'animation de chaque lettre
    });

    title.appendChild(letterElement);
  });

  // Répétez l'animation des lettres après un court délai
  setTimeout(animateLetters, 5000);
}

// Démarrez l'animation lorsque la page est chargée
window.addEventListener('load', () => {
  animateTitle();
});



