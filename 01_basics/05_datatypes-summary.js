// ************ Primitive **************** Call by Value
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

// ************ Reference/Non-Primitive **************** Call by reference
// Array, Objects, Functions

// const id = Symbol("abc");
// const nextId = Symbol("abc");
// if (id == nextId) {
//   console.log("They are Similar");
// } else {
//   console.log("They are not Similar");
// }

const heros = ["Spiderman", "Ironman", "Captain America"];
let myObj = {
  name: "Addy",
  age: 20,
};

const myFunction = function () {
  console.log("Hello World!");
};
console.log(typeof myFunction); //type is : function and nulli object type
