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

let hereImg = document.querySelector(".here");
let gruposs= document.querySelector(".grupos");
let convos= document.querySelector(".convo");
let investis= document.querySelector(".investi");
let projectss= document.querySelector(".projects");
let productss= document.querySelector(".products");
let invest_creations= document.querySelector(".invest_creation");

var params = window.location.pathname;
console.log(params);

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
 

  //grupos de investigación
if(params !== null && params !== undefined && params=="/HTMLS/GruposInvestigacion.html"){

  imggrupo.setAttribute("src",".././Imgs/grupowhite.png");
  imgconvo.setAttribute("src",".././Imgs/convocatoriasblack.png");
  imginvesti.setAttribute("src",".././Imgs/investigadoresblack.png");
  imgprojects.setAttribute("src",".././Imgs/proyectosdeinvestigacionblack.png");
  imgproducts.setAttribute("src",".././Imgs/productosblack.png");
  imginvest_creation.setAttribute("src",".././Imgs/creacionblack.png");

  gruposs.addEventListener("mouseover", function(){
    imggrupo.setAttribute("src",".././Imgs/grupowhite.png");
    
  });

  gruposs.addEventListener("mouseout", function(){
    imggrupo.setAttribute("src",".././Imgs/grupowhite.png");

  });
  
  convos.addEventListener("mouseover", function(){
    imgconvo.setAttribute("src",".././Imgs/convocatoriaswhite.png");
    
  });

  convos.addEventListener("mouseout", function(){
    imgconvo.setAttribute("src",".././Imgs/convocatoriasblack.png");

  });

  investis.addEventListener("mouseover", function(){
    imginvesti.setAttribute("src",".././Imgs/investigadoreswhite.png");
   
    
  });

  investis.addEventListener("mouseout", function(){
    imginvesti.setAttribute("src",".././Imgs/investigadoresblack.png");

  });

  projectss.addEventListener("mouseover", function(){
    imgprojects.setAttribute("src",".././Imgs/proyectosdeinvestigacionwhite.png");
   
    
  });

  projectss.addEventListener("mouseout", function(){
    imgprojects.setAttribute("src",".././Imgs/proyectosdeinvestigacionblack.png");

  });

  productss.addEventListener("mouseover", function(){
    imgproducts.setAttribute("src",".././Imgs/productoswhite.png");
   
    
  });

  productss.addEventListener("mouseout", function(){
    imgproducts.setAttribute("src",".././Imgs/productosblack.png");

  });

  invest_creations.addEventListener("mouseover", function(){
    imginvest_creation.setAttribute("src",".././Imgs/creacionwhite.png");
   
    
  });

  invest_creations.addEventListener("mouseout", function(){
    imginvest_creation.setAttribute("src",".././Imgs/creacionblack.png");

  });

}


//convocatorias
if(params !== null && params !== undefined  && params=="/HTMLS/Convocatorias.html"){
  
  imggrupo.setAttribute("src",".././Imgs/grupoblack.png");
  imgconvo.setAttribute("src",".././Imgs/convocatoriaswhite.png");
  imginvesti.setAttribute("src",".././Imgs/investigadoresblack.png");
  imgprojects.setAttribute("src",".././Imgs/proyectosdeinvestigacionblack.png");
  imgproducts.setAttribute("src",".././Imgs/productosblack.png");
  imginvest_creation.setAttribute("src",".././Imgs/creacionblack.png");

  gruposs.addEventListener("mouseover", function(){
    imggrupo.setAttribute("src",".././Imgs/grupowhite.png");
    
  });

  gruposs.addEventListener("mouseout", function(){
    imggrupo.setAttribute("src",".././Imgs/grupoblack.png");

  });

  convos.addEventListener("mouseover", function(){
    imgconvo.setAttribute("src",".././Imgs/convocatoriaswhite.png");
    
  });

  convos.addEventListener("mouseout", function(){
    imgconvo.setAttribute("src",".././Imgs/convocatoriaswhite.png");

  });

  investis.addEventListener("mouseover", function(){
    imginvesti.setAttribute("src",".././Imgs/investigadoreswhite.png");
   
    
  });

  investis.addEventListener("mouseout", function(){
    imginvesti.setAttribute("src",".././Imgs/investigadoresblack.png");

  });

  projectss.addEventListener("mouseover", function(){
    imgprojects.setAttribute("src",".././Imgs/proyectosdeinvestigacionwhite.png");
   
    
  });

  projectss.addEventListener("mouseout", function(){
    imgprojects.setAttribute("src",".././Imgs/proyectosdeinvestigacionblack.png");

  });

  productss.addEventListener("mouseover", function(){
    imgproducts.setAttribute("src",".././Imgs/productoswhite.png");
   
    
  });

  productss.addEventListener("mouseout", function(){
    imgproducts.setAttribute("src",".././Imgs/productosblack.png");

  });

  invest_creations.addEventListener("mouseover", function(){
    imginvest_creation.setAttribute("src",".././Imgs/creacionwhite.png");
   
    
  });

  invest_creations.addEventListener("mouseout", function(){
    imginvest_creation.setAttribute("src",".././Imgs/creacionblack.png");

  });

}


