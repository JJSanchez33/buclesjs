class Peliculas{
    constructor(nombre, genero){
        this.nombre =nombre;
        this.genero =genero

    }
    description(){
        return `la pelicula ${this.nombre} es una graanpeliculña y esta en el Genero de${this.genero}`
    }
}
const resultado = new Peliculas("scaryMovi","terro")
console.log(resultado.description())

class Pelicula1 extends Peliculas{
    constructor(nombre, genero,exitencia){
        super(nombre,genero);
        this.exitencia= exitencia

    }
    description(){
        return `la pelicula ${this.nombre} es una graanpeliculña y esta en el Genero de${this.genero} y esta ${this.exitencia}`
    }
}
const resultado1= new Pelicula1("300", "ACCION","disponible")
console.log(resultado1.description())