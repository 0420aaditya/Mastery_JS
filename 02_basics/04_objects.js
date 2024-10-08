//object singleton
const instaUser = new Object(); //singleton
const fbUser = {};
//both are empty object but 2nd one is non singleton object whereas 1st is singleton
instaUser.id = "E00304";
instaUser.name = "Samar";
instaUser.isLoggedIn = false;
//console.log(instaUser;

const regularUser = {
  email: "someone@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Aaditya",
      lastname: "Dhakal",
    },
  },
};

//console.log(regularUser.fullname.userfullname.firstname); //accessing nested object

const obj1 = {
  1: "a",
  2: "b",
};
obj2 = {
  3: "c",
  4: "d",
};

// const obj3 = Object.assign({}, obj1, obj2); //Object.assign(target,source);
const obj3 = { ...obj1, ...obj2 }; //easiest and mostly used methods and also the latest
console.log(obj3);
console.log(
  "####################################################################"
);

//accessing the list of keys of an object
console.log(Object.keys(regularUser));
//accessing the list of values of an object
console.log(Object.values(regularUser));

//another interesting methods of accessing objects
console.log(Object.entries(regularUser)); //returns each key and corresponding value in a separate array
//output: [
//   [ 'email', 'someone@gmail.com' ],
//   [ 'fullname', { userfullname: [Object] } ]
// ]

console.log(regularUser.hasOwnProperty("firstname")); //to find if the value is present inside the object

//######################################## De-structuring object ###################################################
const course = {
  coursename: "Js",
  price: 999,
  courseInstructor: "addy",
};

const { courseInstructor, price } = course;
//Renaming the variables
const { courseInstructor: instructor, price: coursePrice } = course;

//**************************** API ********************************/
// {
//     "name": "Addy",
//     "coursename":"js",
//     "price": "free"
// }
