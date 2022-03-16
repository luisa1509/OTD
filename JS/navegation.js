const grupos =document.querySelector(".grupos");
const convo =document.querySelector(".convo");
const investi =document.querySelector(".investi");
const projects =document.querySelector(".projects");
const products =document.querySelector(".products");
const invest_creation =document.querySelector(".invest-creation");

grupos.addEventListener("click", function(){
    console.log("hola")
    Window.location.href = 'GruposInvestigacion.html'
});


convo.addEventListener("click", function(){
    console.log("hola")
    Window.location.href = "./HTMLS/Convocatorias.html"
});


investi.addEventListener("click", function(){
    console.log("hola")
    Window.location.href = "./HTMLS/Investigadores-Grupos.html"
});

projects.addEventListener("click", function(){
    console.log("hola")
    Window.location.href = "./HTMLS/GruposInvestigación.html"
});

products.addEventListener("click", function(){
    console.log("hola")
    Window.location.href = "./HTMLS/GruposInvestigación.html"
});


invest_creation.addEventListener("click", function(){
    console.log("hola")
    document.location.href = "./HTMLS/Convocatorias.html"
});