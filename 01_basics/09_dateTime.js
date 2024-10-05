let myDate = new Date();
// console.log(myDate);
// console.log("\n");
// console.log(myDate.toString());
// console.log(myDate.toDateString()); //Output: Sat Oct 05 2024
// console.log(myDate.toISOString()); //Output:2024-10-05T15:03:45.837Z
// console.log(myDate.toJSON()); //Output:2024-10-05T15:03:45.837Z
// console.log(myDate.toLocaleDateString()); //Output: 10/5/2024
let createdDate = new Date(2024, 0, 21); //month starts with 0 in js i.e january
// let createdSecondDate = new Date(2023, 1, 21, 3, 20, 20, 10); //year,month,day,hour,minute,second,millisecond
// console.log(createdDate.toDateString());
// console.log(createdSecondDate.toLocaleString());
// let nextDate = new Date("2024-04-20"); //YY-MM-DD
// console.log(nextDate.toLocaleString());
// let next2Date = new Date("12-25-2020"); //MM-DD-YY
// console.log(next2Date.toLocaleDateString());

let myTimeStamp = Date.now();
console.log(myTimeStamp); // Output: 1728141627128
// this value need to be compared with the other value in same millisecond format to fetch the date in readable format
//console.log(createdDate.getTime());
console.log(Math.round(Date.now() / 1000)); //in second and math is for round off of value came in points

let newDate = new Date();
console.log(newDate.getFullYear());
console.log(
  newDate.toLocaleDateString("defult", {
    //to more customize date
    weekday: "short",
    hour: "numeric",
  })
);
