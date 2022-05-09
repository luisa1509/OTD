function cargar() {
    $('#return').load('#title', function() {
      console.log("funciona");
    });
  }

cargar();
