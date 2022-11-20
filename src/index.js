const laptopFactory = require('./factory/laptopFactory');

const macbookPro = laptopFactory.createComputer('MacbookPro', {cpu: 'Intel', gpu: 'Nvidia', memoryGigs: 4096});
const macbookMini = laptopFactory.createComputer('MacbookMini', {cpu: 'AMD', gpu: 'Nvidia', memoryGigs: 5096});

console.log(macbookMini, macbookPro)