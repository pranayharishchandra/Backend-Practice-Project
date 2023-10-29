// <<<<<<< MVC
// const port = 8080;

// const express = require('express');
// const morgan  = require('morgan') // third party middle ware
// const server = express(); // never make 2 servers in a single app

// // routes
// const productRouter = require('./routes/product')
// const userRouter    = require('./routes/user')

// // body parser
// server.use(express.static('public'))
// server.use(morgan('default'))
// server.use(express.json())
// server.use('/products', productRouter.router)
// server.use('/users',    userRouter.router)


// // Error Handling Middleware
// server.use((err, req, res, next) => {
//     console.error(err);
//     res.status(500).send('Something went wrong: Internal Server Error');
// });

// server.listen(port, () => {
//     console.log('Server started');
// });
=======
// // <<<<<<< CH-4-REST-API-N-CRUD
// // // const http = require('http')
// // const fs = require('fs');
// // const express = require('express');
// // const morgan  = require('morgan') // third party middle ware

// // const index = fs.readFileSync('index.html', 'utf-8');
// // =======
// // const http = require('http');
// // const fs = require('fs');
// // const index = fs.readFileSync('index.html', 'utf-8');

// // >>>>>>> main
// const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
// const products = data.products;

// const port = 8080;
// // <<<<<<< CH-4-REST-API-N-CRUD
// // const server = express();
// // =======
// // >>>>>>> main

// const server = http.createServer((req, res) => {
//     console.log(req.url, req.method)

// <<<<<<< CH-4-REST-API-N-CRUD

// server.use(express.static('public'))

// server.use(morgan('default'))

// server.use(express.json())




// // 1  Create POST /products    C R U D
// server.post('/products', (req, res) => {
//     // reading the created product in the body
//     // POST -> body -> raw (json) -> [req.body]
//     const new_product = req.body
//     console.log(JSON.stringify(new_product))
//     products.push(new_product)
//     res.json(new_product)
// })


    

// // 2 Read GET 
// server.get('/products', (req, res) => {
//     res.json(products)
// })

// // 3 Update 
// // 3.1 PUT
// server.put('/products/:id', (req, res) => {
//     const id = +req.params.id
//     // const product = products.find(p => p.id === id)
//     const p_idx = products.findIndex((p) => p.id === id)
//     products.splice(p_idx, 1, {id:id,...req.body })
//     res.status(201).json(products);
// })

// // 3.2 PATCH
// server.patch('/products/:id', (req, res) => {
//     const id = +req.params.id
//     // const product = products.find(p => p.id === id)
//     const p_idx = products.findIndex((p) => p.id === id)
//     const product = products[p_idx]
//     products.splice(p_idx, 1, {id:id, ...product,...req.body })
//     res.status(201).json(products);
// })

// // 4 delete -  you can delete only 1 at a time in REST
// server.delete('/products/:id', (req, res) => {
//     const id = +req.params.id
//     // const product = products.find(p => p.id === id)
//     const p_idx = products.findIndex((p) => p.id === id)
//     const product = products[p_idx]
//     products.splice(p_idx, 1)
//     res.status(201).json(product) // sending the delted product
// })
// =======
//     if (req.url.startsWith('/product') && req.url.split('/')[2]) {
//         const id = req.url.split('/')[2]
    
//         if (!id) {
//             res.end('No product selected')
//         }   
    
//         const product = products.find((prd) => prd.id === +id)
//         res.setHeader('Content-Type', 'text/html')

//         if (product) {
//             let modifiedIndex = index.replace('**title**', product.title)
//                                      .replace('**price**', product.price)
//                                      .replace('**url**', product.thumbnail)
//                                      .replace('**rating**', product.rating)
//                                      .replace('**discount**', product.discountPercentage);
                                    
//             res.end(modifiedIndex);
//         } else {
//             res.writeHead(404, `product with id: ${id} Not Found`)
//             res.end(`product of "id: ${id}" don't exists`)
//         }
//         return
//     }


// >>>>>>> main

//     switch (req.url) {
//         case '/':
//         res.setHeader('Content-Type', 'text/html');
//         res.end(index); // index is string.. it will understand that 
//                         // this string can be html
//         break;

// <<<<<<< CH-4-REST-API-N-CRUD
// // Read GET /products/:id
// server.get('/products/:id', (req, res) => {
//     console.log(req.params)
//     const id = +req.params.id
//     const product = products.find((p) => p.id === id)
//     res.json(product)
// })

// =======
//     case '/api':
//       res.setHeader('Content-Type', 'application/json');
//       res.end(JSON.stringify(data));
//       break;
// >>>>>>> main

//     case '/product':
//         res.setHeader('Content-Type', 'text/html');

// <<<<<<< CH-4-REST-API-N-CRUD
// // Error Handling Middleware
// server.use((err, req, res, next) => {
//     console.error(err);
//     res.status(500).send('Something went wrong: Internal Server Error');
// });

// server.listen(port, () => {
//     console.log('Server started');
// });
// >>>>>>> main


    
// =======
//         console.log('case : /product')

//         const product = products[0]

//         if (product) {
//             let modifiedIndex = index.replace('**title**', product.title)
//                                      .replace('**price**', product.price)
//                                      .replace('**url**', product.thumbnail)
//                                      .replace('**rating**', product.rating)
//                                      .replace('**discount**', product.discountPercentage);
                                    
//             res.end(modifiedIndex);
//       } 
//       else {
//         res.writeHead(404, `product with id: ${id} Not Found`); 
//         res.end();
//       }
//       break;

//     default:
//         res.writeHead(404, 'case: default: Not Found'); // Corrected line
//         res.end();
//         break;
//     }
// });

// server.listen(port, () => {
//   console.log(`Server running, port: ${port}`);
// });
// >>>>>>> main

