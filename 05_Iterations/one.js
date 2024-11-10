//For Loop

for (let i = 1; i <= 10; i++) {
  //   console.log(i);
}

for (let i = 1; i <= 10; i++) {
  //console.log(`outer loop value :${i}`);

  for (let j = 1; j <= 10; j++) {
    //console.log(`outer loop value :${i} and inner loop value: ${j}`);
    //  console.log(i + "x" + j + "=" + i * j);
  }
}

let myArray = ["spiderman", "batman", "superman"];
for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  //  console.log(element);
}

//****************************** Break and continue ***********************************/

//continue will give a single chance

// for (let index = 1; index <= 20; index++) {
//   if (index == 5) {
//     console.log(`5 is detected`);
//     break;
//   }
//   console.log(`Value of index is: ${index}`);
// }
for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    console.log(`5 is detected`);
    continue;
  }
  console.log(`Value of index is: ${index}`);
}
