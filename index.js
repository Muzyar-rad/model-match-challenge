const asyncResult = require("./asyncPortfolio");
const promiseResult = require("./promisePortfolio");

const solution = async () => {
  /*Put one of each in comment, asyncResult's asynchronous code is run with async/await
   and exceptions are handled with try/catch and promiseResult's asynchronous code is 
   run with Promise Objects*/

  // await asyncResult();
  promiseResult();
};

solution();
