// const myNums = [1, 2, 3];

// const myTotal = myNums.reduce((accumulator, currentValue) => {
//   console.log(`${accumulator} and ${currentValue}`);

//   return accumulator + currentValue;
// }, 0);
// console.log(myTotal);

const shoppingCart = [
  {
    itemName: "Javascript",
    price: 299,
  },
  {
    itemName: "Python",
    price: 999,
  },
  {
    itemName: "MobileDev",
    price: 5999,
  },
  {
    itemName: "Data Science",
    price: 12999,
  },
];

const TotalCost = shoppingCart.reduce((acc, item) => {
  console.log(`acc is: ${acc} and curr is: ${item.price}`);

  return acc + item.price;
}, 0);

console.log(TotalCost);
