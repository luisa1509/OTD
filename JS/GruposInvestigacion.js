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
  if(graphicsGrups !== null && graphicsGrups !== undefined) graphicsGrups.src="https://app.powerbi.com/view?r=eyJrIjoiNTQyYWEyZWItOWUwZS00NmUyLTg5MTUtYjA3NzhhYjgwODFlIiwidCI6ImU5OTQwNzJiLTUyM2UtNGJmZS04NmUyLTQ0MmM1ZTEwYjI0NCIsImMiOjR9";
  if(graphicsConvo !== null && graphicsConvo !== undefined) graphicsConvo.src="https://app.powerbi.com/view?r=eyJrIjoiNDQ1Y2Q5YTEtMGM2YS00ZTlhLWE3NTUtNzcyZTY3ZDdjNzZkIiwidCI6ImU5OTQwNzJiLTUyM2UtNGJmZS04NmUyLTQ0MmM1ZTEwYjI0NCIsImMiOjR9";
  if(graphicsInvest !== null && graphicsInvest !== undefined) graphicsInvest.src="https://app.powerbi.com/view?r=eyJrIjoiOWEzYzJkMWUtNDYxNS00N2MyLThkMWMtMTZhMDExMjFlYWQ3IiwidCI6ImU5OTQwNzJiLTUyM2UtNGJmZS04NmUyLTQ0MmM1ZTEwYjI0NCIsImMiOjR9";
  if(graphicsProyects !== null && graphicsProyects !== undefined) graphicsProyects.src="https://app.powerbi.com/view?r=eyJrIjoiZWYzZGM2N2EtMDZkOS00ZDg0LTllN2QtMzY0MzU1NmM5ODVhIiwidCI6ImU5OTQwNzJiLTUyM2UtNGJmZS04NmUyLTQ0MmM1ZTEwYjI0NCIsImMiOjR9";
  if(graphicsProducts !== null && graphicsProducts !== undefined) graphicsProducts.src="https://app.powerbi.com/view?r=eyJrIjoiZjA4OTMyZDctMWUwMS00Y2E3LWEwMjItOTZlZTA5NjFhYjg5IiwidCI6ImU5OTQwNzJiLTUyM2UtNGJmZS04NmUyLTQ0MmM1ZTEwYjI0NCIsImMiOjR9";
  if(graphicsCreation !== null && graphicsCreation !== undefined) graphicsCreation.src="https://app.powerbi.com/view?r=eyJrIjoiMGI0NWRiNjItYTg4Ni00MTU1LTllNzItYTgxY2FkYThkMWUwIiwidCI6ImU5OTQwNzJiLTUyM2UtNGJmZS04NmUyLTQ0MmM1ZTEwYjI0NCIsImMiOjR9";
  
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
  if(graphicsGrups !== null && graphicsGrups !== undefined) graphicsGrups.src="https://app.powerbi.com/view?r=eyJrIjoiYTI4MWQ4ZDQtMjZjZS00MTZmLTk5YjAtZGY1MTk0YTUzNzNmIiwidCI6ImU5OTQwNzJiLTUyM2UtNGJmZS04NmUyLTQ0MmM1ZTEwYjI0NCIsImMiOjR9";
  if(graphicsConvo !== null && graphicsConvo !== undefined) graphicsConvo.src="https://app.powerbi.com/view?r=eyJrIjoiYTJhMWEwOGQtNDM5MC00MDc3LTg4ZDItZmEwMzM3YjdmNGFmIiwidCI6ImU5OTQwNzJiLTUyM2UtNGJmZS04NmUyLTQ0MmM1ZTEwYjI0NCIsImMiOjR9";
  if(graphicsInvest !== null && graphicsInvest !== undefined) graphicsInvest.src="https://app.powerbi.com/view?r=eyJrIjoiNmE2YjNiYzEtYjE3Yi00NjA2LTg1NmMtMGYyYTYzNGQyY2I3IiwidCI6ImU5OTQwNzJiLTUyM2UtNGJmZS04NmUyLTQ0MmM1ZTEwYjI0NCIsImMiOjR9";
  if(graphicsProyects !== null && graphicsProyects !== undefined) graphicsProyects.src="https://app.powerbi.com/view?r=eyJrIjoiNTE3OTliMGQtMDc5NC00NmI2LWEzZDctNjcxNGJkN2NlN2UzIiwidCI6ImU5OTQwNzJiLTUyM2UtNGJmZS04NmUyLTQ0MmM1ZTEwYjI0NCIsImMiOjR9";
  if(graphicsProducts !== null && graphicsProducts !== undefined) graphicsProducts.src="https://app.powerbi.com/view?r=eyJrIjoiNjU3MzUzYzktNTk0My00ZDFkLWFiNjAtZTAxMGVhOWM5M2JkIiwidCI6ImU5OTQwNzJiLTUyM2UtNGJmZS04NmUyLTQ0MmM1ZTEwYjI0NCIsImMiOjR9";
  if(graphicsCreation !== null && graphicsCreation !== undefined) graphicsCreation.src="https://app.powerbi.com/view?r=eyJrIjoiMjY2YzkyNjgtNzdiNi00YjFkLTk2ZDAtZTUwN2JjY2VlYTI1IiwidCI6ImU5OTQwNzJiLTUyM2UtNGJmZS04NmUyLTQ0MmM1ZTEwYjI0NCIsImMiOjR9";
  //console.log( graphicsProducts.src);
  
  if(nav !== null && nav !== undefined) nav.classList.add('dark-mode');
  console.log("darks");




}




