//1. Menyusun Barisan Bintang

var row1 = 5
for ( i=0; i< row1; i++){
    console.log('*')
}
console.log('============')
//2. Menyusun Barisan Bintang Dengan Nested Looping
var rows2= 5
    hasil=''
for ( j=0; j<rows2; j++){
    for(k=0; k<rows2; k++){
        hasil += '*'
    }

console.log(hasil)
hasil=''
}
console.log('============')

//3. Menyusun Barisan Tangga Bintang Dengan Nested Looping

var rows3= 5
    hasil1 =''
for  (l=0; l<= rows3; l++){
    for(m=0; m<=l; m++){
        hasil1 += '*'
    }
console.log(hasil1)
hasil1=''
}
