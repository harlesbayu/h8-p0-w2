/**
Buatlah sebuah PSEUDOCODE untuk kasus berikut:

Sebuah mobil sedang berjalan dengan kecepatan 80 km/jam.
Ketika mobil akan menanjak sebuah jalanan/jalur, kecepatan mobil akan berkurang
sesuai dengan kemiringan sudut dari jalan tersebut:
 - sudut kemiringan jalan 0-14 derajat maka kecepatan mobil tidak akan berkurang
 - sudut kemiringan jalan 15-29 derajat maka kecepatan mobil akan berkurang 10 km/jam
 - sudut kemiringan jalan 30-44 derajat maka kecepatan mobil akan berkurang 15 km/jam
 - sudut kemiringan jalan 45-50 derajat maka kecepatan mobil akan berkurang 25 km/jam

Tampilkan kecepatan mobil jika menghadapi tanjakan dengan sudut kemiringan tersebut
**/


//your alogritma/pseudocode here
/*
PSEUDOCODE

STORE 'kecepatan' with 80
STORE 'kemiringanSudut' with any numerical value

IF 'kemiringanSudut' >= 15 AND 'kemiringanSudut' <= 29
    kecepatan = kecepatan - 10
ELSE IF 'kemiringanSudut' >= 30 AND 'kemiringanSudut' <= 44  
    kecepatan = kecepatan - 15
ELSE IF 'kemiringanSudut' >= 45 AND 'kemiringanSudut' <= 50  
    kecepatan = kecepatan - 25

DISPLAY 'kecepatan'
*/