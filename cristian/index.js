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