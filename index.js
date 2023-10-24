// const http = require('http')
const fs = require('fs');
const express = require('express');
const morgan  = require('morgan') // third party middle ware

const index = fs.readFileSync('index.html', 'utf-8');
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const products = data.products;

const port = 8080;
const server = express();

/* 
// to parse req.body - use middleware
server.use(express.json())

// static hosting
server.use(express.static('public'))
*/

server.use(express.static('public'))
// using MORGAN -- and not our costom made middleware
// server.use(morgan(':method :url :status  - :response-time ms'))
server.use(morgan('default'))


server.use(express.json())
// Auth Middleware
const auth = (req, res, next) => {
    next()
    // const q = req.query;
    // console.log(q);
    // if (+q.password === 123) {
    //     next();
    // } else {
    //     // res.sendStatus(401) // Unauthorized
    //     res.status(401).send('wrong password')
    // }
}

    





// 2 - ROUTER LEVEL MIDDLE WARE
server.get('/', auth, (req, res) => {
    console.log(url, ": no params ")
    res.json({type: 'GET'});
    // res.json(products);
})

server.get('/product', auth, (req, res) => {
    console.log(url, ": no params ")
    res.json({type: 'GET'});
})


server.post('/', auth, (req, res) => {
    res.json(products)
})

server.get('/product/:id', auth, (req, res) => {
    console.log(req.params)
    res.json({type: 'GET'});
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

/* 3 - ROUTER LEVEL MIDDLE WARE
// if you use auth here, ROUTER LEVEL MIDDLE WARE
// the auth will only and only for the following route
server.get('/', auth, (req, res) => {
    res.json(products);
})
*/

/* 4- BUILTIN MIDDLEWARE
Built-in middleware
Starting with version 4.x, Express no longer depends on Connect. The middleware functions that were previously included with Express are now in separate modules; see the list of middleware functions.

Express has the following built-in middleware functions:

-->express.static:
        serves static assets such as HTML files, images, and so on.
-->express.json: 
        parses incoming requests with JSON payloads. 
-->express.urlencoded:
        parses incoming requests with URL-encoded payloads. 
 */

/* POST method auth
server.use(express.json()) // parse body of req
// Auth Middleware
const auth = (req, res, next) => {
    const q = req.query;
    console.log(q);
    if (+req.body.password === 123) { 
        next();
    } else {
        // res.sendStatus(401) // Unauthorized
        res.status(401).send('wrong password')
    }
}
*/



