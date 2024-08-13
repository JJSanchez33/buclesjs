
const user= true;
const usuarioAutenticado = new Promise((resolve, reject) => {
  

    if (user) {
        resolve("usuario esta  autenticado")
        
    }else{
        reject("no se pudo autenticar")

    }
    
})
usuarioAutenticado
.then(mensaje=>console.log(mensaje))
.catch(error=>console.log(error))