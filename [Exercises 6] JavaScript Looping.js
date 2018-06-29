/*Problem
Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
*/
//1. Melakukan Looping Menggunakan While

console.log("LOOPING PERTAMA");
for(var i = 2; i <= 20; i=i+2){
  console.log(i + ' - I love coding')
}

console.log("LOOPING KEDUA");
var start = 20;
while (start >= 2) {
	console.log(start + ' - I will become fullstack developer')
	start-=2;
}

//==============================================================
/*
Problem
Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for. Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
*/
//2. Melakukan Looping Menggunakan For

console.log("LOOPING PERTAMA");
for (var i = 1; i <= 20 ; i++) {
	console.log(i + ' - I love coding')
}

console.log("LOOPING KEDUA");
for (var i = 20; i >= 1 ; i--) {
	console.log(i + ' - I will become fullstack developer')
}

//==============================================================
/*
Problem
1. Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
2. Di dalam perulangan, periksa setiap angka counter:
 + Apabila angka counter adalah angka genap, tuliskan GENAP
 + Apabila angka counter adalah angka ganjil, tuliskan GANJIL
3. Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
4. Pada 3 perulangan baru ini periksa setiap angka counter:
 + Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
 + Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
"3 kelipatan 3" dan seterusnya.
*/
//3. Angka Ganjil dan Genap

for (var i = 1; i <= 100; i++) {
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

for (var i = 1; i <= 100; i+=2) {
  if (i % 3 === 0) {
    console.log(i + ' KELIPATAN 3');
  }
}


for (var i = 1; i <= 100; i+=5) {
  if (i % 6 === 0) {
    console.log(i + ' KELIPATAN 6');
  }
}


for (var i = 1; i <= 100; i+=9) {
  if (i % 10 === 0) {
    console.log(i + ' KELIPATAN 10');
   }
 }


