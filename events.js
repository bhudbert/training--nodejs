

const MyEmmitter = require('events');
const emitter = new MyEmmitter();

emitter.on('FILE_READ',()=>{
    console.log('file wad read');
})


emitter.on('FILE_READ',()=>{
    console.log('should save file');
})

emitter.emit('FILE_READ')


