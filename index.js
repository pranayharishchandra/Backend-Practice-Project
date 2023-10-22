const http = require('http')
const fs   = require('fs')
const index = fs.readFileSync('index.html', 'utf-8')

const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'))

const port = 8080


const product = data.products[0]

const server = http.createServer((req,res) => {
    console.log(req.url)

    switch (req.url){
        case '/':
            res.setHeader('Content-Type','text/html')
            res.end(index) 
            break
            
        case '/api':
            res.setHeader('Content-Type','application/json')
            res.end(data)
            break
        
        case '/product':
            res.setHeader('Content-Type','text/html')
            let modifiedIndex = index.replace('**title**', product.title)
                                     .replace('**url**', product.thumbnail)
                                     .replace('**price**', product.price)
                                     .replace('**rating**', product.rating)
                                     .replace('**discount**', product.discountPercentage)
            res.end(modifiedIndex)
            break
        
        default:
            // res.writeHead(404, {<headers>})
            res.writeHead(404, 'NT FOUND')
            res.end() // write noting
            break
    }
})




server.listen(port, () => {
    console.log(`Server running, port: ${port}`);
})










// const express = require('express') // to be writen after reading file
// const server = express() // app

// server.get('/', (req, res) => {
    //     // res.send('Hello, Express!');
    //     // res.end(JSON.stringify({type:'get'}))
//     res.end(JSON.stringify(data))

// });
  
// //  APU - Endpoint - Route
// server.put('/', (req, res) => {
//     res.json({type:'put'})
// });
  
// server.delete('/', (req, res) => {
//     res.json({type:'delete'})
// });
 
// server.patch('/', (req, res) => {
//     res.json({type:'patch'})
// });
 
// server.post('/', (req, res) => {
//     res.json({type:'post'})
// });
  

 






