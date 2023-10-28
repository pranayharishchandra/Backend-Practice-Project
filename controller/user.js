// const http = require('http')
const fs = require('fs');

const index = fs.readFileSync('index.html', 'utf-8');
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const users = data.users;

exports.createUser = (req, res) => {
    // POST -> body -> raw (json) -> [req.body]
    const new_product = req.body
    console.log(JSON.stringify(new_product))
    users.push(new_product)
    res.json(new_product)
}

exports.replaceUser = (req, res) => {
    const id = +req.params.id
    // const product = users.find(p => p.id === id)
    const p_idx = users.findIndex((p) => p.id === id)
    users.splice(p_idx, 1, {id:id,...req.body })
    res.status(201).json(users);
}

exports.updateUser = (req, res) => {
    const id = +req.params.id
    // const product = users.find(p => p.id === id)
    const p_idx = users.findIndex((p) => p.id === id)
    const product = users[p_idx]
    users.splice(p_idx, 1, {...product,...req.body })
    res.status(201).json(users);
}

exports.deleteUser = (req, res) => {
    const id = +req.params.id
    // const product = users.find(p => p.id === id)
    const p_idx = users.findIndex((p) => p.id === id)
    const product = users[p_idx]
    users.splice(p_idx, 1)
    res.status(201).json(product) // sending the delted product
}

exports.getUser = (req, res) => {
    console.log(req.params)
    const id = +req.params.id
    const product = users.find((p) => p.id === id)
    res.json(product)
}

exports.getAllUsers =  (req, res) => {
    res.json(users)
}
