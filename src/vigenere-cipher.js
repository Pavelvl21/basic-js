const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(type) {
    this.type = type;
    this.abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!')
    }

    const normalizedMessage = message.toUpperCase().split('');
    const normalizedKey = key.toUpperCase().split('');

    let count = 0;

    normalizedMessage.map((item, i) => {
      if (this.abc.includes(item)) {
        const index = (this.abc.indexOf(item) + this.abc.indexOf(normalizedKey[count % normalizedKey.length])) % 26;
        normalizedMessage[i] = this.abc[index];
        count += 1;
      }
    });

    return this.type === false ? normalizedMessage.reverse().join('') : normalizedMessage.join('');
  }

  decrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!')
    }

    const normalizedMessage = message.toUpperCase().split('');
    const normalizedKey = key.toUpperCase().split('');

    let count = 0;

    normalizedMessage.map((item, i) => {
      if (this.abc.includes(item)) {
        const index = (this.abc.indexOf(item) - this.abc.indexOf(normalizedKey[count % normalizedKey.length]) + 26) % 26;
        normalizedMessage[i] = this.abc[index];
        count += 1;
      }
    });

    return this.type === false ? normalizedMessage.reverse().join('') : normalizedMessage.join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
