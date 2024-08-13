//objec literal
const  palabras={

    palabra:"label",
    años:1986,
    sexo:"fermenino"
}


//0bje constructor

function MYPALABRA( palabra, años, sexo){
    this.letra =palabra;
    this.fecha = años;
    this.genero =sexo

}

const myPalabra1 = new MYPALABRA("anable", 1986 , "masculino")
const myPalabra2 = new MYPALABRA("disable", 1985 , "femenino")
console.log(myPalabra1.genero)
console.log(myPalabra1.fecha)
console.log(myPalabra1.letra)
console.log(myPalabra2.genero)