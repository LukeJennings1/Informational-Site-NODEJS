const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/blog')

// store express app instance 
const app = express(); // creates the server

//listen for requests from the port in express
// app.listen(3000); // this needs to go in the .then of the database connection so that we only respond to the request
// once the database has conneceted; 

//connect to MongoDB Database using mongoose
DBURI = 'mongodb+srv://admin:password12345@projectcluster.pdzilih.mongodb.net/ProjectCluster?retryWrites=true&w=majority'
mongoose.connect(DBURI)
.then(() => {console.log('connected to db'), app.listen(3000);}) // .connect is asynchronous so we can put a .then and .catch
.catch((error) => {console.log(error)});


// middleware & static file access
app.use(express.static('/Users/mac1/Node.JS/Informational-Site-NODEJS/public'));

app.use(express.urlencoded()); // this takes our post request object and enables us to use it in a function below. 

// send data to the DB via mongoose 
app.get('/add', (req, res) => {
    const addTest = new User({
        name: 'Luke',
        age: '28'
    });
    addTest.save()
    .then((results) => {res.send(results)})
    .catch((error) => {console.log(error)})
})
app.get('/all-users', (req, res) => { // pulling all data from the database. 
    User.find()
        .then((result) => {res.send(result)})
    .catch((error) => {console.log(error)})
})
app.post('/add', (req, res) => {
    const newEntry = new User({
        name: req.body.name,
        age: req.body.age
    });
    newEntry.save()
    .then((result) => {
            res.redirect('/')
    })
    .catch((err) => {
        console.log(err)
    })
 console.log(req.body); // we can only use the req.body of a post request because we added the built in middleware app.use(express.urlencoded());
})


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
app.use((req,res) => { // .use is middleware targeted at all incoming sources so we need to put this at the bottom. 
    res.status(404).sendFile('./pages/404.html', {root:__dirname});
})
