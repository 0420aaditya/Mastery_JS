//scopes -> {}

let a = 100;
if (true) {
  let a = 10;
  const b = 20;
  var c = 30; //never use var
  console.log(`Inner_a: ${a}`);
}

console.log(`Outer_a: ${a}`); //a is not accessible out of the scope "{}"

function one() {
  const username = "Addy";

  function two() {
    const site = "Youtube";
    console.log(username);
    console.log(a); //a is a global variable
  }
  // console.log(site);
  two();
}
one();

//++++++++++++++++++++++++++++ Interesting ++++++++++++++++++++++++++++

function addOne(num) {
  return num + 1;
}
addOne(5);

const addtwo = function (num) {
  return num + 2;
};
addtwo(6);
