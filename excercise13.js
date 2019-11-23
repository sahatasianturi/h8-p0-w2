function xo(str) {
    var tampungX=0
    var tampungO=0
    for (i=0; i<str.length; i++){
        if( str[i]=='x'){
            tampungX+=1
        }else if(str[i]=='o'){
            tampungO+=1
        }
    } return (tampungX==tampungO)
}
// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true