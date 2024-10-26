//Immediate Invoke =d Function Expressio (IIFE)
(function chai() {
  console.log(`DB Connected`);
})();

//()() first parenthesis will wrap a function and second parenthesis will be for excution .
//And this is called Immediate Invoke Function Expression (IIFE)

((name) => {
  console.log(`DB Connected To ${name}`);
})("Addy");

//Here the function is arrow function with parameter name and is called at the execution() with argument
