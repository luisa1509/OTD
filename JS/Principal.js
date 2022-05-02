
let body = document.querySelector("body");
const btnprincipal = document.querySelector(".plataform");


btnprincipal.addEventListener("click", function(){
  console.log("hola")
  window.location.href = './HTMLS/Tutorial.html'
});


function cambiarImgDark(){
  document.getElementById("line1").src="./Imgs/LineWhite.png";
  document.getElementById("line2").src="./Imgs/LineWhite.png";

}

function cambiarImgLight(){
  document.getElementById("line1").src="./Imgs/LineBlue.png";
  document.getElementById("line2").src="./Imgs/LineBlue.png";

}

function cambiarLogoDark(){
  document.getElementById("logoRAD").src="./Imgs/logoRADdark.png";
  document.getElementById("logoOTD").src="./Imgs/logodark.png";
}

function cambiarLogoLight(){
  document.getElementById("logoRAD").src="./Imgs/logoRADlight.png";
  document.getElementById("logoOTD").src="./Imgs/logolight.png";
}

document.getElementById('id-sun').onclick = function(){
  cambiarLogoLight();
  cambiarImgLight()
  body.classList.remove('dark-mode');

  

  console.log("darks");
  
}
/*Si clicamos en el botón de la luna, añadiremos la clase css dark-mode del div 
con id page y se aplicará el estilo active a la luna*/
document.getElementById('id-moon').onclick = function(){
  cambiarLogoDark();
  cambiarImgDark()
  body.classList.add('dark-mode')

 
  console.log("darks");
}

