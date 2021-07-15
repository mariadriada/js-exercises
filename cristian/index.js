console.log("cristian/index/js");

function angulos(grados) {
 if(grados >=0 && grados < 90){
    console.log("Angulo Agudo");
  }else if(grados > 90 && grados <180){
    console.log("Angulo obtuso");
  }else if(grados == 90){
    console.log("Angulo recto");
  }else if (grados ==180) {
    console.log("Angulo llano");
  }
} 

angulos(80);
angulos(120);
angulos(90);
angulos(180);



function findLongestWord(string){
  //Variable que acumula la palabra más grande
  let myLongestWord = "";
  for(let i=0;i<string.length;i++){
    if(string[i].length > myLongestWord.length){
      myLongestWord = string[i];
    }
  }
  return myLongestWord;
  }

let str = ['hola', 'este', 'es', 'arreglo', 'javascript','ohbraveNewworld'];
let str2 = ['a','bc','def'];
console.log(findLongestWord(str));
console.log(findLongestWord(str2));


function multiplicacion(num1, num2){
  let result = Number(num1 * num2);
  return result;
}

console.log(multiplicacion(5,4));

function division(a,b){
  let result = Number(a/b);
  return result;
}

console.log(division(40,5));

function bisiesto(year) {
 if ((year%4==0) && (year % 100 !=0 || year % 400==0)) {
   return 'año bisiesto';
 }else{
   return 'año no bisiesto';
 }
}

console.log(bisiesto(2008));
console.log(bisiesto(2004));
console.log(bisiesto(2012));
console.log(bisiesto(2019));

function triangleArea(l1,l2,l3) {
  let s = Number((l1+l2+l3)/2.0);
  let area = Math.sqrt(s*(s-l1)*(s-l2)*(s-l3));
  return area;
}

console.log(triangleArea(5,6,7));

function isEven(num){
  if (num%2===0) {
    return 'Numero Par'
  }else{
    return 'Numero Impar'
  }
}
console.log("--- Numeros Pares ----")
console.log(isEven(21));

function numbers(num1,num2){
  if( num1===50 || (num1+num2)===50){
    return 'verdadero';
  }else{
    return 'falso';
  }
}

console.log('------numeros 50/50--------');
console.log(numbers(50,0));

function rangeNumber(number) {
if(number>= 20 && number<=100){
 return 'dentro del rango';
} else{
  return 'fuera del rango';
}
}
console.log('---------------');
console.log(rangeNumber(101));
