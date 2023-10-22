// const http = require('http')
const fs   = require('fs')
const index = fs.readFileSync('index.html', 'utf-8')

const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'))

const express = require('express') // to be writen after reading file
const port = 8080
 
const server = express() // app


server.get('/', (req, res) => {
    // res.send('Hello, Express!');
    // res.end(JSON.stringify({type:'get'}))
    res.end(JSON.stringify(data))

});
  
//  APU - Endpoint - Route
server.put('/', (req, res) => {
    res.json({type:'put'})
});
  
server.delete('/', (req, res) => {
    res.json({type:'delete'})
});
 
server.patch('/', (req, res) => {
    res.json({type:'patch'})
});
 
server.post('/', (req, res) => {
    res.json({type:'post'})
});
  

 
server.listen(port, () => {
    console.log(`Server running, port: ${port}`);
})






