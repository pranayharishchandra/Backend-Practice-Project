const express = require('express');
const morgan  = require('morgan') // third party middle ware
const server = express();


const port = 8080;

// body parser
server.use(express.static('public'))
server.use(morgan('default'))
server.use(express.json())


const productController = require('./controller/product')

const productRouter = express.Router()

// MVC model-view-controller

server.post('/products', productController.createProduct)
server.get('/products', productController.getAllProducts)
server.get('/products/:id', productController.getProduct)
server.put('/products/:id', productController.replaceProduct)
server.patch('/products/:id', productController.updateProduct)
server.delete('/products/:id', productController.deleteProduct)


// Error Handling Middleware
server.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send('Something went wrong: Internal Server Error');
});

server.listen(port, () => {
    console.log('Server started');
});


    

