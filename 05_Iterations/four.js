const myObject = {
  js: "javascript",
  cpp: "C++",
  rb: "rubby",
  swift: "swift by apple",
};

// for (const key in myObject) {
//   console.log(key);
// }
for (const key in myObject) {
  //console.log(`${key} is the shortcut of ${myObject[key]}`);
}

const programming = ["js", "rb", "java", "python"];

for (const key in programming) {
  //console.log(programming[key]);
}

const map = new Map();
map.set("NP", "Nepal");
map.set("usa", "United States of America");
map.set("fr", "France");

for (const key in map) {
  console.log(key);
}
