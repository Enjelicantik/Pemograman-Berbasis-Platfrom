let http = require('http')
let port = 2000
const data = [
    {name: 'Enjel', class: 'TI23T'},
    {name: 'ila', class: 'TI23A'},
    {name: 'Mutia', class: 'TI23M'},
    {name: 'Rina', class: 'TI23C'},
    {name: 'Abeer', class: 'TI23D'},
    {name: 'Dila', class: 'TI23Z'},
]
let server = http.createServer((req, res)=>{
    let url = req.url
    // /Student => all data
    // /student/class => student with class parameter
    res.writeHead(200, {"content-type":"application/json"})

    if(url.startsWith('/student')){
        let urlpath = url.split("/")
        let classParam = urlpath [2]
        
        if(classParam){
            let datafilter = data.filter(student=>student.class==classParam)
            if(datafilter.length > 0){
                res.write(JSON.stringify(datafilter))
            }
            else{
            res.write("No Class")
            }
        }
    }
    res.end()
})

server.listen(port, ()=>{
    console.log(`server run at http://localhost:${port}`);
})