const fs = require ('fs');

// Creation d'un dossier

fs.mkdir('./myNewDir',{recurdive:true},(err)=>{
    console.log(err);
})

// Lecture d'un dossier

fs.readdir('./toReadDirectory',(err,files)=>{
    console.log(files);
})