//investigadores
if(params !== null && params !== undefined  && params=="/HTMLS/InvestigadoresGeneral.html"){
  
    imggrupo.setAttribute("src",".././Imgs/grupoblack.png");
  imgconvo.setAttribute("src",".././Imgs/convocatoriasblack.png");
  imginvesti.setAttribute("src",".././Imgs/investigadoreswhite.png");
  imgprojects.setAttribute("src",".././Imgs/proyectosdeinvestigacionblack.png");
  imgproducts.setAttribute("src",".././Imgs/productosblack.png");
  imginvest_creation.setAttribute("src",".././Imgs/creacionblack.png");

  gruposs.addEventListener("mouseover", function(){
    imggrupo.setAttribute("src",".././Imgs/grupowhite.png");
    
  });

  gruposs.addEventListener("mouseout", function(){
    imggrupo.setAttribute("src",".././Imgs/grupoblack.png");

  });

  convos.addEventListener("mouseover", function(){
    imgconvo.setAttribute("src",".././Imgs/convocatoriaswhite.png");
    
  });

  convos.addEventListener("mouseout", function(){
    imgconvo.setAttribute("src",".././Imgs/convocatoriasblack.png");

  });

  investis.addEventListener("mouseover", function(){
    imginvesti.setAttribute("src",".././Imgs/investigadoreswhite.png");
   
    
  });

  investis.addEventListener("mouseout", function(){
    imginvesti.setAttribute("src",".././Imgs/investigadoreswhite.png");

  });


  projectss.addEventListener("mouseover", function(){
    imgprojects.setAttribute("src",".././Imgs/proyectosdeinvestigacionwhite.png");
   
    
  });

  projectss.addEventListener("mouseout", function(){
    imgprojects.setAttribute("src",".././Imgs/proyectosdeinvestigacionblack.png");

  });

  productss.addEventListener("mouseover", function(){
    imgproducts.setAttribute("src",".././Imgs/productoswhite.png");
   
    
  });

  productss.addEventListener("mouseout", function(){
    imgproducts.setAttribute("src",".././Imgs/productosblack.png");

  });

  invest_creations.addEventListener("mouseover", function(){
    imginvest_creation.setAttribute("src",".././Imgs/creacionwhite.png");
   
    
  });

  invest_creations.addEventListener("mouseout", function(){
    imginvest_creation.setAttribute("src",".././Imgs/creacionblack.png");

  });

}

//proyectos
if(params !== null && params !== undefined  && params=="/HTMLS/Proyectos.html"){

  imggrupo.setAttribute("src",".././Imgs/grupoblack.png");
  imgconvo.setAttribute("src",".././Imgs/convocatoriasblack.png");
  imginvesti.setAttribute("src",".././Imgs/investigadoresblack.png");
  imgprojects.setAttribute("src",".././Imgs/proyectosdeinvestigacionwhite.png");
  imgproducts.setAttribute("src",".././Imgs/productosblack.png");
  imginvest_creation.setAttribute("src",".././Imgs/creacionblack.png");
  
  gruposs.addEventListener("mouseover", function(){
    imggrupo.setAttribute("src",".././Imgs/grupowhite.png");
    
  });

  gruposs.addEventListener("mouseout", function(){
    imggrupo.setAttribute("src",".././Imgs/grupoblack.png");

  });

  convos.addEventListener("mouseover", function(){
    imgconvo.setAttribute("src",".././Imgs/convocatoriaswhite.png");
    
  });

  convos.addEventListener("mouseout", function(){
    imgconvo.setAttribute("src",".././Imgs/convocatoriasblack.png");

  });

  investis.addEventListener("mouseover", function(){
    imginvesti.setAttribute("src",".././Imgs/investigadoreswhite.png");
   
    
  });

  investis.addEventListener("mouseout", function(){
    imginvesti.setAttribute("src",".././Imgs/investigadoresblack.png");

  });

  projectss.addEventListener("mouseover", function(){
    imgprojects.setAttribute("src",".././Imgs/proyectosdeinvestigacionwhite.png");
   
    
  });

  projectss.addEventListener("mouseout", function(){
    imgprojects.setAttribute("src",".././Imgs/proyectosdeinvestigacionwhite.png");

  });

  productss.addEventListener("mouseover", function(){
    imgproducts.setAttribute("src",".././Imgs/productoswhite.png");
   
    
  });

  productss.addEventListener("mouseout", function(){
    imgproducts.setAttribute("src",".././Imgs/productosblack.png");

  });

  invest_creations.addEventListener("mouseover", function(){
    imginvest_creation.setAttribute("src",".././Imgs/creacionwhite.png");
   
    
  });

  invest_creations.addEventListener("mouseout", function(){
    imginvest_creation.setAttribute("src",".././Imgs/creacionblack.png");

  });

}


