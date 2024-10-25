function myName() {
  console.log("A");
  console.log("D");
  console.log("D");
  console.log("Y");
}
//myName();

function addTwoNumbers(num1, num2) {
  let result = num1 + num2;
  return result;
}
const res = addTwoNumbers(3, 6);
console.log(res);

function loginMessage(username) {
  if (username === undefined) {
    // if(!username) same thing
    console.log("Enter the username");
  }
  return `${username} just logged in`;
}
// console.log(loginMessage("Addy"));
console.log(loginMessage()); //if no value is passed the its undefined

//*********afkjadfdjfjf********/
function calculateCartPrice(...num1) {
  // ...num1 is a rest operator used when the no of paramater required is unknown
  //yesle argument lai array ma convert garxa
  return num1;
}
console.log(calculateCartPrice(2, 3.4, 5));

const user = {
  username: "addy",
  price: 177,
};

function handleObject(anyyobject) {
  console.log(
    `username is ${anyyobject.username} and price is ${anyyobject.price}`
  );
}

// console.log(handleObject(user));
//function call garda nai object banayera pass garna milxa ///  existing object nai chainxa vanne hudaina
handleObject({
  username: "addy",
  price: 127,
});

const myArray = [20, 30, 40, 50, 60];
function returnThirdValue(getArray) {
  return getArray[2];
}
console.log(returnThirdValue(myArray));
