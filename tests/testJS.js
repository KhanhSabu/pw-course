const { isNumberObject } = require("util/types");

const student = {
    name : 'Khanh',
    age : 18,
    address: {
        diaChi: "o 61 lo 7 Den Lu 2",
        quan: "Hoang Mai"
    }
}

student.isHandSome = "Hand some";
delete student.age;
student.name = "Quang";
console.log(student);

let arrNumber = [1,2,3,4,5];
arrNumber.unshift(0);
// arrNumber.push(6);
// arrNumber.shift();
// arrNumber.shift();
// arrNumber.pop();
// arrNumber.pop();
console.log(arrNumber)

let k1 = 1;
let k2 = 'Khanh';
let k3 = undefined;
let k4 = null; 
let k5 = Symbol('description');
let k6 = true;
let k7;

console.log(typeof(arrNumber));
console.log(typeof(k1), typeof(k2), typeof(k3), typeof(k4), typeof(k5), typeof(k6), typeof(k7));

if(arrNumber[1] > 0){
    console.log("Toi dep zai");
    console.log(arrNumber[2])
}

switch(arrNumber[1] ){
    case 2 : console.log("hehe");
    break;
    case 1 : console.log("hihi");
    break;
    default: console.log("Chan doi")
}

for(let i = 0; i< 50; i++){
    if(i % 2 != 0){
        console.log(i);
    }
}

arrNumber.forEach(number => {
    console.log(number);
})

for(let number in arrNumber){
    console.log(number);
}

for(let number of arrNumber){
    console.log(number);
}

let mySumFunction = function sum(a,b){
    return a + b;
}

console.log("Sum: " + mySumFunction(1,2));

let str = "Hello World  ";
console.log(str.includes("Hello"));
console.log(str.trim());
console.log(str.toLowerCase());
console.log(str.indexOf("H"));
console.log(str.replace("Hello", "Hallo"));
console.log(str.split(" "));
console.log(str.substring(0,5));

console.log(arrNumber)
let hehe1 = arrNumber.map( number => number * 2);
console.log(hehe1)
let hehe2 = arrNumber.filter(number => number % 2 === 0);
console.log(hehe2)
let hehe3 = arrNumber.find(number => number % 2 != 0);
console.log(hehe3)
let hehe4 = arrNumber.reduce((sum, number) => sum + number, 0);
console.log(hehe4)
let hehe5 = arrNumber.some(number => number == 6);
console.log(hehe5)

let hehe6 = arrNumber.every(number => typeof(number) === "number");
console.log(hehe6)

let arrNumber2 = [4,5,6,7,8];
let hehe7 = arrNumber2.sort();
console.log(hehe7)