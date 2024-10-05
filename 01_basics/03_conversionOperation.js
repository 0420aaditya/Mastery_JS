// let score = 45;
// console.log(typeof score);

// let valueInNumber = Number(score); // converting in number

// //"22" => 22
//"22qbc" => NaN
//true => 1; false=> 1;

//*************** Operations ***************/
// let value = 3;
// let negval = -value;
//console.log(negval);
// console.log(value ** negval);// value to the negvalue

// let str1 = "Hello";
// let str2 = "Addy";
// let str3 = "How Are You?";
// let str4 = str1 + str2 + str3;
// console.log(str4);
// console.log("1" + 2);
// console.log("1" + 2 + 2); //all will be converted to the string
// console.log(1 + 2 + "3");

//Note **  Conversion will be based on the first type of data
// if 1st is string then all will be string

// let counter = 10;
// ++counter;
// console.log(counter);

// let x = 1;
// let y = x++; //x=1 is assigned to y first and then incremented i.e, x=2 and returned to x
// //So the expected output is x=2, y=1
// console.log(x);
// console.log(y);

let a = 4;
let b = ++a; //pre-increment operator so a is incremented forst and then assigned to b
//expected: a=5,b=5
console.log(a); //since the latest value of a is 5 so a=5
console.log(b);
