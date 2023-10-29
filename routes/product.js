// callback functions for MVC are written in controller folder
const productController = require('../controller/product')
const express = require('express');
const router  = express.Router()

// server.use('/api', router)

// exports.router
router.post('/', productController.createProduct)
    .get('/', productController.getAllProducts)
    .get('/:id', productController.getProduct)
    .put('/:id', productController.replaceProduct)
    .patch('/:id', productController.updateProduct)
    .delete('/:id', productController.deleteProduct);

exports.router = router



 