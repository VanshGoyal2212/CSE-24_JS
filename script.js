// console.log("Hello World");
// document.write("Hello world")
//let x  ---- undefined (garbage value)
// null value is a value (Avoid garbage value)
//case sensitive 
// modern js variable ------ let and const
// eg . let x;
// x=10;
// eg . const y=20;


// primitive datatype
// 1.number
// 2.String
// 3.boolean
// 4.undefined
// 5.null
var num=10;
console.log(num);
console.log(typeof(num));
num=false;
console.log(num);
console.log(typeof(num));
// reference type 
// 1.array
// 2.function 
// 3.object
// 4.Symbol

// var sayhello=function(){
//     alert("hello world");
// }
// var numberArray=[1,2,3];
// console.log(numberArray);

const sym1=Symbol(4);
console.log(sym1);
const sym2=Symbol(4);
console.log(sym2);
if(sym1==sym2){
    console.log("True")
}
else{
    console.log("False")
}