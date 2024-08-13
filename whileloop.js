const carrito =[
    {articulo:"radio", precio:2500,disponible:true},
    {articulo:"tv", precio:4000, disponible:true},
    {articulo:"latop", precio:5000,disponible:true},
    {articulo:"pc", precio:19000,disponible:true},  
    {articulo:"lavadora", precio:9000,disponible:true},
    {articulo:"camaras", precio:15000,disponible:false}

]

/*let contador = 1;

while (contador <= 100) {
    console.log(contador)


    contador++
    
}*/

let contador =0;
while (contador < carrito.length) {
    console.log(carrito[contador].articulo)
     

    contador++
    
}
