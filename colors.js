const util = require('util');
const colors = require('colors');


const noel = new Date('December 25, 2020 15:00:00')

console.log(util.types.isDate(123).toString().red);
console.log(util.types.isDate(noel).toString().green);

console.log('Writing by Bruno HUDBERT'.rainbow);



