function myFunction(){
    alert("Hello World")
}
function sayhello(){
    alert("sayhello")
}
// function add(x,y){
//     return x+y;
// }

let add =(x,y)=>{console.log(x,y)}

add(2,3);

// object******************** it is a unorderd collection 
let x={};
var person2=new Object();
person2.name="vansh";
person2.age=32;
person2.ismarried=true;
person2.address={};
person2.address.street="nagar road";
person2['address']['faltNo']=33;
console.log(person2);