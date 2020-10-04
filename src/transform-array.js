const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
	if (Array.isArray(arr) === false) throw new Error();

	let newArr = [];
	for(let i = 0; i < arr.length; i++){
	    if (arr[i] !== '--double-next' && 
	    	arr[i] !== '--double-prev' && 
	    	arr[i] !== '--discard-next' && 
	    	arr[i] !== '--discard-prev' && 
	    	arr[i] !== undefined) {
	      newArr.push(arr[i]);
	    }else if(arr[i] === '--discard-next' && arr[i + 1] !== undefined){
	    	i++
	    }else if(arr[i] === '--discard-prev' && arr[i-2] !== '--discard-next' && arr[i - 1] !== undefined){
	    	newArr.pop(arr[i - 1]);
	    }else if(arr[i] === '--double-next' && arr[i + 1] !== undefined){
	    	newArr.push(arr[i + 1]);
	    }else if(arr[i] === '--double-prev' && arr[i-2] !== '--discard-next' && arr[i - 1] !== undefined){
	    	newArr.push(arr[i - 1]);
	    }
	}
	return newArr;
};
