var http = require('http');
const fs = require('fs');
const path = require('path');


const server = http.createServer((request, response) => {
console.log(request.url) // this is the request object. It is a bit like the event (e) object in that it lists
                                        // many details pertaining to the request made. In this case we are filtering it to just
                                       // the url and method. which is "/" and "GET" IE the home page and its a GET request. 
response.setHeader('Content-Type', 'text/html');

let path = '/Users/mac1/Node.JS/Informational-Site-NODEJS/'
switch(request.url) { // This switch case takes care of the routing of the webpage. As we can see we have the base path to the 
    case('/'):       // folder that contains all the docs. We can then add the path with the assignment operator below to form
    path += 'index.html' // the full page. REMEMBER: BREAK TAKES US OUT OF THE SWITCH CASE. 
    break;
    case('/about'):
    path += 'about.html';
    break;
    case('/contactme'):
    path += 'contact-me.html';
    break;
    default:
        path += '404.html';
    break;
}

fs.readFile(path, (err, data) => {
    if (err) {                    // The File System (fs) reads the given file and then has two parameters.
      console.log('error')       // The error parameter which displays if an error has took place 
      response.end()            // and the data which is the html doc in this case. 
    } else {
      response.write(data)     // It then responds with either by ending the server connection with responce.end() on error
      response.end()          // or if writes the data IE it sends the html doc data as a response to the requester. 
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