function Animales(nambre,genero,time){
    this.nambre = nambre;
    this.genero = genero;
    this.time= time;

}
const palabras= new Animales("RASPUTYN","FEMENINO",1986)

Animales.prototype.descripcionAnimal= function (){
    return `the paloma llama  ${this.nambre} y su genero es${this.genero}}`
}
Animales.prototype.timePaloma=function(){
    return `y su tiempo de vida es ${this.time}`
}

console.log(palabras.descripcionAnimal())
console.log(palabras.timePaloma())

function Habilidades(habilida, descripcion){
    this.habilida = habilida;
    this.descripcion =descripcion

}
const rehabilidades = new  Habilidades("vuela", "es rapuido")
Habilidades.prototype.objectoaves=function(){
    console.log(`esta ave tienes las siguientes habilidades ${this.habilida} y${this.descripcion}`)
}
rehabilidades.objectoaves()


    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    