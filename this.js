
window.tall="red"
const animales={
    nombbre:"palomita",
    tall:5,
    live:true,
    task: false,
    poder:function(){
        console.log(`this ${animales.nombbre} is  in aiport and  her tall: ${this.tall} it is life:${this.live}`)
    },
    habilida:()=>{
        console.log(this.tall)
    }
}

  animales.poder()
  animales.habilida()