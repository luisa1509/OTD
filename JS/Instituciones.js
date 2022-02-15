

let nav = document.querySelector(".nav_principal");
let body = document.querySelector("body");

function cambiarLogoDark(){
  document.getElementById("logo").src="/Imgs/logodark.png";
}

function cambiarLogoLight(){
  document.getElementById("logo").src="/Imgs/logolight.png";
}

document.getElementById('id-sun').onclick = function(){
  cambiarLogoLight();
  body.classList.remove('dark-mode');
  nav.classList.remove('dark-mode');

  console.log("darks");
  
}
/*Si clicamos en el botón de la luna, añadiremos la clase css dark-mode del div 
con id page y se aplicará el estilo active a la luna*/
document.getElementById('id-moon').onclick = function(){
  cambiarLogoDark();
  body.classList.add('dark-mode')
  nav.classList.add('dark-mode');



  console.log("darks");
}