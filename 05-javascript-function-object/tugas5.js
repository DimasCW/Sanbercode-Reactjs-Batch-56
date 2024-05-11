//SOAL 1
function cetakFunction(){
    return "Hallo Nama saya Dimas"
}

console.log(cetakFunction())

console.log('')
console.log('-------------------------------------------')
console.log('')

//SOAL 2
function myFunction(a, b) {
    return a + b;
  }
  
  let angka1 = 20;
  let angka2 = 7;
  let output = myFunction(angka1, angka2);
  console.log(output); // Output: 27
  
console.log('')
console.log('-------------------------------------------')
console.log('')

//SOAL 3
// function Hello(){
//     return "Hello"
// }

const Hello = () =>{
    return "Hello"
}
console.log(Hello)

console.log('')
console.log('-------------------------------------------')
console.log('')

//SOAL 4
let obj={
    nama:"john",
    umur:22,
    bahasa:"indonesia"
}

console.log(obj.bahasa)

console.log('')
console.log('-------------------------------------------')
console.log('')

//SOAL 5
let arrayDaftarPeserta = ["John Doe", "laki-laki", "baca buku" , 1992]
let objDaftarPeserta = {
    nama:arrayDaftarPeserta[0],
    "jenis kelamin":arrayDaftarPeserta[1],
    hobi:arrayDaftarPeserta[2],
    "tahun lahir": 1992
}
console.log(objDaftarPeserta)

console.log('')
console.log('-------------------------------------------')
console.log('')

//SOAL 6

let buah = [
    {
    nama: "Nanas",
    warna: "Kuning",
    adaBijinya: false,
    harga: 9000
    },
    {
    nama: "Jeruk",
    warna: "Oranye",
    adaBijinya: true,
    harga: 8000
    },
    {
    nama: "Semangka",
    warna: "Hijau & Merah",
    adaBijinya: true,
    harga: 10000
    },
    {
    nama: "Pisang",
    warna: "Kuning",
    adaBijinya: false,
    harga: 5000
    }
]

let buahfilter = buah.filter(function(buah){
    return buah.adaBijinya != true;
})
console.log(buahfilter)

console.log('')
console.log('-------------------------------------------')
console.log('')

//SOAL 7
let phone = {
    name: "Galaxy Fold 5",
    brand: "Samsung",
    year: 2023
 }

const {name, brand, year} = phone

 console.log(name, brand, year)

 console.log('')
 console.log('-------------------------------------------')
 console.log('')
 
//SOAL 8
let dataBukuTambahan = {
    penulis: "john doe",
    tahunTerbit: 2020 
  }
  
let buku = {
nama: "pemograman dasar",
jumlahHalaman: 172
}

let objOutput = {...dataBukuTambahan, ...buku}



console.log(objOutput)

console.log('')
console.log('-------------------------------------------')
console.log('')

//SOAL 9
let mobil = {
    merk : "bmw",
    color : "red",
    year : 2022
}

const functionObject = (mobil) => {
    return mobil
}

console.log(functionObject(mobil))

