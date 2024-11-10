//for of loop

//forof loop is not iterable for object
//for of loop is for array and map but dont work for objet

const arr = [1, 2, 3, 4, 5];

for (const iterator of arr) {
  // console.log(iterator);
}

const greetings = "Hello World!";

for (const greet of greetings) {
  // console.log(`Each char is : ${greet}`);
}

//maps
//maps stores unique values with key value pairs
const map = new Map();
map.set("NP", "Nepal");
map.set("usa", "United States of America");
map.set("fr", "France");

//console.log(map);

for (const [key, value] of map) {
  //console.log(key, ":", value);
}

const myObject = {
  game1: "NFS",
  game2: "spiderman",
};

for (const [key, value] of myObject) {
  console.log(key, ":", value);
}
