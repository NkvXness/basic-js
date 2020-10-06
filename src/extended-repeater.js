const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
	let{ 
		repeatTimes, 
		separator, 
		ddition, 
		additionRepeatTimes, 
		additionSeparator 
	} = options;
	let newStr = '';
	  for(let i = 1; i <= (options.repeatTimes || 1); i++){
    	newStr += str;
    	if(options.addition !== undefined){
    		for(let j = 1; j <= (options.additionRepeatTimes || 1); j++) {
    			newStr += options.addition;
    			if(j !== (options.additionRepeatTimes || 1)) newStr += (options.additionSeparator || '');
    		}
    	}
    	if(i !== (options.repeatTimes || 1)) newStr += (options.separator || '+');
    }
    return newStr;
};
  