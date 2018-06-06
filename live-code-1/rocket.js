// Competencies: Functions + Loopings
/*
==============
Three Cols Box
==============
Instruksi
=========
Buatlah sebuah function bernama drawThreeColsBox yang menjalankan proses dengan menggunakan looping (boleh dengan while atau for) dan menerima satu parameter bernama height.
Buatlah sebuah angka dengan pola pemunculan tiga angka berurut sebagai berikut:

contoh 1 (drawThreeColsBox(3)):
1 2 3
4 5 6
7 8 9

contoh 2 (drawThreeColsBox(5)):
1 2 3
4 5 6
7 8 9
10 11 12
13 14 15

contoh 3 (drawThreeColsBox(1)):
1 2 3

Note: pola angka harus dimulai dari 1, dan setiap angka diberikan spasi.
Hati-hati, yang ditampilkan adalah sebuah string, bukan angka!
tinggi kotak sesuai dengan nilai variable height!
*/

// SKELETON CODE (Code Sample)
/*
// CARA 1
function drawThreeColsBox(height){
  var polaAngka = [1,2,3] ;
  for(var i = 0; i < height; i++){
    if(i == 0){ 
    var polaAngkaPerbaris = String(polaAngka[0]) +' ' + String(polaAngka[1]) + ' ' +  String(polaAngka[2]);
    } else {    
    polaAngka[0] = polaAngka[0] + 3;
    polaAngka[1] = polaAngka[1] + 3;
    polaAngka[2] = polaAngka[2] + 3;
    var polaAngkaPerbaris = String(polaAngka[0]) +' ' + String(polaAngka[1]) + ' ' +  String(polaAngka[2]);
    }
    console.log(polaAngkaPerbaris);
  }
}

drawThreeColsBox(5);
*/


/*
// CARA 2
function drawThreeColsBox(height){
nextColumn = 1;
for(var i = 0; i < height; i++){
  var tampung="";
  for(var k = 0; k < 3; k++){
    tampung = tampung + nextColumn + " ";
    nextColumn++;
  }    
  console.log(tampung);
}
}

drawThreeColsBox(3);
*/


/*
// CARA 3
function drawThreeColsBox(height){
  var string = '';
  for(var i = 1; i <= height*3; i++){
    string += i + ' ';
    if(i % 3 === 0){
      console.log(string);
      string = '';
    }
  }
  
}

drawThreeColsBox(3);
*/


/*
// CARA 4
function makeThreeColumn(height){
  var tampung=""
  for(var i = 1; i < height*3; i+=3){
    tampung = i + " " + (i+1) + " " + (i+2)
    console.log(tampung);
  }
  
}

makeThreeColumn(3);
*/