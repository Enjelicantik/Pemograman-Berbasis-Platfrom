let http = require('http') //http node module
let port = 2000;

let server = http.createServer((req, res)=>{
    let url = req.url
    console.log(url);
    res.writeHead(200,{
        'content-type':'application/json'
    })
    if(url=='/Student'){
        res.write("student Page")
    }
    else if(url=='/lecture'){
        res.write("Lucture Page")
    }
    else if(url=='/'){
        res.write("welcome to My REST API")
    }
    else{
        res.write("Wrong API Endpoint")
    }
    res.end()
})

server.listen(port, ()=>{
    console.log(`server run at http://localhost:${port}`);
})
