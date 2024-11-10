const coding = ["js", "ruby", "java", "python", "swift"];

// coding.forEach(function (val) {
//   console.log(val);
// });

// //next method using arrow function as a call back function
// coding.forEach((value) => {
//   console.log(value);
// });

// function printMe(item) {
//   console.log(item);
// }

// coding.forEach(printMe);

coding.forEach((item, index, arr) => {
  console.log(item, index, arr);
});

const myCoding = [
  {
    language: "javascript",
    languageFileName: "js",
  },
  {
    language: "Python",
    languageFileName: "py",
  },
  {
    language: "java",
    languageFileName: "java",
  },
];

myCoding.forEach((item) => {
  console.log(item.language);
});