//productos
if(params !== null && params !== undefined  && params=="/HTMLS/Productos.html"){

  imggrupo.setAttribute("src",".././Imgs/grupoblack.png");
  imgconvo.setAttribute("src",".././Imgs/convocatoriasblack.png");
  imginvesti.setAttribute("src",".././Imgs/investigadoresblack.png");
  imgprojects.setAttribute("src",".././Imgs/proyectosdeinvestigacionblack.png");
  imgproducts.setAttribute("src",".././Imgs/productoswhite.png");
  imginvest_creation.setAttribute("src",".././Imgs/creacionblack.png");
  
  gruposs.addEventListener("mouseover", function(){
    imggrupo.setAttribute("src",".././Imgs/grupowhite.png");
    
  });

  gruposs.addEventListener("mouseout", function(){
    imggrupo.setAttribute("src",".././Imgs/grupoblack.png");

  });

  convos.addEventListener("mouseover", function(){
    imgconvo.setAttribute("src",".././Imgs/convocatoriaswhite.png");
    
  });

  convos.addEventListener("mouseout", function(){
    imgconvo.setAttribute("src",".././Imgs/convocatoriasblack.png");

  });

  investis.addEventListener("mouseover", function(){
    imginvesti.setAttribute("src",".././Imgs/investigadoreswhite.png");
   
    
  });

  investis.addEventListener("mouseout", function(){
    imginvesti.setAttribute("src",".././Imgs/investigadoresblack.png");

  });

  projectss.addEventListener("mouseover", function(){
    imgprojects.setAttribute("src",".././Imgs/proyectosdeinvestigacionwhite.png");
   
    
  });

  projectss.addEventListener("mouseout", function(){
    imgprojects.setAttribute("src",".././Imgs/proyectosdeinvestigacionblack.png");

  });

  productss.addEventListener("mouseover", function(){
    imgproducts.setAttribute("src",".././Imgs/productoswhite.png");
   
    
  });

  productss.addEventListener("mouseout", function(){
    imgproducts.setAttribute("src",".././Imgs/productoswhite.png");

  });

  invest_creations.addEventListener("mouseover", function(){
    imginvest_creation.setAttribute("src",".././Imgs/creacionwhite.png");
   
    
  });

  invest_creations.addEventListener("mouseout", function(){
    imginvest_creation.setAttribute("src",".././Imgs/creacionblack.png");

  });

}

