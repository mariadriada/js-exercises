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


