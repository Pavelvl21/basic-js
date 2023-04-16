const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain = [...this.chain, `( ${value} )`];
    return this;
  },
  removeLink(position) {
    if (position > 0 && position <= this.getLength()) {
      this.chain = this.chain.filter((item, i) => (i + 1 !== position));
      return this;
    }

    this.chain = [];
    throw Error("You can\'t remove incorrect link!");
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    const result = this.chain.join('~~');
    this.chain = [];
    return result;
  }
};

module.exports = {
  chainMaker
};
