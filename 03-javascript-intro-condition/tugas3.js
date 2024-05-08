//SOAL 1
let namalengkap = 'Dimas Chandra Winata';
console.log(namalengkap);

console.log('')
console.log('---------------------------------------')
console.log('')


//SOAL 2
let word = 'JavaScript ';
let second = 'is ';
let third = 'awesome';

let outputGabunganVariable = word + second + third;
console.log(outputGabunganVariable);

console.log('')
console.log('---------------------------------------')
console.log('')


//SOAL 3
let hello = 'Hello ';
let world = 'World!!';

let output = `${hello} ${world}`
console.log(output)

console.log('')
console.log('---------------------------------------')
console.log('')


//SOAL 4
let panjangPersegiPanjang = "8";
let lebarPersegiPanjang = "5";
let strInt_1 = parseInt(panjangPersegiPanjang);
let strInt_2 = parseInt(lebarPersegiPanjang);

let kelilingPersegiPanjang = 2 * (strInt_1 + strInt_2);
console.log(kelilingPersegiPanjang)

console.log('')
console.log('---------------------------------------')
console.log('')


//SOAL 5
let sentences= 'wah javascript itu keren sekali'; 

let firstWords= sentences.substring(0, 3); 
let secondWords = ' javascript '
let thirdWords = 'itu ';
let fourthWords = 'keren ';
let fifthWords = 'sekali'; 

console.log('Kata Pertama: ' + firstWords); 
console.log('Kata Kedua: ' + secondWords); 
console.log('Kata Ketiga: ' + thirdWords); 
console.log('Kata Keempat: ' + fourthWords); 
console.log('Kata Kelima: ' + fifthWords);

console.log('')
console.log('---------------------------------------')
console.log('')

//SOAL 6
var sentence = "I am going to be React JS Developer"; 

var exampleFirstWord = sentence[0] ; 
var exampleSecondWord = sentence[2] + sentence[3]  ; 
var thirdWord = sentence[5] + sentence[6] + sentence[7] + sentence[8] + sentence[9]; // lakukan sendiri, wajib mengikuti seperti contoh diatas 
var fourthWord = sentence[11] + sentence[12]; // lakukan sendiri , wajib mengikuti seperti contoh diatas
var fifthWord = sentence[14] + sentence[15]; // lakukan sendiri , wajib mengikuti seperti contoh diatas
var sixthWord = sentence[16] + sentence[17] + sentence[18] + sentence[19] + sentence[20] + sentence[21]; // lakukan sendiri , wajib mengikuti seperti contoh diatas
var seventhWord = sentence[23] + sentence[24]; // lakukan sendiri , wajib mengikuti seperti contoh diatas
var eighthWord = sentence[26] + sentence[27] + sentence[28] + sentence[29] + sentence[30] + sentence[31] + sentence[32] + sentence[33] + sentence[34]; // lakukan sendiri , wajib mengikuti seperti contoh diatas

console.log('First Word: ' + exampleFirstWord); 
console.log('Second Word: ' + exampleSecondWord); 
console.log('Third Word: ' + thirdWord); 
console.log('Fourth Word: ' + fourthWord); 
console.log('Fifth Word: ' + fifthWord); 
console.log('Sixth Word: ' + sixthWord); 
console.log('Seventh Word: ' + seventhWord); 
console.log('Eighth Word: ' + eighthWord);

console.log('')
console.log('---------------------------------------')
console.log('')

//SOAL 7
let txt = "I can eat bananas all day";
let hasil = txt.slice(10,17);

console.log(hasil);

console.log('')
console.log('---------------------------------------')
console.log('')

//SOAL 8 
var nilaiDoe = 50;

if (nilaiDoe >= 80){
    console.log('A')
}else if (nilaiDoe >= 70){
    console.log('B')
}else if (nilaiDoe >= 60){
    console.log('C')
}else if(nilaiDoe >= 50){
    console.log('D')
}else {
    console.log('E')
}

console.log('')
console.log('---------------------------------------')
console.log('')

//SOAL 9
let angka = 2

// if(angka === 2){
//   console.log("angka nya 2")
// }else{
//   console.log("bukan angka 2")
// }

let angkaAngka = angka === 2 ? "angka nya 2" : "bukan angka 2";
console.log(angkaAngka)

console.log('')
console.log('---------------------------------------')
console.log('')

//SOAL 10
var traffic_lights = "red";
switch(traffic_lights){
    case 'red' : {
        console.log('berhenti');
        break;
    }
    case 'yellow' :{
        console.log('hati-hati');
        break;
    }
    case 'green' :{
        console.log('berjalan')
        break;
    }
}
