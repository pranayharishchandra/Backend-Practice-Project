const http = require('http')
const fs   = require('fs')
const index = fs.readFileSync('index.html', 'utf-8')
const data = fs.readFileSync('data.json', 'utf-8')


const server = http.createServer((req, res) => {
    console.log('server started')

    // res.setHeader('Content-Type', 'text/html'); // will be ignored
    // res.setHeader('Dummy', 'DummyValue'); 
    res.setHeader('Content-Type', 'application/json') 
    
    // you can send response only once for a single http request
    // const responseData = JSON.stringify(data) + '<h1>Hello, World!</h1>';
    // res.end(responseData);
    
    // since we are 
    res.end(data) // since we have read it in string only
                 // so simply sending the string so no need for parsing
    // res.end(JSON.stringify(data)) // if you would have parsed the data

})


server.listen(8080, () => {
    console.log('Server is listening on port 8080');
})
