/*
show dbs

1=> create and use db 
use ecommerce 


2=> by default it's the following ($eq)
db.products.find({
    "title": "OPPOF19"
}) 
db.products.find({
    "title": {$eq: "OPPOF19"}
})

3=> both following are same
db.products.find({
    rating: {$gt: 4}
})
db.products.find({
    "rating":{$gt: 4}
})

4=> and / UNION... $and $or
db.products.find({
  $and: 
  [
    { rating: { $gt: 4 } },
    { rating: { $lt: 4.5 } },
    { id: { $gt: 1 } }
  ]
})

5=> sort and limit
db.products.find({
  $and: 
  [
    { rating: { $gt: 4 } },
    { rating: { $lt: 4.5 } },
    { id: { $gt: 1 } }
  ]
}).sort({
    price: -1
}).limit(2)

6 => constDocuments
db.products.countDocuments({
    $and: 
    [
        {'price': {$gt: 300}},
        {'price': {$lt: 600}}
    ]
})

7=> hiding _id
db.collectionName.find({ yourQueryHere }, { _id: 0 })
db.products.find({
    $and: 
    [
        {'price': {$gt: 300}},
        {'price': {$lt: 600}}
    ]
}, { _id: 0 })



================ UPDATE ================
1 => updateOne
// WRONG
db.products.updateOne({
    {id: 1},
    {$set: {price: 9999}
})

// CORRECT
db.products.updateOne(
    {id: 1},
    {$set: { price: 9999, discount: 1000 }}
)

// WRONG -> doesn't take it as default
db.products.updateOne(
    {id: 1},
    {price: 9999}
)

2 => upsert
db.products.updateOne(
    { id: 1 },
    {
        $set: { price: 9999, discount: 1000 }
    },
    { upsert: true }
) 

3 => updateOne / updateMany


================ REPLACE ================
// replaceOne, deletes all the arguements except _id
// nothing like replaceMany, since could be dangerous












*/