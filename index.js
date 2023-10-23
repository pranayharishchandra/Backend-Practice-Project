const http = require('http');
const fs = require('fs');
const index = fs.readFileSync('index.html', 'utf-8');

const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const products = data.products;

const port = 8080;

const server = http.createServer((req, res) => {
    console.log(req.url, req.method)

    if (req.url.startsWith('/product') && req.url.split('/')[2]) {
        const id = req.url.split('/')[2]
    
        if (!id) {
            res.end('No product selected')
        }   
    
        const product = products.find((prd) => prd.id === +id)
        res.setHeader('Content-Type', 'text/html')

        if (product) {
            let modifiedIndex = index.replace('**title**', product.title)
                                     .replace('**price**', product.price)
                                     .replace('**url**', product.thumbnail)
                                     .replace('**rating**', product.rating)
                                     .replace('**discount**', product.discountPercentage);
                                    
            res.end(modifiedIndex);
        } else {
            res.writeHead(404, `product with id: ${id} Not Found`)
            res.end(`product of "id: ${id}" don't exists`)
        }
        return
    }



    switch (req.url) {
        case '/':
        res.setHeader('Content-Type', 'text/html');
        res.end(index); // index is string.. it will understand that 
                        // this string can be html
        break;

    case '/api':
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(data));
      break;

    case '/product':
        res.setHeader('Content-Type', 'text/html');

        console.log('case : /product')

        const product = products[0]

        if (product) {
            let modifiedIndex = index.replace('**title**', product.title)
                                     .replace('**price**', product.price)
                                     .replace('**url**', product.thumbnail)
                                     .replace('**rating**', product.rating)
                                     .replace('**discount**', product.discountPercentage);
                                    
            res.end(modifiedIndex);
      } 
      else {
        res.writeHead(404, `product with id: ${id} Not Found`); 
        res.end();
      }
      break;

    default:
        res.writeHead(404, 'case: default: Not Found'); // Corrected line
        res.end();
        break;
    }
});

server.listen(port, () => {
  console.log(`Server running, port: ${port}`);
});

