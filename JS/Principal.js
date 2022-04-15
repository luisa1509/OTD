
let body = document.querySelector("body");



document.getElementById('id-sun').onclick = function(){

  body.classList.remove('dark-mode');
  

  console.log("darks");
  
}
/*Si clicamos en el botón de la luna, añadiremos la clase css dark-mode del div 
con id page y se aplicará el estilo active a la luna*/
document.getElementById('id-moon').onclick = function(){

  body.classList.add('dark-mode')
 



  console.log("darks");
}

