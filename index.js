const comCor = document.querySelector(".com-cor");
const semCor = document.querySelector(".sem-cor");
let cor;

comCor.addEventListener('click', () => {
  cor = getComputedStyle(comCor).backgroundColor;
});

semCor.addEventListener('click', () => {
  
  if (getComputedStyle(semCor).backgroundColor == cor) {
    semCor.style.backgroundColor = 'white';
  } else {
    semCor.style.backgroundColor = cor;
    }

});