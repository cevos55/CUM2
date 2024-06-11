//animation de changement de couleur
const title = document.querySelector('h1');
const colors = ['black', 'blue', 'gold', 'blue'];
let index = 0;

function changeColor() {
  title.style.color = colors[index % colors.length];
  index++;
}

setInterval(changeColor, 1000); // Changer la couleur du titre toutes les 1 seconde


