const util = require('util');
const colors = require('colors');



const noel = new Date('December 25, 2020 15:00:00')

console.log(util.types.isDate(123).toString().red);
console.log(util.types.isDate(noel).toString().green);

console.log('Writing by Bruno HUDBERT'.rainbow);


// class MyEmmitter {
//     constructor(){
//         this.events={
//
//
//         }
//     }
//
//     on(event,listener){
//         this.events[event]=this.events[event] || []
//         this.events[event].push(listener);
//     }
//     emit(event){
//         if(this.events[event]){
//             this.events[event].forEach( (listener) =>  listener() )
//         }
//     }
// }
const MyEmmitter = require('events');
const emitter = new MyEmmitter();

emitter.on('FILE_READ',()=>{
    console.log('file wad read');
})


emitter.on('FILE_READ',()=>{
    console.log('should save file');
})

emitter.emit('FILE_READ')
