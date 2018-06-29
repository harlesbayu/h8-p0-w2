/*
Problem
Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript untuk menampilkan di console barisan asterisks (bintang). Setiap baris memiliki 1 simbol '*'.
*/
//1. Menyusun Barisan Bintang

var i = 0;
var j = 5;
do {
    i++;
    console.log("*");
} while(i<j);

//===================================================
/*
Problem
Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript untuk menampilkan di console barisan asterisks (bintang). Setiap baris memiliki jumlah simbol '*' sesuai dengan jumlah baris. Manfaatkan nested loop atau loop di dalam loop untuk menyelesaikan kasus ini.
*/
//2. Menyusun Barisan Bintang Dengan Nested Looping

var i = 5;

for(var baris = 1; baris <= i; baris++){
  
  var bintang = '';
  for(var kolom=1; kolom <= i; kolom++){
    bintang += "*";
  }
  
  console.log(bintang);
}

//===================================================
/*
Problem
Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript untuk menampilkan di console barisan asterisks (bintang) dalam bentuk tangga. Setiap baris memiliki jumlah simbol '*' sesuai dengan nomor baris. Baris pertama, hanya ada satu bintang. Baris kedua, dua bintang, baris ketiga tiga bintang, dan seterusnya. Manfaatkan nested loop atau loop di dalam loop untuk menyelesaikan kasus ini.
*/
//3. Menyusun Barisan Tangga Bintang Dengan Nested Looping

var i = 5;

for(var baris = 1; baris <= i; baris++){
  
  var bintang = '';
  for(var kolom = 1; kolom <= baris; kolom++){
    bintang += "*";
  }
  
  console.log(bintang);
}
