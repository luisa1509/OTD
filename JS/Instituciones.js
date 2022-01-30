window.onscroll = function () {
    window.scrollTo(0,0);
}

document.getElementById('id-sun').onclick = function(){
    document.getElementById('body').classList.remove('dark-mode')
    document.getElementById('id-moon').classList.remove('active')
    this.classList.add('active')
  }
  /*Si clicamos en el botón de la luna, añadiremos la clase css dark-mode del div 
  con id page y se aplicará el estilo active a la luna*/
  document.getElementById('id-moon').onclick = function(){
    document.getElementById('body').classList.add('dark-mode')
    document.getElementById('id-sun').classList.remove('active')
    this.classList.add('active')
  }