//investigación creación
if(params !== null && params !== undefined  && params=="/HTMLS/InvestigacionCreacion.html"){

  imggrupo.setAttribute("src",".././Imgs/grupoblack.png");
  imgconvo.setAttribute("src",".././Imgs/convocatoriasblack.png");
  imginvesti.setAttribute("src",".././Imgs/investigadoresblack.png");
  imgprojects.setAttribute("src",".././Imgs/proyectosdeinvestigacionblack.png");
  imgproducts.setAttribute("src",".././Imgs/productosblack.png");
  imginvest_creation.setAttribute("src",".././Imgs/creacionwhite.png");
  
  gruposs.addEventListener("mouseover", function(){
    imggrupo.setAttribute("src",".././Imgs/grupowhite.png");
    
  });

  gruposs.addEventListener("mouseout", function(){
    imggrupo.setAttribute("src",".././Imgs/grupoblack.png");

  });

  convos.addEventListener("mouseover", function(){
    imgconvo.setAttribute("src",".././Imgs/convocatoriaswhite.png");
    
  });

  convos.addEventListener("mouseout", function(){
    imgconvo.setAttribute("src",".././Imgs/convocatoriasblack.png");

  });

  investis.addEventListener("mouseover", function(){
    imginvesti.setAttribute("src",".././Imgs/investigadoreswhite.png");
   
    
  });

  investis.addEventListener("mouseout", function(){
    imginvesti.setAttribute("src",".././Imgs/investigadoresblack.png");

  });

  projectss.addEventListener("mouseover", function(){
    imgprojects.setAttribute("src",".././Imgs/proyectosdeinvestigacionwhite.png");
   
    
  });

  projectss.addEventListener("mouseout", function(){
    imgprojects.setAttribute("src",".././Imgs/proyectosdeinvestigacionblack.png");

  });

 
  productss.addEventListener("mouseover", function(){
    imgproducts.setAttribute("src",".././Imgs/productoswhite.png");
   
    
  });

  productss.addEventListener("mouseout", function(){
    imgproducts.setAttribute("src",".././Imgs/productosblack.png");

  });

  invest_creations.addEventListener("mouseover", function(){
    imginvest_creation.setAttribute("src",".././Imgs/creacionwhite.png");
   
    
  });

  invest_creations.addEventListener("mouseout", function(){
    imginvest_creation.setAttribute("src",".././Imgs/creacionwhite.png");

  });

}

  
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


  //Grupos de investigación
  if(params !== null && params !== undefined && params=="/HTMLS/GruposInvestigacion.html"){
  

    convos.addEventListener("mouseover", function(){
      imgconvo.setAttribute("src",".././Imgs/convocatoriaswhite.png");
      
    });
  
    convos.addEventListener("mouseout", function(){
      imgconvo.setAttribute("src",".././Imgs/convocatoriaswhite.png");
  
    });
  
    investis.addEventListener("mouseover", function(){
      imginvesti.setAttribute("src",".././Imgs/investigadoreswhite.png");
     
      
    });
  
    investis.addEventListener("mouseout", function(){
      imginvesti.setAttribute("src",".././Imgs/investigadoreswhite.png");
  
    });
  
    projectss.addEventListener("mouseover", function(){
      imgprojects.setAttribute("src",".././Imgs/proyectosdeinvestigacionwhite.png");
     
      
    });
  
    projectss.addEventListener("mouseout", function(){
      imgprojects.setAttribute("src",".././Imgs/proyectosdeinvestigacionwhite.png");
  
    });
  
    productss.addEventListener("mouseover", function(){
      imgproducts.setAttribute("src",".././Imgs/productoswhite.png");
     
      
    });
  
    productss.addEventListener("mouseout", function(){
      imgproducts.setAttribute("src",".././Imgs/productoswhite.png");
  
    });
  
    invest_creations.addEventListener("mouseover", function(){
      imginvest_creation.setAttribute("src",".././Imgs/creacionwhite.png");
     
      
    });
  
    invest_creations.addEventListener("mouseout", function(){
      imginvest_creation.setAttribute("src",".././Imgs/creacionwhite.png");
  
    });
  
  }

  
//convocatorias
if(params !== null && params !== undefined  && params=="/HTMLS/Convocatorias.html"){
  
  gruposs.addEventListener("mouseover", function(){
    imggrupo.setAttribute("src",".././Imgs/grupowhite.png");
    
  });

  gruposs.addEventListener("mouseout", function(){
    imggrupo.setAttribute("src",".././Imgs/grupowhite.png");

  });

  investis.addEventListener("mouseover", function(){
    imginvesti.setAttribute("src",".././Imgs/investigadoreswhite.png");
   
    
  });

  investis.addEventListener("mouseout", function(){
    imginvesti.setAttribute("src",".././Imgs/investigadoreswhite.png");

  });

  projectss.addEventListener("mouseover", function(){
    imgprojects.setAttribute("src",".././Imgs/proyectosdeinvestigacionwhite.png");
   
    
  });

  projectss.addEventListener("mouseout", function(){
    imgprojects.setAttribute("src",".././Imgs/proyectosdeinvestigacionwhite.png");

  });

  productss.addEventListener("mouseover", function(){
    imgproducts.setAttribute("src",".././Imgs/productoswhite.png");
   
    
  });

  productss.addEventListener("mouseout", function(){
    imgproducts.setAttribute("src",".././Imgs/productoswhite.png");

  });

  invest_creations.addEventListener("mouseover", function(){
    imginvest_creation.setAttribute("src",".././Imgs/creacionwhite.png");
   
    
  });

  invest_creations.addEventListener("mouseout", function(){
    imginvest_creation.setAttribute("src",".././Imgs/creacionwhite.png");

  });

}


