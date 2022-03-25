const grupos =document.querySelector(".grupos");
const convo =document.querySelector(".convo");
const investi =document.querySelector(".investi");
const projects =document.querySelector(".projects");
const products =document.querySelector(".products");
const invest_creation =document.querySelector(".invest_creation");
const grupoEspecifico =document.querySelector(".grupoEspecifico");
const insEspecifico =document.querySelector(".insEspecifico");

grupos.addEventListener("click", function(){
    console.log("hola")
    window.location.href = './HTMLS/GruposInvestigacion.html'
});


convo.addEventListener("click", function(){
    console.log("hola")
    window.location.href = "./HTMLS/Convocatorias.html"
});


investi.addEventListener("click", function(){
    console.log("hola")
    window.location.href = "./HTMLS/InvestigadoresGeneral.html"
});

projects.addEventListener("click", function(){
    console.log("hola")
    window.location.href = "./HTMLS/Proyectos.html"
});

products.addEventListener("click", function(){
    console.log("hola")
    window.location.href = "./HTMLS/Productos.html"
});


invest_creation.addEventListener("click", function(){
    console.log("hola")
    window.location.href = "./HTMLS/InvestigacionCreacion.html"
});

grupoEspecifico.addEventListener("click", function(){
    console.log("hola")
    window.location.href = "./HTMLS/GruposEspecifico.html"
});

insEspecifico.addEventListener("click", function(){
    console.log("hola")
    window.location.href = "./HTMLS/InstitucionesEspecifico.html"
});