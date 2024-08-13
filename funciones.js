

 //iife

 function suma (){
    console.log(3+4)
}
//suma()
 const resultado = function(){
    console.log(7+9)
 }
// resultado();

 
/*funciones para el carrito*/

let total=0;

function carrito(valor){
    return total+=valor

}

total=carrito(300);
total=carrito(200);
total=carrito(500);
total=carrito(300);
total=carrito(120);
console.log(total)
function impustoApagar(impuertso){
    return total*impuertso

}
const resultadounpuesto = impustoApagar(19);
console.log(resultadounpuesto)
