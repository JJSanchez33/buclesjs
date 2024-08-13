/*onst myArray = [20,30,40,true,false,"i am","coffee"]
myArray.push(20,40,69,76)
myArray.unshift("hello","rice","bread")
myArray.pop()
myArray.shift()
myArray.splice(0,9)

/*******no modificar 
const nuevaArreglo=[ "hi",...myArray]*/


//--------------------------------------------arraymetod------------------------------------
/*const mese=["enero","febrero","marzo","abril","mayo"];

if(mese.includes("febrero")){
    mese.push("diciembre")
    console.log(mese)
}else{
  mese.shift()
  console.log(mese)
}*/
//para  array metod que contega un array de obhjecto

const carrito=[
    {namer:"televisor 21' ", precio:700},
    {namer:"table",  precio:20},
    {namer:"nevera", precio:150},
    {namer:"maquina de peluqueria", precio:50},
    {namer:"pc" , precio:200},
    {namer:"estufa", precio: 40}
]
//metodo de busqueda
const nuevoProducto = carrito.some(producto=> producto.namer === "televisor 22' ")
//reduce meto que permite dar un resultado total

const otroArray= carrito.reduce((nombreObjecto,propiedades)=>nombreObjecto + propiedades.precio,0)

//metodo filter metodo de eliminacion y busqueda 
const metodoFiter = carrito.filter((objecto)=>{
    if(objecto.precio >150){
        return objecto
    }

})
console.log(metodoFiter)


