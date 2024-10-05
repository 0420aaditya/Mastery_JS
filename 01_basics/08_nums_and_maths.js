const score = 500;
//console.log(score);
const balance = new Number(200);
//console.log(balance);
const num = 123.98;
//console.log(num.toPrecision(3)); //round off value
const hundred = 100000;
//console.log(hundred.toLocaleString("en-IN")); //commas in number as per the indian number system
// By default comma is given according to American number system

//********************************************* Maths ******************************************************/
// console.log(Math);
// console.log(Math.abs(-4)); //-ve lai +ve nikalni
// console.log(Math.round(223.56)); //roundoff: 224
// console.log(Math.ceil(223.56)); //mathi ko value linxa: 224
// console.log(Math.floor(223.56)); //tala ko value linxa: 223
// console.log(Math.min(2, 3, 4, 7)); //find the min valeu in array
// console.log(Math.max(12, 3, 48, 46)); //find the max valeu in array
// console.log(Math.random()); //value alyz comes in between 0 and 1
// console.log(Math.random() * 10 + 1);
//0.0 pani aauna sakxa so +1 gareko
const min = 1;
const max = 6;
let randomNumber = Math.round(Math.random() * (max - min + 1)) + min; //last ma min add gareko so that min value vanda tala ko value na aawos
//(max - min + 1) becoz max ra min bich ko val aawos ani 1 add gareko so that 0 na aawos
console.log(randomNumber);
