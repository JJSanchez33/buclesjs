const carrito =[
    {articulo:"radio", precio:2500,disponible:true},
    {articulo:"tv", precio:4000, disponible:true},
    {articulo:"latop", precio:5000,disponible:true},
    {articulo:"pc", precio:19000,disponible:true},  
    {articulo:"lavadora", precio:9000,disponible:true},
    {articulo:"camaras", precio:15000,disponible:false}

]

for(let i = 0; i < carrito.length; i++){
    console.log(carrito[i].articulo)

}
 const  valorToytal= carrito.reduce((valor,total)=>{
       return valor+ total.precio
 },0)
 console.log("el total a pagar : " +valorToytal)
 for(let i= 1 ; i <= 100; i ++){
    if( i%2===0){
        console.log(`el numero ${i} es par`)
    }
    else{
        console.log(`el numero ${i} es impar`)
    }
 }