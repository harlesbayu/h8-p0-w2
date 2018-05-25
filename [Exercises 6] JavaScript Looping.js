//1. Melakukan Looping Menggunakan While

console.log("LOOPING PERTAMA");
var start = 2;
while (start <= 20) {
	console.log(start + ' - I love coding')
	start+=2;
}

console.log("LOOPING KEDUA");
var start = 20;
while (start >= 2) {
	console.log(start + ' - I will become fullstack developer')
	start-=2;
}

//==============================================================

2. Melakukan Looping Menggunakan For

console.log("LOOPING PERTAMA");
for (var i=1; i<=20 ; i++) {
	console.log(i + ' - I love coding')
}

console.log("LOOPING KEDUA");
for (var i=20; i>=1 ; i--) {
	console.log(i + ' - I will become fullstack developer')
}

//==============================================================

//3. Angka Ganjil dan Genap

for (var i=1; i<=100; i++) {
  if(i % 2 === 0){
    console.log('Counter sekarang = ' + i);
    console.log('GENAP')
    console.log('====================')
  } else {
    console.log('Counter sekarang = ' + i);
    console.log('GANJIL')
    console.log('====================')
  }
}

for (var i=1; i <= 100; i+=2) {
  if (i % 3 === 0) {
    console.log(i + ' KELIPATAN 3');
  }
}


for (var i=1; i <= 100; i+=5) {
  if (i % 6 === 0) {
    console.log(i + ' KELIPATAN 6');
  }
}


for (var i=1; i <= 100; i+=9) {
  if (i % 10 === 0) {
    console.log(i + ' KELIPATAN 10');
   }
 }


