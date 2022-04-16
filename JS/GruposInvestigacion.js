let nav = document.querySelector(".nav_principal");
let body = document.querySelector("body");

let graphicsGrups =document.querySelector(".graphicsGrups");
let graphicsConvo =document.querySelector(".graphicsConvo");
let graphicsInvest =document.querySelector(".graphicsInvest");
let graphicsProyects =document.querySelector(".graphicsProyects");
let graphicsProducts =document.querySelector(".graphicsProducts");
let graphicsCreation =document.querySelector(".graphicsCreation");

function cambiarLogoDark(){
  document.getElementById("logo").src=".././Imgs/logodark.png";
  document.getElementById("logoRAD").src=".././Imgs/logoRADdark.png";
}

function cambiarLogoLight(){
  document.getElementById("logo").src=".././Imgs/logolight.png";
  document.getElementById("logoRAD").src=".././Imgs/logoRADlight.png";
}

function cambiarIconosDark(){
  document.getElementById("grupos").src=".././Imgs/grupowhite.png";
  document.getElementById("convocatorias").src=".././Imgs/convocatoriaswhite.png";
  document.getElementById("investigadores").src=".././Imgs/investigadoreswhite.png";
  document.getElementById("proyectos").src=".././Imgs/proyectosdeinvestigacionwhite.png";
  document.getElementById("productos").src=".././Imgs/productoswhite.png";
  document.getElementById("creacion").src=".././Imgs/creacionwhite.png";
}

function cambiarIconosLight(){
  document.getElementById("grupos").src=".././Imgs/grupowhite.png";
  document.getElementById("convocatorias").src=".././Imgs/convocatoriasblack.png";
  document.getElementById("investigadores").src=".././Imgs/investigadoresblack.png";
  document.getElementById("proyectos").src=".././Imgs/proyectosdeinvestigacionblack.png";
  document.getElementById("productos").src=".././Imgs/productosblack.png";
  document.getElementById("creacion").src=".././Imgs/creacionblack.png";
  
}

document.getElementById('id-sun').onclick = function(){
  cambiarLogoLight();
  cambiarIconosLight();
  body.classList.remove('dark-mode');
  nav.classList.remove('dark-mode');

  console.log("darks");
  
}
/*Si clicamos en el botón de la luna, añadiremos la clase css dark-mode del div 
con id page y se aplicará el estilo active a la luna*/
document.getElementById('id-moon').onclick = function(){
  cambiarLogoDark();
  cambiarIconosDark();
  body.classList.add('dark-mode')
  nav.classList.add('dark-mode');



  console.log("darks");
}



