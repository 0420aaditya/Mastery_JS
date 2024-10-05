const name = "Aaditya ";
const fileCount = 10;
//console.log(name + fileCount); // its traditional usecase
// In modern usecase

console.log(`Hello my name is  ${name} and my file count is ${fileCount}`); // its good way to use also called string interpolation

const socialName = new String("dhakal_addy00");
//console.log(socialName[4]);
//console.log(socialName.length);
let x = socialName.toLocaleUpperCase();
console.log(socialName);
console.log(x);
console.log(typeof socialName);
let y = "addy";
console.log(typeof y);
let a = socialName.length - 1;
console.log(x.charAt(a));
console.log(socialName.indexOf("a"));

let b = socialName.substring(0, 6); // doesnot include the ending string
console.log(b);
let revSocialName = socialName.split("").reverse().join(""); // reverse of string
if (socialName == revSocialName) {
  console.log("Palindrum");
} else {
  console.log("Not Palindrum");
}

const newValue = "  Aaditya Dhakal";
console.log(newValue);
console.log(newValue.trim()); //trim only remove the whitespace at the starting and ending not of teh middle of the string
console.log(socialName.replace("a", "i"));
console.log(socialName.split("_"));
