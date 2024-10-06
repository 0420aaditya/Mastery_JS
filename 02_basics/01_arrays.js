const myArrays = [0, 1, 2, 3, 4, 5]; //can be of sny type or mix of many type
console.log(myArrays[2]);
const myFriends = ["GP", "BJ", "AM", "DK", "JD"];
console.log(myFriends[3]);
//Other method for declaration of array
const newArray = new Array(1, 2, 3, 4, 5, 6);
console.log(newArray[3]);

//****Array Methods*****/

// myFriends.push("BJ-ta"); //add elements to the last in array
// myFriends.pop(); //Removes the last argument/elemrnt from the array

myFriends.unshift(9); //add element at the beginning of the array
console.log(myFriends);
myFriends.shift(); //removes the beginning element of the array
console.log(myFriends);

console.log(myFriends.includes(9));
console.log(myFriends.indexOf("BJ"));

let nextArray = myArrays.join();
console.log(myArrays);
console.log(`nextArray is a: ${typeof nextArray} Type `);
console.log(nextArray);

console.log("*********************************");

//slice , splice
//splice is also used to replace the elements or add the elements into the array
const array1 = ["A", "B", "C", "D", "E", "F", "G"];
const arraySlice = array1.slice(2, 4); //return the range from the starting index i.e 2 to ending range-1 i.e 3
console.log("Original-A:", array1);
console.log("Slice: ", arraySlice);
console.log("Original_AfterSlice-B:", array1);
const arraySplice = array1.splice(2, 4); //retuens section of 4 elements starting from index 2
console.log("Splice: ", arraySplice);
console.log("Original_AfterSplice-C:", array1);
console.log("#######################");
const array2 = ["a", "b", "C", "d", "e", "f", "g"];
console.log(array2.splice(1, 2, 10, 20)); //replace the splice section with 10 and 20
console.log(array2);
