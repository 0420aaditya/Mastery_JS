//object singleton
const instaUser = new Object(); //singleton
const fbUser = {};
//both are empty object but 2nd one is non singleton object whereas 1st is singleton
instaUser.id = "E00304";
instaUser.name = "Samar";
instaUser.isLoggedIn = false;
//console.log(instaUser;

const regularUser = {
  email: "someone@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Aaditya",
      lastname: "Dhakal",
    },
  },
};

console.log(regularUser.fullname.userfullname.firstname); //accessing nested object
