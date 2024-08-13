//el metodo Math sirve parta realizar operaciones matematicas
//PRIMER EJEMPLO  EL METODO DESPUES DON UNA FUNCION PRIMITIVA DEL LENGUAJE


let resultado;

resultado = Math.random() /* este metodo genera un numero alatorio entre sero y 1
console.log(resultado)*/
resultado = Math.PI/* este metodo da como resultado el numero de pin como constante
console.log(resultado)*/
resultado =Math.round(2.57)/*etse metodo resibe  un parameto numerico y dependiendo su dcimal devuelve  el v alor 
puede ser redondeado hacia riva o hacia abjo
console.log(resultado)*/
resultado =Math.ceil(2.2)/* El metodo  resive un parametro numerico y siempre va aredondear su valor al numero mas
altoo sin importar su decimal
console.log(resultado)*/

resultado = Math.floor(3.4)/*ESTE METODO RESIBE UN PARAMETO NUMERICO Y SIEMPRE VA ADEVOVEL EL RESULTADO MAS BAJO
SIN IMPORTA SU NUMERO REDONDEA SIEMPRE HACIA BAJO
console.log(resultado)*/
resultado=Math.sqrt(18)/*metodo devuelve la raiz cuadrada  de el parameto ingresado a la funcion
console.log(resultado)*/
resultado = Math.abs(-100)/*metodo que tranforma  un numero negativo a un numero positivo
console.log(resultado)*/
resultado = Math.min(1,3,4,5 ,6)/*metodo que devuelve  el mumero mas pequeño de una serie de numero ingresados por parametro

console.log(resultado)*/

resultado = Math.max(1,2,3,4,5,6,7,8)/*resive una serie de parameto y devuelve el parameto numerico mmas
grade d la coleccion*/

resultado = Math.pow(2)//"ELEVA EL VALOR AL LA EXPONETE  recibe dos parametro  el primer
//valor y el exponente"
// ⛔️ Recuerda que debes utilizar el objeto global "Math".

//function elevarAlCuadrado(num) {
    // La función recibe un argumento llamado num el cual es un numero.
    // Debes Retorna el valor de "num" elevado al cuadrado.
    // Por ejemplo: 
    // 6 ---> 36
    // 0 ---> 0
    // Tu código:
    // return Math.pow(num,2)
  //}

 

  function tieneTresDigitos(num) {
    // Si el número recibido tiene tres dígitos, retorna true.
    // Caso contrario, retorna false.
    // Tu código:
      let numero= num.toString().split("")
      
       if( numero.length ===3) {
        return true
       
       }else{
        
         return false
       }
      }
 

      function esParYDivisiblePorTres(a) {
        // La función recibe un número "a" por argumento.
        // Retorna true si este es par y divisible por tres a la vez.
        // Retorna false si no lo es.
        // Tu código:
        if(a%2===0 &&  a%3===0){
          return true;
        }else{
          return false
        }
      }

      function fizzBuzz(num) {
        // Si "num" es divisible entre 3, retorna "fizz".
        // Si "num" es divisible entre 5, retorna "buzz".
        // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
        // De lo contrario, retorna false.
        // Tu código:
        if(num%3===0 && num%5===0){
          return "fizzbuzz"
        }
        else if(num%3===0){
          return "fizz"
        }
        else if(num%5===0){
          return "fizzbuzz"
      
        }else{
          return "fizzbuzz"
        }
            
      }
      console.log(fizzBuzz(10))