//investigadores
if(params !== null && params !== undefined  && params=="/HTMLS/InvestigadoresGeneral.html"){
  
  gruposs.addEventListener("mouseover", function(){
    imggrupo.setAttribute("src",".././Imgs/grupowhite.png");
    
  });

  gruposs.addEventListener("mouseout", function(){
    imggrupo.setAttribute("src",".././Imgs/grupowhite.png");

  });

  convos.addEventListener("mouseover", function(){
    imgconvo.setAttribute("src",".././Imgs/convocatoriaswhite.png");
    
  });

  convos.addEventListener("mouseout", function(){
    imgconvo.setAttribute("src",".././Imgs/convocatoriaswhite.png");

  });

  projectss.addEventListener("mouseover", function(){
    imgprojects.setAttribute("src",".././Imgs/proyectosdeinvestigacionwhite.png");
   
    
  });

  projectss.addEventListener("mouseout", function(){
    imgprojects.setAttribute("src",".././Imgs/proyectosdeinvestigacionwhite.png");

  });

  productss.addEventListener("mouseover", function(){
    imgproducts.setAttribute("src",".././Imgs/productoswhite.png");
   
    
  });

  productss.addEventListener("mouseout", function(){
    imgproducts.setAttribute("src",".././Imgs/productoswhite.png");

  });

  invest_creations.addEventListener("mouseover", function(){
    imginvest_creation.setAttribute("src",".././Imgs/creacionwhite.png");
   
    
  });

  invest_creations.addEventListener("mouseout", function(){
    imginvest_creation.setAttribute("src",".././Imgs/creacionwhite.png");

  });

}

//proyectos
if(params !== null && params !== undefined  && params=="/HTMLS/Proyectos.html"){
  
  gruposs.addEventListener("mouseover", function(){
    imggrupo.setAttribute("src",".././Imgs/grupowhite.png");
    
  });

  gruposs.addEventListener("mouseout", function(){
    imggrupo.setAttribute("src",".././Imgs/grupowhite.png");

  });

  convos.addEventListener("mouseover", function(){
    imgconvo.setAttribute("src",".././Imgs/convocatoriaswhite.png");
    
  });

  convos.addEventListener("mouseout", function(){
    imgconvo.setAttribute("src",".././Imgs/convocatoriaswhite.png");

  });

  investis.addEventListener("mouseover", function(){
    imginvesti.setAttribute("src",".././Imgs/investigadoreswhite.png");
   
    
  });

  investis.addEventListener("mouseout", function(){
    imginvesti.setAttribute("src",".././Imgs/investigadoreswhite.png");

  });

  productss.addEventListener("mouseover", function(){
    imgproducts.setAttribute("src",".././Imgs/productoswhite.png");
   
    
  });

  productss.addEventListener("mouseout", function(){
    imgproducts.setAttribute("src",".././Imgs/productoswhite.png");

  });

  invest_creations.addEventListener("mouseover", function(){
    imginvest_creation.setAttribute("src",".././Imgs/creacionwhite.png");
   
    
  });

  invest_creations.addEventListener("mouseout", function(){
    imginvest_creation.setAttribute("src",".././Imgs/creacionwhite.png");

  });

}


//productos
if(params !== null && params !== undefined  && params=="/HTMLS/Productos.html"){
  
  gruposs.addEventListener("mouseover", function(){
    imggrupo.setAttribute("src",".././Imgs/grupowhite.png");
    
  });

  gruposs.addEventListener("mouseout", function(){
    imggrupo.setAttribute("src",".././Imgs/grupowhite.png");

  });

  convos.addEventListener("mouseover", function(){
    imgconvo.setAttribute("src",".././Imgs/convocatoriaswhite.png");
    
  });

  convos.addEventListener("mouseout", function(){
    imgconvo.setAttribute("src",".././Imgs/convocatoriaswhite.png");

  });

  investis.addEventListener("mouseover", function(){
    imginvesti.setAttribute("src",".././Imgs/investigadoreswhite.png");
   
    
  });

  investis.addEventListener("mouseout", function(){
    imginvesti.setAttribute("src",".././Imgs/investigadoreswhite.png");

  });

  projectss.addEventListener("mouseover", function(){
    imgprojects.setAttribute("src",".././Imgs/proyectosdeinvestigacionwhite.png");
   
    
  });

  projectss.addEventListener("mouseout", function(){
    imgprojects.setAttribute("src",".././Imgs/proyectosdeinvestigacionwhite.png");

  });

  invest_creations.addEventListener("mouseover", function(){
    imginvest_creation.setAttribute("src",".././Imgs/creacionwhite.png");
   
    
  });

  invest_creations.addEventListener("mouseout", function(){
    imginvest_creation.setAttribute("src",".././Imgs/creacionwhite.png");

  });

}

