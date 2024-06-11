const image = document.querySelector('.image-block-jaune');
let scale = 1;

image.addEventListener('click', () => {
  scale += 0.2;
  image.style.transform = `scale(${scale})`;

  setTimeout(() => {
    scale = 1;
    image.style.transform = `scale(${scale})`;
  }, 5000); // 5000 millisecondes = 5 secondes
});


//animation de changement de couleur
const title = document.querySelector('h1');
const colors = ['black', 'blue', 'yellow', 'green'];
let index = 0;

function changeColor() {
  title.style.color = colors[index % colors.length];
  index++;
}

setInterval(changeColor, 1000); // Changer la couleur du titre toutes les 1 seconde


// Animation pour la classe "chiffres"
const numberElement = document.querySelector('.chiffres');
const targetNumber = 90;
let currentNumber = 0;

function countUp() {
  if (currentNumber < targetNumber) {
    currentNumber++;
    numberElement.textContent = currentNumber;
  } else {
    clearInterval(timer);
  }
}

const timer = setInterval(countUp, 10);

// Animation pour la classe "chiffres2"
const numbers = document.querySelectorAll('.chiffres2');
const targetNumbers = [10, 20, 30, 40];
const duration = 2000;
const interval = 50;

numbers.forEach((number, index) => {
  const targetNumber = targetNumbers[index];
  const increment = targetNumber / (duration / interval);
  let currentNumber = 0;

  const timer = setInterval(() => {
    if (currentNumber < targetNumber) {
      currentNumber += increment;
      number.textContent = Math.round(currentNumber);
    } else {
      clearInterval(timer);
      number.textContent = targetNumber;
    }
  }, interval);
});

// Animation pour la classe "chiffres4"
const number4 = document.querySelector('.chiffres4');
const targetNumber4 = 50;
const duration4 = 3000;
const delay4 = 500;

const startTimestamp4 = Date.now();

function animate4() {
  const currentTimestamp4 = Date.now();
  const elapsed4 = currentTimestamp4 - startTimestamp4;

  if (elapsed4 < delay4) {
    requestAnimationFrame(animate4);
    return;
  }

  const progress4 = Math.min(1, (elapsed4 - delay4) / duration4);
  const animatedNumber4 = Math.round(progress4 * targetNumber4);
  number4.textContent = animatedNumber4;

  if (progress4 < 1) {
    requestAnimationFrame(animate4);
  } else {
    number4.textContent = targetNumber4;
  }
}

animate4();


function handleScroll() {
  const blockBlanc2Position = blockBlanc2.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (blockBlanc2Position < windowHeight * 0.5) {
    blockBlanc2.classList.add('visible');
  } else {
    blockBlanc2.classList.remove('visible');
  }
}