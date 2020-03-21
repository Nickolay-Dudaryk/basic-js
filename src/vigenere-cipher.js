const alphabet = ["a", "b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

class VigenereCipheringMachine {

    constructor(isReverse) {
        if(isReverse === undefined){
            this.isReverse = true;
        } else {
             this.isReverse = isReverse;
        }   
    }

    encrypt(message, key) {
        if(!message || !key) {
            throw new Error;
        }

        let encrypted = [];
        let arrMessage = message.toLowerCase().split('');
        let arrKey = key.toLowerCase().split('');
        let difference = [];

        for (let i = 0; i < arrMessage.length; i++) {
            if (alphabet.includes(arrMessage[i])) {
                if (arrKey.length < arrMessage.length) {
                    arrKey.push(arrKey[i]);
                }
                if (((alphabet.indexOf(arrMessage[i])) + (alphabet.indexOf(arrKey[i])) >= 26)) {
                    difference.push(((alphabet.indexOf(arrMessage[i])) + (alphabet.indexOf(arrKey[i]))) - 26);
                } else {
                    difference.push(((alphabet.indexOf(arrMessage[i])) + (alphabet.indexOf(arrKey[i]))));  
                } 
	            encrypted.push(alphabet[difference[i]]);
            } else {
                encrypted.push(arrMessage[i]);
                arrKey.splice(i, 0, ' ');
                difference.splice(i, 0, arrMessage[i]);
            }
        }
    return this.isReverse ? encrypted.join('').toUpperCase() : encrypted.reverse().join('').toUpperCase();
    }

    decrypt(encryptedMessage, key) {
        if (!encryptedMessage || !key) {
            throw new Error;
        }
        
        let decrypted = [];
        let arrEncrypted = encryptedMessage.toLowerCase().split('');
        let arrKey = key.toLowerCase().split('');
        let difference = [];

        for (let i = 0; i < arrEncrypted.length; i++) {
            if (alphabet.includes(arrEncrypted[i])) {
                if (arrKey.length < arrEncrypted.length) {
                    arrKey.push(arrKey[i]);
                }
                if (alphabet.indexOf(arrEncrypted[i]) < alphabet.indexOf(arrKey[i])) {
                    difference.push(((alphabet.indexOf(arrEncrypted[i])) - (alphabet.indexOf(arrKey[i]))) + 27);
                } else {
                    difference.push(((alphabet.indexOf(arrEncrypted[i])) - (alphabet.indexOf(arrKey[i]))) + 1);
                }
                decrypted.push(alphabet[difference[i] - 1]);
            } else {
                decrypted.push(arrEncrypted[i]);
                arrKey.splice(i, 0, ' ');
                difference.splice(i, 0, arrEncrypted[i]);
            }
        }
        return this.isReverse ? decrypted.join('').toUpperCase() : decrypted.reverse().join('').toUpperCase();
    }
}

module.exports = VigenereCipheringMachine;