//investigación Creación
if(params !== null && params !== undefined  && params=="/HTMLS/InvestigacionCreacion.html"){
  
  gruposs.addEventListener("mouseover", function(){
    imggrupo.setAttribute("src",".././Imgs/grupowhite.png");
    
  });

  gruposs.addEventListener("mouseout", function(){
    imggrupo.setAttribute("src",".././Imgs/grupowhite.png");

  });

  convos.addEventListener("mouseover", function(){
    imgconvo.setAttribute("src",".././Imgs/convocatoriaswhite.png");
    
  });

  convos.addEventListener("mouseout", function(){
    imgconvo.setAttribute("src",".././Imgs/convocatoriaswhite.png");

  });

  investis.addEventListener("mouseover", function(){
    imginvesti.setAttribute("src",".././Imgs/investigadoreswhite.png");
   
    
  });

  investis.addEventListener("mouseout", function(){
    imginvesti.setAttribute("src",".././Imgs/investigadoreswhite.png");

  });

  projectss.addEventListener("mouseover", function(){
    imgprojects.setAttribute("src",".././Imgs/proyectosdeinvestigacionwhite.png");
   
    
  });

  projectss.addEventListener("mouseout", function(){
    imgprojects.setAttribute("src",".././Imgs/proyectosdeinvestigacionwhite.png");

  });

 
  productss.addEventListener("mouseover", function(){
    imgproducts.setAttribute("src",".././Imgs/productoswhite.png");
   
    
  });

  productss.addEventListener("mouseout", function(){
    imgproducts.setAttribute("src",".././Imgs/productoswhite.png");

  });

}
}

//grupos de investigación
if(params !== null && params !== undefined && params=="/HTMLS/GruposInvestigacion.html"){
  imggrupo.setAttribute("src",".././Imgs/grupowhite.png");
  imgconvo.setAttribute("src",".././Imgs/convocatoriasblack.png");
  imginvesti.setAttribute("src",".././Imgs/investigadoresblack.png");
  imgprojects.setAttribute("src",".././Imgs/proyectosdeinvestigacionblack.png");
  imgproducts.setAttribute("src",".././Imgs/productosblack.png");
  imginvest_creation.setAttribute("src",".././Imgs/creacionblack.png");

  convos.addEventListener("mouseover", function(){
    imgconvo.setAttribute("src",".././Imgs/convocatoriaswhite.png");
    
  });

  convos.addEventListener("mouseout", function(){
    imgconvo.setAttribute("src",".././Imgs/convocatoriasblack.png");

  });

  investis.addEventListener("mouseover", function(){
    imginvesti.setAttribute("src",".././Imgs/investigadoreswhite.png");
   
    
  });

  investis.addEventListener("mouseout", function(){
    imginvesti.setAttribute("src",".././Imgs/investigadoresblack.png");

  });

  projectss.addEventListener("mouseover", function(){
    imgprojects.setAttribute("src",".././Imgs/proyectosdeinvestigacionwhite.png");
   
    
  });

  projectss.addEventListener("mouseout", function(){
    imgprojects.setAttribute("src",".././Imgs/proyectosdeinvestigacionblack.png");

  });

  productss.addEventListener("mouseover", function(){
    imgproducts.setAttribute("src",".././Imgs/productoswhite.png");
   
    
  });

  productss.addEventListener("mouseout", function(){
    imgproducts.setAttribute("src",".././Imgs/productosblack.png");

  });

  invest_creations.addEventListener("mouseover", function(){
    imginvest_creation.setAttribute("src",".././Imgs/creacionwhite.png");
   
    
  });

  invest_creations.addEventListener("mouseout", function(){
    imginvest_creation.setAttribute("src",".././Imgs/creacionblack.png");

  });

}


//convocatorias
if(params !== null && params !== undefined  && params=="/HTMLS/Convocatorias.html"){
  

  imggrupo.setAttribute("src",".././Imgs/grupoblack.png");
  imgconvo.setAttribute("src",".././Imgs/convocatoriaswhite.png");
  imginvesti.setAttribute("src",".././Imgs/investigadoresblack.png");
  imgprojects.setAttribute("src",".././Imgs/proyectosdeinvestigacionblack.png");
  imgproducts.setAttribute("src",".././Imgs/productosblack.png");
  imginvest_creation.setAttribute("src",".././Imgs/creacionblack.png");

  gruposs.addEventListener("mouseover", function(){
    imggrupo.setAttribute("src",".././Imgs/grupowhite.png");
    
  });

  gruposs.addEventListener("mouseout", function(){
    imggrupo.setAttribute("src",".././Imgs/grupoblack.png");

  });

  investis.addEventListener("mouseover", function(){
    imginvesti.setAttribute("src",".././Imgs/investigadoreswhite.png");
   
    
  });

  investis.addEventListener("mouseout", function(){
    imginvesti.setAttribute("src",".././Imgs/investigadoresblack.png");

  });

  projectss.addEventListener("mouseover", function(){
    imgprojects.setAttribute("src",".././Imgs/proyectosdeinvestigacionwhite.png");
   
    
  });

  projectss.addEventListener("mouseout", function(){
    imgprojects.setAttribute("src",".././Imgs/proyectosdeinvestigacionblack.png");

  });

  productss.addEventListener("mouseover", function(){
    imgproducts.setAttribute("src",".././Imgs/productoswhite.png");
   
    
  });

  productss.addEventListener("mouseout", function(){
    imgproducts.setAttribute("src",".././Imgs/productosblack.png");

  });

  invest_creations.addEventListener("mouseover", function(){
    imginvest_creation.setAttribute("src",".././Imgs/creacionwhite.png");
   
    
  });

  invest_creations.addEventListener("mouseout", function(){
    imginvest_creation.setAttribute("src",".././Imgs/creacionblack.png");

  });

}


