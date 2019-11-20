//1. Melakukan Looping Menggunakan While

console.log("LOOPING PERTAMA");
var i = 2;
while(i<= 20) {
  console.log(i +'- ' + 'I Love coding');
  i += 2 ; 
}
console.log('=======================')
console.log("LOOPING KEDUA");
var j = 20;
while( j >= 2) {
  console.log(j + '- '+ 'I will become fullstack developer');
  j -= 2 ;
}

//2. Melakukan Looping Menggunakan For

console.log("LOOPING PERTAMA");
for(k=1; k<= 20; k++){
  console.log(k +'- ' + 'I Love coding');
}
console.log('=======================')
console.log("LOOPING KEDUA");
for( l=20; l>=1; l--){
  console.log(l + '- '+ 'I will become fullstack developer');
}

//3. Angka Ganjil dan Genap


for( bilangan = 1; bilangan <= 100; bilangan ++){
    if(bilangan % 2 == 0){
        console.log('GENAP')
    }
    else {
        console.log('GANJIL')
    }
}

for ( bilangan2= 1; bilangan2 <= 100; bilangan2 += 2){
    if ( bilangan2 % 3 == 0){
        console.log(bilangan2 + ' kelipatan 3')
    }
    else {
        console.log('"')
    }
}

for ( bilangan5= 1; bilangan5 <= 100; bilangan5 += 5){
    if ( bilangan5 % 6 == 0){
        console.log(bilangan5 + ' kelipatan 6')
    }
    else {
        console.log('"')
    }
}

for ( bilangan9= 1; bilangan9 <= 100; bilangan9 += 9){
    if ( bilangan9 % 10 == 0){
        console.log(bilangan9 + ' kelipatan 10')
    }
    else {
        console.log('"')
    }
}