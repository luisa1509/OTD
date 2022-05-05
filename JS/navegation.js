const grupos =document.querySelector(".grupos");
const convo =document.querySelector(".convo");
const investi =document.querySelector(".investi");
const projects =document.querySelector(".projects");
const products =document.querySelector(".products");
const invest_creation =document.querySelector(".invest_creation");
const grupoEspecifico =document.querySelector(".grupoEspecifico");
const insEspecifico =document.querySelector(".insEspecifico");
const logo = document.querySelector(".logo");

let gruposimg = document.querySelector(".grupos");
let convoimg = document.querySelector(".convo");
let investiimg = document.querySelector(".investi");
let projectsimg = document.querySelector(".projects");
let productsimg = document.querySelector(".products");
let invest_creationimg = document.querySelector(".invest_creation");

let imggrupo = document.querySelector(".imggrupo");
let imgconvo = document.querySelector(".imgconvo");
let imginvesti = document.querySelector(".imginvesti");
let imgprojects = document.querySelector(".imgprojects");
let imgproducts = document.querySelector(".imgproducts");
let imginvest_creation = document.querySelector(".imginvest_creation");

let here =document.querySelector("here");


grupos.addEventListener("click", function(){
    console.log("hola")
    window.location.href = 'GruposInvestigacion.html'
});


convo.addEventListener("click", function(){
    console.log("hola")
    window.location.href = "Convocatorias.html"
});


investi.addEventListener("click", function(){
    console.log("hola")
    window.location.href = "InvestigadoresGeneral.html"
});

projects.addEventListener("click", function(){
    console.log("hola")
    window.location.href = "Proyectos.html"
});

products.addEventListener("click", function(){
    console.log("hola")
    window.location.href = "Productos.html"
});


invest_creation.addEventListener("click", function(){
    console.log("hola")
    window.location.href = "InvestigacionCreacion.html"
});


logo.addEventListener("click", function(){
    console.log("hola")
    window.location.href = ".././Principal.html"
});



gruposimg.addEventListener("mouseover", whitegrupo, false);
gruposimg.addEventListener("mouseout", blackgrupo, false);
convoimg.addEventListener("mouseover", whiteconvo, false);
convoimg.addEventListener("mouseout", blackconvo, false);
investiimg.addEventListener("mouseover", whiteinvesti, false);
investiimg.addEventListener("mouseout", blackinvesti, false);
projectsimg.addEventListener("mouseover", whiteprojects, false);
projectsimg.addEventListener("mouseout", blackprojects, false);
productsimg.addEventListener("mouseover", whiteproducts, false);
productsimg.addEventListener("mouseout", blackproducts, false);
invest_creationimg.addEventListener("mouseover", whiteinvest_creation, false);
invest_creationimg.addEventListener("mouseout", blackinvest_creation, false);


function whitegrupo(){
    imggrupo.setAttribute("src",".././Imgs/grupowhite.png")
}

function blackgrupo(){
    imggrupo.setAttribute("src",".././Imgs/grupoblack.png")
}

function whiteconvo(){
    imgconvo.setAttribute("src",".././Imgs/convocatoriaswhite.png")
}

function blackconvo(){
    imgconvo.setAttribute("src",".././Imgs/convocatoriasblack.png")
}

function whiteinvesti(){
    imginvesti.setAttribute("src",".././Imgs/investigadoreswhite.png")
}

function blackinvesti(){
    imginvesti.setAttribute("src",".././Imgs/investigadoresblack.png")
}

function whiteprojects(){
    imgprojects.setAttribute("src",".././Imgs/proyectosdeinvestigacionwhite.png")
}

function blackprojects(){
    imgprojects.setAttribute("src",".././Imgs/proyectosdeinvestigacionblack.png")
}

function whiteproducts(){
    imgproducts.setAttribute("src",".././Imgs/productoswhite.png")
}

function blackproducts(){
    imgproducts.setAttribute("src",".././Imgs/productosblack.png")
}

function whiteinvest_creation(){
    imginvest_creation.setAttribute("src",".././Imgs/creacionwhite.png")
}

function blackinvest_creation(){
    imginvest_creation.setAttribute("src",".././Imgs/creacionblack.png")
}




    
    
 

 


    
   
   
 

















grupoEspecifico.addEventListener("click", function(){
    console.log("hola")
    window.location.href = "Grupos.html"
});

insEspecifico.addEventListener("click", function(){
    console.log("hola")
    window.location.href = "Instituciones.html"
});



