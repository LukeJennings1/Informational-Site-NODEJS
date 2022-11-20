var http = require('http');
const fs = require('fs')


const server = http.createServer((request, response) => {
console.log(request.url, request.method) // this is the request object. It is a bit like the event (e) object in that it lists
                                        // many details pertaining to the request made. In this case we are filtering it to just
                                       // the url and method. which is "/" and "GET" IE the home page and its a GET request. 
response.setHeader('Content-Type', 'text/html');


// response.write('test')
// response.end()
fs.readFile('/Users/mac1/Node.JS/Informational-Site-NODEJS/index.html', (err, data) => {
  if (err) {
    console.log('error')
    response.end()
  } else {
    response.write(data)
    response.end()
  }
})

});

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000')
}) // local host is like a domain name that takes us to a 'loop back' ip that points back to our own computer. 
  // the port number is a gateway or port that allows our server to communicate to. All applications that 
// access the internet on the computer (discord, skype etc) have a independent port number as they need to access
// the internet on thier own connection so that data doesnt get mixed. PORTS ARE "DOORs" to the computer and all
// applications need one. 