// Competencies: Loopings
/*
=================
Horizontal Series
=================
Instruksi
=========
Buatlah sebuah proses beberapa penghitungan dengan menggunakan looping (boleh dengan while atau for)
Disediakan variable max, dimana akan menampilkan deret pengurangan ke kanan hingga mencapai angka 1.
Tampilkan deret sejumlah nilai max.
Buatlah sebuah deret angka horizontal dengan pola berikut:

contoh 1 (max = 3):
321
321
321

contoh 2 (height = 5):
54321
54321
54321
54321
54321

contoh 3 (height = 1):
1
Ketentuan
=========
Wajib menggunakan looping!
*/

// SKELETON CODE (Code Sample)
var max = 10;

for(var baris = max; baris >= 1; baris--) {
  var kolom2 = '';
  for(var kolom = max; kolom >= 1; kolom--) {
    kolom2 += kolom;
  }
  console.log(kolom2);
}


/*
// The second ways
function soal3(num) {
  // you can only write your code here!
  var nums = ''
  for(var i = 0; i < num; i++){
    for(var j = num; j > 0; j--){
      nums += j
    }
    nums += '\n'
  }
  return nums
}

// TEST CASES
console.log(soal3(3));
*/

