const grupos =document.querySelector(".grupos");
const convo =document.querySelector(".convo");
const investi =document.querySelector(".investi");
const projects =document.querySelector(".projects");
const products =document.querySelector(".products");
const invest_creation =document.querySelector(".invest_creation");

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
    window.location.href = "Investigadores-Grupos.html"
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