//investigadores
if(params !== null && params !== undefined  && params=="/HTMLS/InvestigadoresGeneral.html"){
  
  imggrupo.setAttribute("src",".././Imgs/grupoblack.png");
  imgconvo.setAttribute("src",".././Imgs/convocatoriasblack.png");
  imginvesti.setAttribute("src",".././Imgs/investigadoreswhite.png");
  imgprojects.setAttribute("src",".././Imgs/proyectosdeinvestigacionblack.png");
  imgproducts.setAttribute("src",".././Imgs/productosblack.png");
  imginvest_creation.setAttribute("src",".././Imgs/creacionblack.png");

  gruposs.addEventListener("mouseover", function(){
    imggrupo.setAttribute("src",".././Imgs/grupowhite.png");
    
  });

  gruposs.addEventListener("mouseout", function(){
    imggrupo.setAttribute("src",".././Imgs/grupoblack.png");

  });

  convos.addEventListener("mouseover", function(){
    imgconvo.setAttribute("src",".././Imgs/convocatoriaswhite.png");
    
  });

  convos.addEventListener("mouseout", function(){
    imgconvo.setAttribute("src",".././Imgs/convocatoriasblack.png");

  });

  projectss.addEventListener("mouseover", function(){
    imgprojects.setAttribute("src",".././Imgs/proyectosdeinvestigacionwhite.png");
   
    
  });

  projectss.addEventListener("mouseout", function(){
    imgprojects.setAttribute("src",".././Imgs/proyectosdeinvestigacionblack.png");

  });

  productss.addEventListener("mouseover", function(){
    imgproducts.setAttribute("src",".././Imgs/productoswhite.png");
   
    
  });

  productss.addEventListener("mouseout", function(){
    imgproducts.setAttribute("src",".././Imgs/productosblack.png");

  });

  invest_creations.addEventListener("mouseover", function(){
    imginvest_creation.setAttribute("src",".././Imgs/creacionwhite.png");
   
    
  });

  invest_creations.addEventListener("mouseout", function(){
    imginvest_creation.setAttribute("src",".././Imgs/creacionblack.png");

  });

}

//proyectos
if(params !== null && params !== undefined  && params=="/HTMLS/Proyectos.html"){
  
  imggrupo.setAttribute("src",".././Imgs/grupoblack.png");
  imgconvo.setAttribute("src",".././Imgs/convocatoriasblack.png");
  imginvesti.setAttribute("src",".././Imgs/investigadoresblack.png");
  imgprojects.setAttribute("src",".././Imgs/proyectosdeinvestigacionwhite.png");
  imgproducts.setAttribute("src",".././Imgs/productosblack.png");
  imginvest_creation.setAttribute("src",".././Imgs/creacionblack.png");

  gruposs.addEventListener("mouseover", function(){
    imggrupo.setAttribute("src",".././Imgs/grupowhite.png");
    
  });

  gruposs.addEventListener("mouseout", function(){
    imggrupo.setAttribute("src",".././Imgs/grupoblack.png");

  });

  convos.addEventListener("mouseover", function(){
    imgconvo.setAttribute("src",".././Imgs/convocatoriaswhite.png");
    
  });

  convos.addEventListener("mouseout", function(){
    imgconvo.setAttribute("src",".././Imgs/convocatoriasblack.png");

  });

  investis.addEventListener("mouseover", function(){
    imginvesti.setAttribute("src",".././Imgs/investigadoreswhite.png");
   
    
  });

  investis.addEventListener("mouseout", function(){
    imginvesti.setAttribute("src",".././Imgs/investigadoresblack.png");

  });

  productss.addEventListener("mouseover", function(){
    imgproducts.setAttribute("src",".././Imgs/productoswhite.png");
   
    
  });

  productss.addEventListener("mouseout", function(){
    imgproducts.setAttribute("src",".././Imgs/productosblack.png");

  });

  invest_creations.addEventListener("mouseover", function(){
    imginvest_creation.setAttribute("src",".././Imgs/creacionwhite.png");
   
    
  });

  invest_creations.addEventListener("mouseout", function(){
    imginvest_creation.setAttribute("src",".././Imgs/creacionblack.png");

  });

}


