const MacbookMini = require('./objects/MacbookMini');
const MacbookPro = require('./objects/MacbookPro');

const computer = {MacbookMini, MacbookPro};

module.exports = {
  createComputer(type, attributes) {
      if(!type in computer){
        throw Error(`Type ${type} does not exist inside the factory`);
      }
      const computerType = computer[type];

      return new computerType(attributes);
  }
}