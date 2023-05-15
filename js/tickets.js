function resumen(){

    let cantidadEntradas = document.getElementById('cantidadEntradas').value;
    let botonCalcular = document.getElementById('botonCalcular');
    let categoria = document.getElementById('inputState');
    let totalCompra = document.getElementById('totalCompra');

    let pagoFinal
    console.log(typeof cantidad)
    console.log(categoria.value)
    console.log(cantidadEntradas.value)
    

    if(categoria.value=="estudiant") {
       pagoFinal = (cantidadEntradas*200)*0.2
           
    }
    
    if (categoria.value == "trainee") {
        pagoFinal = (cantidadEntradas * 200) * 0.5 
        
    }

    if (categoria.value == "junior") {
        pagoFinal = (cantidadEntradas * 200) * 8.5 
        
    }

  
  totalCompra.innerHTML = pagoFinal;
   
}

resumen() ;
 //pagoFinal = totalCompra
