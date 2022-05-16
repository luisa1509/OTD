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
  if(graphicsGrups !== null && graphicsGrups !== undefined) graphicsGrups.src="https://app.powerbi.com/view?r=eyJrIjoiMjM0YzY4MGEtMmJiMy00OTk2LWFjY2EtMjM2NDUyOTY5Y2IyIiwidCI6ImU5OTQwNzJiLTUyM2UtNGJmZS04NmUyLTQ0MmM1ZTEwYjI0NCIsImMiOjR9";
  if(graphicsConvo !== null && graphicsConvo !== undefined) graphicsConvo.src="https://app.powerbi.com/view?r=eyJrIjoiNDQ1Y2Q5YTEtMGM2YS00ZTlhLWE3NTUtNzcyZTY3ZDdjNzZkIiwidCI6ImU5OTQwNzJiLTUyM2UtNGJmZS04NmUyLTQ0MmM1ZTEwYjI0NCIsImMiOjR9";
  if(graphicsInvest !== null && graphicsInvest !== undefined) graphicsInvest.src="https://app.powerbi.com/view?r=eyJrIjoiOWEzYzJkMWUtNDYxNS00N2MyLThkMWMtMTZhMDExMjFlYWQ3IiwidCI6ImU5OTQwNzJiLTUyM2UtNGJmZS04NmUyLTQ0MmM1ZTEwYjI0NCIsImMiOjR9";
  if(graphicsProyects !== null && graphicsProyects !== undefined) graphicsProyects.src="https://app.powerbi.com/view?r=eyJrIjoiZWYzZGM2N2EtMDZkOS00ZDg0LTllN2QtMzY0MzU1NmM5ODVhIiwidCI6ImU5OTQwNzJiLTUyM2UtNGJmZS04NmUyLTQ0MmM1ZTEwYjI0NCIsImMiOjR9";
  if(graphicsProducts !== null && graphicsProducts !== undefined) graphicsProducts.src="https://app.powerbi.com/view?r=eyJrIjoiNTUwNmU5MWUtMGZlMC00Y2RiLTg5OGQtOWVlMjJlNDdlNTIzIiwidCI6ImU5OTQwNzJiLTUyM2UtNGJmZS04NmUyLTQ0MmM1ZTEwYjI0NCIsImMiOjR9";
  if(graphicsCreation !== null && graphicsCreation !== undefined) graphicsCreation.src="https://app.powerbi.com/view?r=eyJrIjoiOTQyNWM4ZDctYWM5OS00YjUyLTgxOTYtYzA0OGE5YzYwZTRiIiwidCI6ImU5OTQwNzJiLTUyM2UtNGJmZS04NmUyLTQ0MmM1ZTEwYjI0NCIsImMiOjR9";
  
  console.log("darks");
  //console.log( graphicsProducts.src);
  if(nav !== null && nav !== undefined) nav.classList.remove('dark-mode');
 


  
}
/*Si clicamos en el botón de la luna, añadiremos la clase css dark-mode del div 
con id page y se aplicará el estilo active a la luna*/
document.getElementById('id-moon').onclick = function(){
  cambiarLogoDark();
  cambiarIconosDark();
  body.classList.add('dark-mode')
  if(graphicsGrups !== null && graphicsGrups !== undefined) graphicsGrups.src="https://app.powerbi.com/view?r=eyJrIjoiMDNmNWJiY2QtNmUzZi00YWM4LTg0OWUtY2U2Njg3NGJiYjMyIiwidCI6ImU5OTQwNzJiLTUyM2UtNGJmZS04NmUyLTQ0MmM1ZTEwYjI0NCIsImMiOjR9";
  if(graphicsConvo !== null && graphicsConvo !== undefined) graphicsConvo.src="https://app.powerbi.com/view?r=eyJrIjoiNDBmNTUyNzEtNDY4OC00ZjFmLTg0YjItOTQxYmJkNTM2Zjk0IiwidCI6ImU5OTQwNzJiLTUyM2UtNGJmZS04NmUyLTQ0MmM1ZTEwYjI0NCIsImMiOjR9";
  if(graphicsInvest !== null && graphicsInvest !== undefined) graphicsInvest.src="https://app.powerbi.com/view?r=eyJrIjoiMDFlNGMxODItMjA4My00YWRkLTg5ZTUtYzE5YWNlNzNmZmVkIiwidCI6ImU5OTQwNzJiLTUyM2UtNGJmZS04NmUyLTQ0MmM1ZTEwYjI0NCIsImMiOjR9";
  if(graphicsProyects !== null && graphicsProyects !== undefined) graphicsProyects.src="https://app.powerbi.com/view?r=eyJrIjoiMGY1OGFlMzEtMDQxZC00MzcyLWIwYmItMmY5NjE5ZTI4Y2QwIiwidCI6ImU5OTQwNzJiLTUyM2UtNGJmZS04NmUyLTQ0MmM1ZTEwYjI0NCIsImMiOjR9";
  if(graphicsProducts !== null && graphicsProducts !== undefined) graphicsProducts.src="https://app.powerbi.com/view?r=eyJrIjoiOGNlMWE0YmItYmM0My00NmI5LWI0MzgtMjIxODM4ZDlhNThkIiwidCI6ImU5OTQwNzJiLTUyM2UtNGJmZS04NmUyLTQ0MmM1ZTEwYjI0NCIsImMiOjR9";
  if(graphicsCreation !== null && graphicsCreation !== undefined) graphicsCreation.src="https://app.powerbi.com/view?r=eyJrIjoiMGMzOTgyZmEtNzJjYy00YjU2LTk3OTYtMjE5ZTY0ZDM3YWU3IiwidCI6ImU5OTQwNzJiLTUyM2UtNGJmZS04NmUyLTQ0MmM1ZTEwYjI0NCIsImMiOjR9";
  //console.log( graphicsProducts.src);
  
  if(nav !== null && nav !== undefined) nav.classList.add('dark-mode');
  console.log("darks");




}




