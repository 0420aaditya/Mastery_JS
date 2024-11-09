//if

// if (true) {
//   console.log("The is condition is true");
// }

//########### Shorthand Notation ###################

// const balance = 1000;
// // if (balance > 500) console.log("Test"); //shorthand notation

// if (balance < 500) {
//   console.log("less than");
// } else if (balance < 700) {
//   console.log("less than 700");
// } else {
//   console.log("less than 1200");
// }

const userLoggedIn = true;
const debitCard = true;
const LoggedInFromGoogle = true;
const LoggedInFromEmail = false;

if (LoggedInFromGoogle || LoggedInFromEmail) {
  console.log("User Logged In ");
}
