console.log("esteban/index/js");

/**
 * EJERCICIOS JS
 * 
 
  -- Emily
  1. Escribe un programa JavaScript para calcular la multiplicación y división de dos
    números.
*/

// function operation(num1,num2){
//    mul=num1*num2;
//    div=num1/num2;
//    console.log(`multiplicacion = ${mul}`);
//    console.log(`division = ${div}`);
// }
// operation(4,2);

/*  -- Daniel
  2. Escribe un programa JavaScript para encontrar el área de un triángulo donde las
    longitudes de los tres de sus lados son 5, 6, 7
*/

// function areaTriangulo(a,b,c){
//    let sp=(a+b+c)/2;
//    let area=Math.sqrt(sp*(sp-a)*(sp-b)*(sp-c));
//    console.log(area);
//   return area;
// }

// areaTriangulo(4,5,6);

/*
  -- Laura
  3. Escriba un programa JavaScript para determinar si un año determinado es bisiesto
    en el calendario gregoriano

*/

// function bisiesto(anio){
//     if (anio % 4 === 0) {
//       console.log("bisiesto")
//       return "año bisiesto"
//     }
//     console.log("no bisiesto")
//      return "no es bisiesto"
// }
// bisiesto(205);
/*
  -- Jose Raul
  4. Escriba un programa que dado un número indique si es par o es impar

*/
// function parImpar(num){
//   num%2===0 ?  console.log(`${num} es par`) :  console.log(`${num} es impar`);
// } 
// parImpar(14);

/*

  -- Jairo
  5. Escriba un programa JavaScript para verificar dos números dados y devuelve
    verdadero si uno de los números es 50 o si su suma es 50

    */
    // function dosNumeros(num1, num2){
    //   if(num1===50 || num2===50 || num1+num2===50){
    //     return true;
    //   }
    // }
    // dosNumeros(40,10);


    /*
  -- Sebastian
  6. Escriba un programa JavaScript para verificar si un número entero está entre 20 y
    100

    */
    // function rangoEntero(num){
    //   num=parseInt(num);
    //   if (num>=20 && num<=100) {
    //     console.log("esta entre 20 y 100");
    //     return "esta entre 20 y 100";
    //   }
    // }
    // rangoEntero(100);

    /*

  -- Juan Manuel
  7. Escriba un programa JavaScript para verificar si un número positivo dado es un
    múltiplo de 3 o un múltiplo de 7
*/
 function multiplo(num){
   num=Math.abs(num);
   if (num % 3 ===0 && num % 7 === 0) {
     console.log(`${num} es multiplo de 3 y 7 `)
   }
   else if(num % 3 === 0){
    console.log(`${num} es multiplo de 3`);
   }else if(num % 7 === 0){
     console.log(`${num} es multiplo de 7`);
   }
   else{
     console.log(`${num}no es multiplo de 3 o 7`);
   }
 }

 multiplo(21);
/*
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
*/


// function mayor(int1,int2,int3){
//     int1=parseInt(int1);
//     int2=parseInt(int2);
//     int3=parseInt(int3);
//     if((int1>int2)&&(int1>int3)){
//       console.log(`el mayor es ${int1}`);
//     }else if ((int2>int1)&&(int2>int3)){
//       console.log(`el mayor es ${int2}`);
//     }else{
//       console.log(`el mayor es ${int3}`);
//     }
    
// }
// mayor(100,67,9);
/*
  -- Daniel
  11. Escriba un programa JavaScript para calcular la suma de los dos enteros dados. Si
    la suma está en el rango 50-80, devuelva 65; de lo contrario, devuelve 80

    */
    // function suma(int1,int2){
    //    int1=parseInt(int1);
    //    int2=parseInt(int2);
    //    sum=int1+int2;
    //   if (sum >= 50 && sum <= 80) {
    //     console.log(65);
    //     return 65;
    //   }
    //   console.log(80);
    //   return 80;
    // }

    // suma(50,5);


    /*
  -- Laura
  12. Escriba un programa JavaScript para poner en mayúscula la primera letra de una
    palabra de un String determinada

    */
    // function upperCa(str){
    //   let nuevo=str.split(" ");
    //   let otro=[];
    //   let res=[];
    //   let sum=[];
    //   for (let i = 0; i < nuevo.length; i++) {
    //     otro=nuevo[i].slice(1, nuevo[i].length+1);
    //     let  mayu=nuevo[i][0];
    //     let up=mayu.toUpperCase(); 
    //     res= up.concat(otro);
    //     sum+=res;
    //   }
    //     console.log(sum);
    // }
    
    // upperCa("gabriel");
    /*

  -- Jose Raul
  13. Escriba un programa que dado un String indique cuántos caracteres tiene. Ejemplo:
    “Sebastian” -> 9, “Jimena” -> 6
*/

// function cuantosCarateres(str){
//   let total=str.length;
//   console.log(`"${str}" -> ${total}`);
// }
// cuantosCarateres("Jimena");
/*
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
