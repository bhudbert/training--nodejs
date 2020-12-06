const http= require('http');

const server = http.createServer();

server.on('request',(req,res)=>{
        res.writeHead(200,{
            'content-type':'application/json'
        })
        const obj={
            myKey : 'myValue'
        }
        res.end(JSON.stringify(obj));
    }
)

server.listen(9090)
