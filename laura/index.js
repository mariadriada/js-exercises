console.log("laura/index/js");

/**
 * EJERCICIOS JS
 
  -- Daniel
  2. Escribe un programa JavaScript para encontrar el área de un triángulo donde las
    longitudes de los tres de sus lados son 5, 6, 7

  -- Juan Manuel
  7. Escriba un programa JavaScript para verificar si un número positivo dado es un
    múltiplo de 3 o un múltiplo de 7

  -- Roberto
  8. Escriba un programa JavaScript para verificar si los valores enteros dados están en
    el rango 50-99 (inclusive). Devuelve verdadero si uno o más de ellos están en dicho
    rango

  -- Cristian
  9. Escribe un programa JavaScript que dado un número (Que representa grados) diga
    qué tipo de ángulo es.
    Tipos de ángulos:
    ○ Ángulo agudo: ángulo entre 0 y 90 grados.
    ○ Ángulo recto: un ángulo de 90 grados.
    ○ Ángulo obtuso: ángulo entre 90 y 180 grados.
    ○ Ángulo recto: un ángulo de 180 grados.

  
  -- Emily
  10. Escriba un programa JavaScript para encontrar el mayor de tres enteros dados

  -- Daniel
  11. Escriba un programa JavaScript para calcular la suma de los dos enteros dados. Si
    la suma está en el rango 50-80, devuelva 65; de lo contrario, devuelve 80



  -- Jose Raul
  13. Escriba un programa que dado un String indique cuántos caracteres tiene. Ejemplo:
    “Sebastian” -> 9, “Jimena” -> 6

  -- Jairo
  14. Escriba un programa JavaScript para convertir un número determinado en horas.
    Por ejemplo: 120 serían 2 horas

  -- Sebastian
  15. Escriba un programa JavaScript para comprobar si aparece el número 1 en la
    primera o última posición de un arreglo dado de números enteros. La longitud del
    arreglo debe ser mayor o igual a 1

  -- Juan Manuel
  16. Escriba un programa que calcule el promedio de los números de un arreglo

  -- Roberto
  17. Escriba un programa JavaScript para intercambiar el primer y último elemento de un
    arreglo dado de enteros.

  -- Cristian
  19. Escriba un JavaScript para encontrar el String más largo de un arreglo de Strings.
    Ejemplo: [“a”,”bc”,”def”] Debería imprimir “def” por ser el que más caracteres tiene.
 * 
 */



    
 /*Laura
  3. Escriba un programa JavaScript para determinar si un año determinado es bisiesto
    en el calendario gregoriano*/

    const isAnoBisiesto=(year)=>{
      if (year%4===0){
        if (year%100===0){
          if (year%400===0){
            return console.log(`Es una año Bisiesto en el calendario Gregoriano`)
          }
          else{
           return   console.log(`No es una año Bisiesto en el calendario Gregoriano`)  
          }
        }else{
          return console.log(`Es una año Bisiesto en el calendario Gregoriano`)
        }
      }
      else{
           return console.log(`No es una año Bisiesto en el calendario Gregoriano`)  
      }
    }
    isAnoBisiesto(2024)


 /*Laura
  12. Escriba un programa JavaScript para poner en mayúscula la primera letra de una
    palabra de un String determinada.*/


    function ponerMayuscula(string){
      return string[0].toUpperCase()+string.slice(1);
 }
console.log(ponerMayuscula(`mayuscula`))



/* -- Jose Raul
   Escriba un programa que dado un número indique si es par o es impar*/

  function tipoNumero(num){
    if (num%2==0 ){
      console.log(`El numero es par`)
    }
    else{
      console.log(`El numero indicado es impar`)
    }
  }
  
  tipoNumero(234)
  

/*. Escribe un programa JavaScript para calcular la multiplicación y división de dos
    números.*/

    function operaciones(vl1,vl2){
      let multiplicacion=vl1*vl2
      
      let division1=vl1/vl2
      
      let division=vl2/vl1
      
      return (`El resultado de la multiplicacion es ${multiplicacion},la division de ${vl1} y ${vl2} es ${division1} y de la division de ${vl2} y ${vl1} es ${division}`)
       
      }
      console.log(operaciones(6,12))


  /*Jairo
    Escriba un programa JavaScript para verificar dos números dados y devuelve
    verdadero si uno de los números es 50 o si su suma es 50*/

const sumaNum=(n1,n2)=>{
  if (n1===50 || n2===50 || n1+n2===50){
    return true
  }
  else{
    return false
  }
}
  console.log(sumaNum(40,10))
  

  /* Sebastian
  6. Escriba un programa JavaScript para verificar si un número entero está entre 20 y
    100*/

const numEntero=(num)=>{
  if (num >20 && num < 100){
    return(`Este numero esta entre 20 y 100`)
  }
  else{
    return(`Este numero NO esta entre 20 y 100`)
  }
  }
  let numero=11;
  console.log(numEntero(numero))
  
  

 



    




