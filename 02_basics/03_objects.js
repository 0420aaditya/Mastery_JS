//singleton : object form constructor
Object.create;

//object literals

const mySymbol = Symbol("key1");

const users = {
  name: "Addy",
  "full name": "Aaditya Dhakal",
  age: 20,
  [mySymbol]: "my Key", //symbols are ued  with [] and accessed with [] too
  address: "ktm",
  email: "dhakaladdy00@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Mon", "Sat"],
}; //key are always treated as string

console.log(users);
//Two types of accessing the object
//Using . and using the key name inside ["key_name"]
console.log(users.email); //using dot
console.log(users["full name"]); //using []
console.log(users[mySymbol]); //accessing symbol

users.email = "aaditya.dhakal@imark.com.np"; //changing value of key
//Object.freeze(users); //freezes  the object and lock the value to non-changable and also dont let to add the keys and value further

//functions
users.greetings = function () {
  console.log("Welcome Users");
};
users.greetings2 = function () {
  console.log(`Welcome: ${this["full name"]}`); //accessing the key of the same object with this
};
console.log(users.greetings());
console.log(users.greetings2());
