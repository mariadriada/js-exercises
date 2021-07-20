console.log("exercises/index/js");

/**
 * EJERCICIOS JS
 * 
 
  -- Emily
  1. Escribe un programa JavaScript para calcular la multiplicación y división de dos
    números.*/

    console.log("----------------------MULTIPLICACION Y DIVISION-------------------------------")

  function multiDiv(num1,num2,op){
    if (op==="*"){
      return num1*num2
    }else if(op==="/"){
      if(num2===0){
        return "No puedes dividir por cero cambia el num2"
      }else{
        return num1/num2
      }
    }
  }
  console.log(multiDiv(3,4,"*"))
  console.log(multiDiv(3,4,"/"))
  console.log(multiDiv(3,0,"/"))

  /*-- Daniel
  2. Escribe un programa JavaScript para encontrar el área de un triángulo donde las
    longitudes de los tres de sus lados son 5, 6, 7*/

  console.log("----------------------AREA DE TRIANGULO-------------------------------")

  function areaTriangulo(l1,l2,l3){
    let per=l1+l2+l3
    console.log(`perimetro: ${per}`)
    let sup=per/2
    console.log(`Sup-perimetro: ${sup}`)
    return (sup*(sup-l1)*(sup-l2)*(sup-l3))**(1/2)
  }

  console.log(`El area del triangulo es: ${areaTriangulo(5,6,8)}`)
  console.log(`El area del triangulo es: ${areaTriangulo(10,3,5)}`)

  /*-- Laura
  3. Escriba un programa JavaScript para determinar si un año determinado es bisiesto
    en el calendario gregoriano*/

    console.log("----------------------AÑO BISIESTO-------------------------------")

    function esBisiesto(anhio){
      return anhio % 100 === 0 ? anhio % 400 === 0 : anhio % 4 === 0;
    }

    console.log(`El año 2020 es Bisiesto ? ${esBisiesto(2020)}`)

  /*-- Jose Raul
  4. Escriba un programa que dado un número indique si es par o es impar*/
  console.log("-----------------------NUMERO PAR O IMPAR?--------------------------")
  
  function parImpar(num){
  return num % 2 === 0 ? "El número es par" : "El número es impar"
  }
  console.log(parImpar(3))
  console.log(parImpar(2))
  console.log(parImpar(30))

  /*-- Jairo
  5. Escriba un programa JavaScript para verificar dos números dados y devuelve
    verdadero si uno de los números es 50 o si su suma es 50*/
    console.log("-----------------------ES 50 O SUMA 50--------------------------")

    function sumaCincuenta(num1, num2){
      if(num1 + num2 === 50 ||  num1 === 50 || num2 ===50){
        return true
      }
      return false
    }
    console.log(sumaCincuenta(25, 25))
    console.log(sumaCincuenta(50, 25))
    console.log(sumaCincuenta(25, 50))
    console.log(sumaCincuenta(0, 25))


  /*-- Sebastian
  6. Escriba un programa JavaScript para verificar si un número entero está entre 20 y
    100*/
    console.log("-----------------------ENTRE 20 y 100--------------------------")

    function entre20y100(num){
      return num>=20 && num<=100 ? `El numero ${num} es mayor a 20 y menor que 100`:"Numero  fuera de rango"
    }
    console.log(entre20y100(10))
    console.log(entre20y100(20))
    console.log(entre20y100(50))
    console.log(entre20y100(101))

  /*-- Juan Manuel
  7. Escriba un programa JavaScript para verificar si un número positivo dado es un
    múltiplo de 3 o un múltiplo de 7*/
    console.log("-----------------------MULTPLO DE 3 O DE 7--------------------------")

    function multiploDe3Y7(num){
      if(num % 3 === 0 && num % 7 === 0) {
        return `El numero ${num} es multiplo de 3 y de 7`
      }else if(num % 7 === 0){
        return `El numero ${num} es multiplo de 7`
      }else if(num % 3 === 0) {
        return `El numero ${num} es multiplo de 3`
      }
    }
    console.log(multiploDe3Y7(21))
    console.log(multiploDe3Y7(27))
    console.log(multiploDe3Y7(42))
    console.log(multiploDe3Y7(33))
    console.log(multiploDe3Y7(7))

  /*-- Roberto
  8. Escriba un programa JavaScript para verificar si los valores enteros dados están en
    el rango 50-99 (inclusive). Devuelve verdadero si uno o más de ellos están en dicho
    rango*/

    console.log("-----------------------NUMEROS ENTRE 50 Y 99--------------------------")
    let arr=[100, 22, 65, 44, 55, 101, 23, 87]

    function rango(arr){
      let boolArr = []
      for (let i = 0;i < arr.length; i++){
        if(arr[i] >= 50 && arr[i] <= 99){
          boolArr[i] = true
        }else 
          boolArr[i]=false
      }
      return boolArr
    }

  console.log(rango(arr))

  /*-- Cristian
  9. Escribe un programa JavaScript que dado un número (Que representa grados) diga
    qué tipo de ángulo es.
    Tipos de ángulos:
    ○ Ángulo agudo: ángulo entre 0 y 90 grados.
    ○ Ángulo recto: un ángulo de 90 grados.
    ○ Ángulo obtuso: ángulo entre 90 y 180 grados.
    ○ Ángulo llano: un ángulo de 180 grados.*/
    console.log("-----------------------DETERMINA EL ANGULO--------------------------")
    function tipoAngulo(ang){
      if (ang<90){
        return `El angulo ${ang} es agudo`
      }else if (ang===90){
        return `El angulo ${ang} es recto`
      }else if (ang>90 && ang<180){
        return `El angulo ${ang} es obtuso`
      }else if (ang===180){
        return `El angulo ${ang} es llano`
      }
    }

    console.log(tipoAngulo(18))
    console.log(tipoAngulo(95))
    console.log(tipoAngulo(90))
    console.log(tipoAngulo(180))
  /*-- Emily
  10. Escriba un programa JavaScript para encontrar el mayor de tres enteros dados*/
  console.log("-----------------------EL MAYOR DE 3--------------------------")
    function mayor(num1,num2,num3){
      if (num1>num2 && num1>num3){
        return `El numero ${num1} es el mayor de los tres`
      }else if(num2>num1 && num2>num3){
        return `El numero ${num2} es el mayor de los tres`
      }else{
        return `El numero ${num3} es el mayor de los tres`
      }
    }
    console.log(mayor(5,2,3))
    console.log(mayor(20,2,1))
    console.log(mayor(1,8,2))

  /*-- Daniel
  11. Escriba un programa JavaScript para calcular la suma de los dos enteros dados. Si
    la suma está en el rango 50-80, devuelva 65; de lo contrario, devuelve 80*/
    console.log("----------------------SUMA DE DOS ENTEROS-------------------------------")

    function sumaEnteros(n1,n2){
      if ((n1+n2)>=50 && (n1+n2)<=80){
        return 65
      }else{
        return 80
      } 
    }
    console.log(sumaEnteros(1,2))
    console.log(sumaEnteros(50,10))
    console.log(sumaEnteros(30,30))

  /*-- Laura
  12. Escriba un programa JavaScript para poner en mayúscula la primera letra de una
    palabra de un String determinada*/
    console.log("----------------------PPRIMERA LETRA EN MAYUSCULA-----------------------------")
    function mayuscula(str){
      let arrStr=str.split(" ")
      for (let i = 0;i < arrStr.length; i++){
        let palabra=arrStr[i]
        palabra=palabra.replace(palabra[0], palabra[0].toUpperCase())
        arrStr[i]=palabra
      }
      return arrStr.join(" ")
    }
    console.log(mayuscula("hola mundo"))
  /*-- Jose Raul
  13. Escriba un programa que dado un String indique cuántos caracteres tiene. Ejemplo:
    “Sebastian” -> 9, “Jimena” -> 6*/
    console.log("----------------------CONTAR CARACTERES DE UN STRING-----------------------------")
    function contarCaracteres(str){
      return str.length
    }
    console.log(contarCaracteres("Sebastian"))
    console.log(contarCaracteres("Jimena"))
    console.log(contarCaracteres("Daniel"))

  /*-- Jairo
  14. Escriba un programa JavaScript para convertir un número determinado en horas.
    Por ejemplo: 120 serían 2 horas*/
    console.log("----------------------DE MINUTOS A HORAS-----------------------------")
  function minHoras(min){
    let horas=min/60
    return `${min} minutos son ${horas} horas`
  }
  console.log(minHoras(120))
  console.log(minHoras(60))
  console.log(minHoras(30))

  /*-- Sebastian
  15. Escriba un programa JavaScript para comprobar si aparece el número 1 en la
    primera o última posición de un arreglo dado de números enteros. La longitud del
    arreglo debe ser mayor o igual a 1*/

  console.log("----------------------EL 1 AL PRINCIPIO O AL FINAL-----------------------------")
  
  function buscarUno(array){
    let final=array.length-1
    if(array[0]===1 && array[final]===1){
      return "El numero 1 esta en la posicion 0 y en la posicion "+final+" del arreglo"
    }else if(array[0]===1){
      return `El numero 1 esta en la posicion 0 del arreglo`
    }else if(array[final]===1){
      return "El numero 1 en la posicion "+final+" del arreglo"
    }
  }
  let arr0=[1, 2, 3, 4, 1]
  let arr1=[1, 2, 3, 4]
  let arr2=[2, 3, 4, 5, 6, 1]

  console.log(buscarUno(arr0))
  console.log(buscarUno(arr1))
  console.log(buscarUno(arr2))

  /*-- Juan Manuel
  16. Escriba un programa que calcule el promedio de los números de un arreglo*/
  console.log("----------------------PROMEDIO-----------------------------")
    function promedio(arrProm){
      let sum=0
      for(let i=0;i<arrProm.length;i++){
        sum=sum+arrProm[i]
      }
      return sum/(arrProm.length)
    }
    console.log(promedio(arr1))

  /*-- Roberto
  17. Escriba un programa JavaScript para intercambiar el primer y último elemento de un
    arreglo dado de enteros.*/
    console.log("----------------------INTERCAMBIO PRIMERO Y ULTIMO---------------------------")

    function intercambio(arrInt){
      let tem=arrInt[arrInt.length-1]
      let temp=arrInt[0]
      arrInt[0]=tem
      arrInt[arrInt.length-1]=temp
      return arrInt
    } 
    arr1=[1, 2, 3, 4]
    console.log(intercambio(arr1))
    

  /*-- Cristian
  19. Escriba un JavaScript para encontrar el String más largo de un arreglo de Strings.
    Ejemplo: [“a”,”bc”,”def”] Debería imprimir “def” por ser el que más caracteres tiene.*/
    console.log("----------------------EL STRING MAS LARGO---------------------------")

    function strinMasLargo(arrStr){
       let arrLength=[]
      for(let i=0;i<arrStr.length;i++){
        arrLength[i]=arrStr[i].length
        /*for(let j=0;j<arrStr[i].length;j++){
          arrLength[i]=arrLength[i].length
        }*/
      }
    }
    let arrStr=["a","bc","def"]
    console.log(strinMasLargo(arrStr))