const fs= require('fs');
const http= require('http');

// Server web avec mini routing

const server = http.createServer();

server.on('request',(req,res)=>{

        const url =req.url;
        let fileContent;

        if (url === '/index' || url === '/'){
            res.writeHead(200,{
                'content-type':'text/html'
            })
           fileContent = fs.readFileSync('./html/index.html','utf-8')
        }
        else if (url === '/info'){
            res.writeHead(200,{
                'content-type':'text/html'
            })
            fileContent = fs.readFileSync('./html/info.html','utf-8')
        }
        else {
            res.writeHead(404,{
                'content-type':'text/html'
            })
            fileContent = fs.readFileSync('./html/404.html','utf-8')
        }


    res.end(fileContent);

    }
)


server.listen(9090)
