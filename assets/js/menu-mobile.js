const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
   if (event.type === 'touchstart') event.preventDefault();

   const nav = document.getElementById('nav');
   nav.classList.toggle('active');

   const active = nav.classList.contains('active');

   event.currentTarget.setAttribute('aria-expanded', active);

   if (active) {
      event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
   } else {
      event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
   }
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);


//animação maquina de escrever
function typeWriter(elemento) {
   const textoArray = elemento.innerHTML.split('');
   elemento.innerHTML = '';
   textoArray.forEach((letra, i) => {
      setTimeout(() => elemento.innerHTML += letra, 90 * i);
   });
}
const titulo = document.querySelector('h3');
typeWriter(titulo);