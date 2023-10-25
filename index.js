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


    

// Read GET 
server.get('/products', (req, res) => {
    res.json(products)
})

// Read GET /products/:id
server.get('/products/:id', (req, res) => {
    console.log(req.params)
    const id = +req.params.id
    const product = products.find((p) => p.id === id)
    res.json(product)
})




// Create POST /products 
server.post('/products', (req, res) => {
    // reading the created product in the body
    // POST -> body -> raw (json) -> [req.body]
    const new_product = req.body
    console.log(JSON.stringify(new_product))
    products.push(new_product)

    // Write the updated products array to the JSON file
    // fs.writeFileSync('data.json', JSON.stringify(products, null, 2));

    res.json(new_product)
})




// Error Handling Middleware
server.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send('Something went wrong: Internal Server Error');
});

server.listen(port, () => {
    console.log('Server started');
});


    

