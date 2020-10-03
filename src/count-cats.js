const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let newArr = [].concat(...backyard);
  let count = 0;
  for(let i = 0; i < newArr.length; i++){
  	if(newArr[i] === '^^'){
  		count += 1;
  	}
  }
  return count;
};
