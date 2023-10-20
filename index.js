// const http = require('http')
const fs   = require('fs')
const index = fs.readFileSync('index.html', 'utf-8')

const data = JONS.parse(fs.readFileSync('data.json', 'utf-8'))

const express = require('express') // to be writen after reading file
const port = 8080

const server = express() // app


server.get('/', (req, res) => {
    res.send('Hello, Express!');
});
  


server.listen(port, () => {
    console.log(`Server running, port: ${port}`);
})






