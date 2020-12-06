const http= require('http');


const server = http.createServer();

server.on('request',(req,res)=>{
        res.writeHead(200,{
            'content-type':'text/html'
        })
        res.end('' +
            '<html>' +
            '<head><title>MA premiere page</title></head>'+
            '<body><h1>Ma premiere page</h1>' +
            '<p>Mon premier paragraphe avec du contenu</p>'+

            '</body>'+
            '</html> ' +
            '');

    }
)


server.listen(9090)
