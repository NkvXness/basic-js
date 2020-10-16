const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

	constructor(machineMode){
	    this.machineMode = machineMode;
	    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	}

	encrypt(message, key) {
		if (!message || !key) throw new Error();
		message = this.machineMode === false ? message.split('').reverse().join('') : message;
		message = message.toUpperCase();
		key = key.toUpperCase();
		let encryptText = "";
		let idxKey = 0;

		for(let idxInput = 0; idxInput <= message.length - 1; idxInput++){
			let startInput = this.alphabet.indexOf(message[idxInput]);
			if(startInput === -1){
				encryptText += message[idxInput];
			}else{
				let character = (startInput + this.alphabet.indexOf(key[idxKey])) % this.alphabet.length;
				encryptText += this.alphabet[character];
				if(idxKey === key.length - 1) idxKey = 0;
				else idxKey += 1;
			}	
		}
		return encryptText;
	}

	decrypt(message, key) {
		if (!message || !key) throw new Error();
		message = this.machineMode === false ? message.split('').reverse().join('') : message;
		message = message.toUpperCase();
		key = key.toUpperCase();
		let decryptText = "";
		let idxKey = 0;

		for(let idxInput = 0; idxInput <= message.length - 1; idxInput++){
			let startInput = this.alphabet.indexOf(message[idxInput]);
			if(startInput === -1){
				decryptText += message[idxInput];
			}else{
				let character = (startInput + this.alphabet.length - this.alphabet.indexOf(key[idxKey])) % this.alphabet.length;
				decryptText += this.alphabet[character];
				if(idxKey === key.length - 1) idxKey = 0;
				else idxKey += 1;				
			}			
		}
		return decryptText;
	}
}

module.exports = VigenereCipheringMachine;
