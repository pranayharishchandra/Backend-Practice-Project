// const http = require('http')
const fs = require('fs');
const express = require('express');
const morgan  = require('morgan') // third party middle ware

const index = fs.readFileSync('index.html', 'utf-8');
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const products = data.products;

const port = 8080;
const server = express();



server.use(express.static('public'))

server.use(morgan('default'))

server.use(express.json())




// 1  Create POST /products    C R U D
server.post('/products', (req, res) => {
    // reading the created product in the body
    // POST -> body -> raw (json) -> [req.body]
    const new_product = req.body
    console.log(JSON.stringify(new_product))
    products.push(new_product)
    res.json(new_product)
})


    

// 2 Read GET 
server.get('/products', (req, res) => {
    res.json(products)
})

// 3 Update 
server.put('./products/:id', (req, res) => {
    const id = +req.params.id
    const product = products.find(p => p.id === id)
    res.json(product)
})

// 4 delete


// Read GET /products/:id
server.get('/products/:id', (req, res) => {
    console.log(req.params)
    const id = +req.params.id
    const product = products.find((p) => p.id === id)
    res.json(product)
})



// Error Handling Middleware
server.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send('Something went wrong: Internal Server Error');
});

server.listen(port, () => {
    console.log('Server started');
});


    

