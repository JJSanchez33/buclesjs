class Animales{
     constructor(nqamer,sexo){
        this.nqamer =nqamer;
        this.sexo = sexo

     }
     habilidad (){
        return`el animal${this.nqamer} su genero es :${this.sexo}`
     }
}
const myAnimal = new Animales("PALOMA","HEMBRA")
console.log(myAnimal.nqamer)
     const nuevoValor=myAnimal.habilidad()
     console.log(nuevoValor)