const user = {
  username: "Addy",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website`);
    // console.log(this);
  },
};
// user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();

// console.log(this);

// function chai() {
//   let username = "Aaditya";
//   console.log(this.username);
// }
// chai();

//++++++++++++++ Arrow Function +++++++++++++++
const chai = () => {
  let name = "Aaditya";
  console.log(this.name);
};
chai();

// const addNumbers = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(addNumbers(3, 5));

//const addNumbers = (num1, num2) => num1 + num2; //same thing // its another method of using arrow function

//OR
// const addNumbers = (num1, num2) => num1 + num2;

//To return object by arrow function:
const addNumbers = (num1, num2) => ({ username: "Addy" });

//*********Important******************/
//{} use gareo vane return use garna parxa , () ra aru use gareo vane pardain and called implicit return
