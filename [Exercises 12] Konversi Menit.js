/*
Problem
Diberikan sebuah function konversiMenit(menit) yang menerima satu parameter berupa angka yang merupakan ukuran waktu dalam menit. Function akan me-return string waktu dalam format jam:menit berdasarkan menit tersebut. Contoh, jika menit adalah 63, maka function akan me-return "1:03".
*/

function konversiMenit(menit) {
  var menit2 = Math.floor(menit/60);
  var detik = Math.floor(menit%60);
  if(detik < 10){
    detik = '0' + detik;
  }
  return menit2 + ":" + detik;
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00


/*
// The second ways
function konversiMenit(menit) {
  // you can only write your code here!
  var jam = Math.floor(menit / 60);
  var detik = menit % 60;
  var str = String(detik)
  if(str.length === 1){
    detik = '0' + menit % 60
  }
  return jam + ':' + detik
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00
*/