//productos
if(params !== null && params !== undefined  && params=="/HTMLS/Productos.html"){
  
  imggrupo.setAttribute("src",".././Imgs/grupoblack.png");
  imgconvo.setAttribute("src",".././Imgs/convocatoriasblack.png");
  imginvesti.setAttribute("src",".././Imgs/investigadoresblack.png");
  imgprojects.setAttribute("src",".././Imgs/proyectosdeinvestigacionblack.png");
  imgproducts.setAttribute("src",".././Imgs/productoswhite.png");
  imginvest_creation.setAttribute("src",".././Imgs/creacionblack.png");

  gruposs.addEventListener("mouseover", function(){
    imggrupo.setAttribute("src",".././Imgs/grupowhite.png");
    
  });

  gruposs.addEventListener("mouseout", function(){
    imggrupo.setAttribute("src",".././Imgs/grupoblack.png");

  });

  convos.addEventListener("mouseover", function(){
    imgconvo.setAttribute("src",".././Imgs/convocatoriaswhite.png");
    
  });

  convos.addEventListener("mouseout", function(){
    imgconvo.setAttribute("src",".././Imgs/convocatoriasblack.png");

  });

  investis.addEventListener("mouseover", function(){
    imginvesti.setAttribute("src",".././Imgs/investigadoreswhite.png");
   
    
  });

  investis.addEventListener("mouseout", function(){
    imginvesti.setAttribute("src",".././Imgs/investigadoresblack.png");

  });

  projectss.addEventListener("mouseover", function(){
    imgprojects.setAttribute("src",".././Imgs/proyectosdeinvestigacionwhite.png");
   
    
  });

  projectss.addEventListener("mouseout", function(){
    imgprojects.setAttribute("src",".././Imgs/proyectosdeinvestigacionblack.png");

  });

  invest_creations.addEventListener("mouseover", function(){
    imginvest_creation.setAttribute("src",".././Imgs/creacionwhite.png");
   
    
  });

  invest_creations.addEventListener("mouseout", function(){
    imginvest_creation.setAttribute("src",".././Imgs/creacionblack.png");

  });

}

//investigación Creación
if(params !== null && params !== undefined  && params=="/HTMLS/InvestigacionCreacion.html"){
  
  imggrupo.setAttribute("src",".././Imgs/grupoblack.png");
  imgconvo.setAttribute("src",".././Imgs/convocatoriasblack.png");
  imginvesti.setAttribute("src",".././Imgs/investigadoresblack.png");
  imgprojects.setAttribute("src",".././Imgs/proyectosdeinvestigacionblack.png");
  imgproducts.setAttribute("src",".././Imgs/productosblack.png");
  imginvest_creation.setAttribute("src",".././Imgs/creacionwhite.png");

  gruposs.addEventListener("mouseover", function(){
    imggrupo.setAttribute("src",".././Imgs/grupowhite.png");
    
  });

  gruposs.addEventListener("mouseout", function(){
    imggrupo.setAttribute("src",".././Imgs/grupoblack.png");

  });

  convos.addEventListener("mouseover", function(){
    imgconvo.setAttribute("src",".././Imgs/convocatoriaswhite.png");
    
  });

  convos.addEventListener("mouseout", function(){
    imgconvo.setAttribute("src",".././Imgs/convocatoriasblack.png");

  });

  investis.addEventListener("mouseover", function(){
    imginvesti.setAttribute("src",".././Imgs/investigadoreswhite.png");
   
    
  });

  investis.addEventListener("mouseout", function(){
    imginvesti.setAttribute("src",".././Imgs/investigadoresblack.png");

  });

  projectss.addEventListener("mouseover", function(){
    imgprojects.setAttribute("src",".././Imgs/proyectosdeinvestigacionwhite.png");
   
    
  });

  projectss.addEventListener("mouseout", function(){
    imgprojects.setAttribute("src",".././Imgs/proyectosdeinvestigacionblack.png");

  });

 
  productss.addEventListener("mouseover", function(){
    imgproducts.setAttribute("src",".././Imgs/productoswhite.png");
   
    
  });

  productss.addEventListener("mouseout", function(){
    imgproducts.setAttribute("src",".././Imgs/productosblack.png");

  });

}


