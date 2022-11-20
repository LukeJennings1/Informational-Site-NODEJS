console.log('started')

var http = require('http');
const server = http.createServer((request, response) => {
console.log('request made to server')
})

server.listen(3000, 'localHost', () => {
    console.log('listening for requests on port 3000')
}) // local host is like a domain name that takes us to a 'loop back' ip that points back to our own computer. 
  // the port number is a gateway or port that allows our server to communicate to. All applications that 
// access the internet on the computer (discord, skype etc) have a independent port number as they need to access
// the internet on thier own connection so that data doesnt get mixed. PORTS ARE "DOORs" to the computer and all
// applications need one. 