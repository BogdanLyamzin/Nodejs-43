const http = require("http");

const server = http.createServer((request, response)=>{
    if(request.url === "/"){
        response.write("Main page");
    }
    else if(response.url === "/contacts"){
        response.write("Contacts page")
    }
    else {
        response.write("Not found")
    }
    response.end()
}).listen(3000);

// const server = http.createServer((request, response)=>{
//     console.log(request.url);
//     console.log(request.headers);
//     response.write("<h2>Response</h2>");
//     response.end();
// }).listen(3000, ()=>{
//     console.log("Server running")
// });