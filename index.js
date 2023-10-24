// const http = require('http')
const fs = require('fs');
const express = require('express');

const index = fs.readFileSync('index.html', 'utf-8');
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const products = data.products;

const port = 8080;
const server = express();

// to parse req.body - use middleware
server.use(express.json())

// static hosting
server.use(express.static('public'))




// Auth Middleware
const auth = (req, res, next) => {
    const q = req.query;
    console.log(q);
    // checks the password sent in the body -- post method
    if (+req.body.password === 123) { 
    // if (+q.password === 123) {
        next();
    } else {
        // res.sendStatus(401) // Unauthorized
        res.status(401).send('wrong password')
    }
}



// 2 - ROUTER LEVEL MIDDLE WARE
server.get('/', auth, (req, res) => {
    res.json(products);
})

server.post('/', auth, (req, res) => {
    res.json(products)
})



// 3 - Error Handling Middleware
server.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send('Something went wrong: Internal Server Error');
});

server.listen(port, () => {
    console.log('Server started');
});


    

/*  HTTP METHODS -- endpoints
// **API** - Endpoing or Route 
// create -- create a new post
server.post('/', (req, res) => {
    res.json(products)
})
    
// read
server.get('/', (req, res) => {
    res.json(products)
})

// update -- put complete new info or path
server.put('/', (req, res) => {
    res.json(products)
})
server.patch('/', (req, res) => {
    res.json(products)
})

// delete
server.delete('/', (req, res) => {
    res.json(products)
})
*/

/* server.get
server.get('/', (req, res) => {
    res.status(201).send('hello from get server')
    // this send req below will not run
    res.send('<h1>hello from get server</h1>') 
})
*/

/* Auth Middleware
// Auth Middleware
const auth = (req, res, next) => {
    const q = req.query;
    console.log(q);

    if (+q.password === 123) {
        next();
    } else {
        res.sendStatus(401); // Unauthorized
    }
}
*/

/* auth used in global applicatoin
// auth used in global applicatoin
server.use(auth)
*/

/* CODES WITH MEANING
    1) 500 
        server has encountered an unexpected condition or 
        configuration problem that prevents it from fulfilling the
        request made by the browser or client.
    2)
*/

/* Logger Middleware
// 1 - APP LEVEL MIDDLEWARE, Logger Middleware
server.use((req, res, next) => {
    console.log(req.method, req.ip, req.hostname, new Date(), req.get('User-Agent'));
    next();
});
*/

/* ROUTER LEVEL MIDDLE WARE
// if you use auth here, ROUTER LEVEL MIDDLE WARE
// the auth will only and only for the following route
server.get('/', auth, (req, res) => {
    res.json(products);
})
*/







