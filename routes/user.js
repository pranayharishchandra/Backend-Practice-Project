// callback functions for MVC are written in controller folder
const productController = require('../controller/user')
const express = require('express');
const router  = express.Router()

// server.use('/api', router)

// exports.router
router.post('/', productController.createUser)
    .get('/', productController.getAllUsers)
    .get('/:id', productController.getUser)
    .put('/:id', productController.replaceUser)
    .patch('/:id', productController.updateUser)
    .delete('/:id', productController.deleteUser);

exports.router = router



 