const express = require('express');

// store express app instance 
const app = express(); // creates the server

//listen for requests from the port in express
app.listen(3000);

//routing in express
app.get('/', (req, res) => { //get requests in express. Req = request, Res = response
    // res.send('<h1>home page</h1>'); if we want to send html elements
    res.sendFile('./pages/index.html', {root:__dirname}); //send a file back from the get request
});
app.get('/about', (req, res) => {
    // res.send('<h1>Contact-Page</h1>')
    res.sendFile('/pages/about.html', {root:__dirname}); //send a file back from the get request
});
//redirects (if we want to redirect someone to another page) IE if someone types in /working? it will redirect to home
app.get('/working?',(req, res) => {
    res.redirect('/');
} )
//404 page (for urls that arnt linked / have no content)
app.use((req,res) => {
    res.status(404).sendFile('./pages/404.html', {root:__dirname});
})
