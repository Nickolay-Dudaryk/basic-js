const alphabet = ["a", "b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

class VigenereCipheringMachine {

    constructor(isReverse) {
        if(isReverse === undefined){
            this.isReverse = true;
        }
        this.isReverse = isReverse;
    }

    encrypt(message, key) {
        if(!message || !key){
            throw new Error;
        }
    }

    decrypt(encryptedMessage, key) {
        if(!encryptedMessage || !key){
            throw new Error;
        }
    }
}

module.exports = VigenereCipheringMachine;
