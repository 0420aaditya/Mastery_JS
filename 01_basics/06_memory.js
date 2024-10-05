//Two types of memory
// Stack and Heap
//Stack (Primitive) , Heap(Non-Primitive)

let myName = "AadityaDhakal";
let anothername = "addy";
anothername = "dhakaladdy";
console.log("myName :" + myName);
console.log("anothername:" + anothername);

//************** Note*************/
//For Primitive datatype, the copy of original value is used when the value of one vairable is assigned to another

let user = {
  email: "dhakaladdy00@gmail.com",
  address: "palung",
};

let user2 = user;
user2.email = "dhitalsamar@gmail.com";

console.log(user);
console.log(user2);

//************** Note*************/
//For Non-Primitive datatype, reference value is used when the value of one vairable is assigned to another // i.e the original value is passed
