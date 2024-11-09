const userEmail = "a@addy.ai";
const User = [];
if (userEmail) {
  // console.log("Got User Email");
} else {
  // console.log("No user Email");
}

// In this case the condition will only be checked that userEmail contain some value and is not null

//Falsy values
// false, 0, -0, BigInt, 0n, "", null, undefined, NaN;

//Truthy Values
// "0" , "false"," ",[],{},function(){}

if (User.length === 0) {
  //console.log("Array is Empty");
}
//this mean that the array is empty

const emptyObj = {
  1: "addy",
  2: "dhakal",
};

if (Object.keys(emptyObj).length === 0) {
  //this mean if the object is empty the n execute this block of code
  console.log("Object is Empty");
}

// Nullish Coalescing Operator (??): null undefined
let val1;
//val1 = 5 ?? 10;
//val1 = null ?? 10;
// val1 = undefined ?? 15;
val1 = null ?? 10 ?? 20;
//this will assign th efirst value after null
console.log(val1);

//################ Ternary Operator ##########################

const teaPrice = 100;
teaPrice >= 50
  ? console.log("Price is less than 50")
  : console.log("Price is more than 50");
