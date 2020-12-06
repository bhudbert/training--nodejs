const fs = require('fs');

fs.open('./file.txt','a+',(err,fd)=>{
        if(err) throw err;
        console.log(fd);
        const buffer = new Buffer.from(new ArrayBuffer((64),'utf-8'));
        fs.read(fd,buffer,0,64,0,(err,bytesRead,buffer)=>{
                //console.log({err,bytesRead,buffer});
                const myContent = buffer.toString();
                console.log(myContent);
            }
        )


        fs.write(fd,'Ajout de contenu a mon fichier',(err,written,str)=>{
                console.log('Ajout de : ');
                console.log({err,written,str});
                fs.close(fd,(err)=>{})
            }
        )
    }
)

fs.readFile('./file.txt',(err,data)=>{
    if (err) throw err;
    console.log(data.toString())

})

fs.appendFile('./file.txt','mes nouvelles données par appendFile',(err)=>{
    if(err) throw err;
})

//Copie asynchrone
fs.copyFile('./toReadDirectory/file1.txt','./toReadDirectory/file1_copy.txt',(err)=>{})

//Copie synchrone donc sans callback
fs.copyFileSync('./toReadDirectory/file1.txt','./toReadDirectory/file1_copy.txt')

fs.stat('./toReadDirectory/file1_copy.txt',(err,stats)=>{
    console.log(stats);
    console.log(stats.isFile());
    console.log(stats.isDirectory());
})
