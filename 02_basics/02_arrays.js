const marvel_heros = ["Thor", "Ironman", "Spiderman"];
const dc_heros = ["Superman", "Flash", "Batman"];
//marvel_heros.push(dc_heros); //merge tow arrays i.e array inside array as the second array comes as the last element of the first array

//console.log(marvel_heros);
//console.log(marvel_heros.length);// 4
const all_heros = marvel_heros.concat(dc_heros); //concat returns a new array so this value is assigned to the new array "all_heros"
console.log(all_heros);

//*******Spread Operator*******/
const all_new_heros = [...marvel_heros, ...dc_heros]; //it is easily scalable than concat
console.log(all_new_heros);

const next_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const simplified_next_array = next_array.flat(Infinity); //flat takes the depth ; like array inside array inside array how many depth to go
console.log(simplified_next_array);

//************* Methods to convert any data into array ****************/

console.log(Array.isArray("Addy")); //is there array like this? Output:false
console.log(Array.from("Addy")); //convert the string 'Addy' into array
console.log(Array.from({ name: "Addy" })); //object can also be convertino array but need to be specified that either we want arrray of key or the value

let n1 = 100;
let n2 = 200;
let n3 = 300;

console.log(Array.of(n1, n2, n3)); //of returns a new array from the set of elements that may be obj,variable or anything Else
