const port = 8080;

const express = require('express');
const morgan  = require('morgan') // third party middle ware
const server = express(); // never make 2 servers in a single app

const productRouter = require('./routes/product')
const userRouter    = require('./routes/user')

// body parser
server.use(express.static('public'))
server.use(morgan('default'))
server.use(express.json())
server.use('/products', productRouter.router)
server.use('/users',    userRouter.router)


// Error Handling Middleware
server.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send('Something went wrong: Internal Server Error');
});

server.listen(port, () => {
    console.log('Server started');
});


    

