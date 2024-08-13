const carrito =[
    {articulo:"radio", precio:2500,disponible:true},
    {articulo:"tv", precio:4000, disponible:true},
    {articulo:"latop", precio:5000,disponible:true},
    {articulo:"pc", precio:19000,disponible:true},  
    {articulo:"lavadora", precio:9000,disponible:true},
    {articulo:"camaras", precio:15000,disponible:false}

]


let valor= 0;
function ingresovalor(ingreso){
     return valor+= ingreso
}
valor = ingresovalor(2500);
valor = ingresovalor(4000);
valor = ingresovalor(5000);
valor = ingresovalor(9000);
valor = ingresovalor(19000);
valor = ingresovalor(15000);
valor = ingresovalor(2500);
console.log(valor)

function impuesto(inpuestos){
    return valor* inpuestos
}
let nuevoValor=impuesto(19)
function descuento(descuentos){
    return nuevoValor*descuentos/100

}
console.log(descuento(5))