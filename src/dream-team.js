const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
	if(!Array.isArray(members)) return false;
	return members.filter(abb => typeof abb == "string").map(abb => abb.trim()[0].toUpperCase()).sort().join("");
};
