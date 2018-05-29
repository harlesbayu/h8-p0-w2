1. Menyusun Barisan Bintang

var i = 0;
var j = 5;
do {
    i++;
    console.log("*");
} while(i<j);

===================================================

2. Menyusun Barisan Bintang Dengan Nested Looping

var i = 5;

for(baris=1; baris<=i; baris++){
  
  var bintang = '';
  for(kolom=1; kolom<=i; kolom++){
    bintang += "*";
  }
  
  console.log(bintang);
}

===================================================

3. Menyusun Barisan Tangga Bintang Dengan Nested Looping

var i = 5;

for(baris=1; baris<=i; baris++){
  
  var bintang = '';
  for(kolom=1; kolom<=baris; kolom++){
    bintang += "*";
  }
  
  console.log(bintang);
}
