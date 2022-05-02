let body = document.querySelector("body");
const btntutorial = document.querySelector(".plataformTuto");

btntutorial.addEventListener("click", function () {
    console.log("hola")
    window.location.href = 'GruposInvestigacion.html'
});

function cambiarLogoDark(){

    document.getElementById("logoOTD").src=".././Imgs/logodark.png";
  }
  
  function cambiarLogoLight(){

    document.getElementById("logoOTD").src=".././Imgs/logolight.png";
  }

document.getElementById('id-sun').onclick = function () {

    body.classList.remove('dark-mode');
    cambiarLogoLight();



    console.log("darks");

}
/*Si clicamos en el botón de la luna, añadiremos la clase css dark-mode del div 
con id page y se aplicará el estilo active a la luna*/
document.getElementById('id-moon').onclick = function () {

    body.classList.add('dark-mode')
    cambiarLogoDark();


    console.log("darks");
}
