// const http = require('http')
const fs = require('fs');

const index = fs.readFileSync('index.html', 'utf-8');
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const products = data.products;

exports.createProduct = (req, res) => {
    // POST -> body -> raw (json) -> [req.body]
    const new_product = req.body
    console.log(JSON.stringify(new_product))
    products.push(new_product)
    res.json(new_product)
}

exports.replaceProduct = (req, res) => {
    const id = +req.params.id
    // const product = products.find(p => p.id === id)
    const p_idx = products.findIndex((p) => p.id === id)
    products.splice(p_idx, 1, {id:id,...req.body })
    res.status(201).json(products);
}

exports.updateProduct = (req, res) => {
    const id = +req.params.id
    // const product = products.find(p => p.id === id)
    const p_idx = products.findIndex((p) => p.id === id)
    const product = products[p_idx]
    products.splice(p_idx, 1, {...product,...req.body })
    res.status(201).json(products);
}

exports.deleteProduct = (req, res) => {
    const id = +req.params.id
    // const product = products.find(p => p.id === id)
    const p_idx = products.findIndex((p) => p.id === id)
    const product = products[p_idx]
    products.splice(p_idx, 1)
    res.status(201).json(product) // sending the delted product
}

exports.getProduct = (req, res) => {
    console.log(req.params)
    const id = +req.params.id
    const product = products.find((p) => p.id === id)
    res.json(product)
}

exports.getAllProducts =  (req, res) => {
    res.json(products)
}
