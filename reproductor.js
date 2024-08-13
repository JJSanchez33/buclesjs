const reproducto={

    reproduciendo:function(nombre){
        console.log("reproduciendo caccione de "+  nombre)
    },
        pausando:function(){
         console.log("cancion pausada....")

    },
    anadir:function(namer){
        console.log(`anadiendo cacion ${namer}`)
    }
}
reproducto.eliminadoCancion=function(id){
    console.log(`eliminado cacion  numero ${id}`)
}

reproducto.reproduciendo("hevi metal")
reproducto.pausando()
reproducto.anadir("hi my love")
reproducto.eliminadoCancion(2021)