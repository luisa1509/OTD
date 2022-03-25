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

imggrupo.addEventListener("mouseover", white, false);
imggrupo.addEventListener("mouseout", black, false);
imgconvo.addEventListener("mouseover", white, false);
imgconvo.addEventListener("mouseout", black, false);
imginvesti.addEventListener("mouseover", white, false);
imginvesti.addEventListener("mouseout", black, false);
imgprojects.addEventListener("mouseover", white, false);
imgprojects.addEventListener("mouseout", black, false);
imgproducts.addEventListener("mouseover", white, false);
imgproducts.addEventListener("mouseout", black, false);
imginvest_creation.addEventListener("mouseover", white, false);
imginvest_creation.addEventListener("mouseout", black, false);


function white(){
    imggrupo.setAttribute("src",".././Imgs/grupowhite.png")
    imgconvo.setAttribute("src",".././Imgs/convocatoriaswhite.png")
    imginvesti.setAttribute("src",".././Imgs/investigadoreswhite.png")
    imgprojects.setAttribute("src",".././Imgs/proyectosdeinvestigacionwhite.png")
    imgproducts.setAttribute("src",".././Imgs/productoswhite.png")
    imginvest_creation.setAttribute("src",".././Imgs/creacionwhite.png")
 
}

function black(){
    imggrupo.setAttribute("src",".././Imgs/grupoblack.png")
    imgconvo.setAttribute("src",".././Imgs/convocatoriasblack.png")
    imginvesti.setAttribute("src",".././Imgs/investigadoresblack.png")
    imgprojects.setAttribute("src",".././Imgs/proyectosdeinvestigacionblack.png")
    imgproducts.setAttribute("src",".././Imgs/productosblack.png")
    imginvest_creation.setAttribute("src",".././Imgs/creacionblack.png")
}





















grupoEspecifico.addEventListener("click", function(){
    console.log("hola")
    window.location.href = "GruposEspecifico.html"
});

insEspecifico.addEventListener("click", function(){
    console.log("hola")
    window.location.href = "InstitucionesEspecifico.html"
});



