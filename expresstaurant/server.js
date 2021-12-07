const express = require('express')
const path = require('path') //node native module

const { Restaurant } = require('./models/Restaurant')
const { Menu } = require('./models/Menu')
const { Item } = require('./models/Item')
const { Customer } = require('./models/Customer')
const { Orders } = require('./models/Orders')


const app = express()
const port = 3000

//points toward folder of static files
app.use(express.static(path.join(__dirname, 'public')))

//GET method on /flipcoin route responds with heads or tails
// app.get('/flipcoin', (req, res) => {
//     let coinflip = Math.floor(Math.random()*2)
//     if (coinflip == 1){
//         coinflip = 'Heads'
//     } else {
//         coinflip = 'Tails'
//     }
//     res.send(coinflip)
// })

//GET method on /restaurants route returns all restaurants
app.get('/restaurants', async (req,res) => {
    //find all instances of the Model Restaurant
    const allRestaurants = await Restaurant.findAll()
    //respond with allRestaurants as a json object
    res.json(allRestaurants)
})

//GET method on /menus route returns all menus
app.get('/menus', async (req,res) => {
    //find all instances of the Model Menu
    const allMenus = await Menu.findAll()
    //respond with allMenus as a json object
    res.json(allMenus)
})

// //GET method on /items route returns all items
// app.get('/items', async (req,res) => {
//     //find all instances of the Model Item
//     const allItems = await Item.findAll()
//     //respond with allItems as a json object
//     res.json(allItems)
// })

//GET method on /items route returns all items
app.get('/items/:id', async (req,res) => {
    //find all instances of the Model Item
    const thisItems = await Item.findByPk(req.params.id)
    //respond with allItems as a json object
    res.json(thisItems)
})

//GET method on /items route returns all customers
app.get('/customers', async (req,res) => {
    //find all instances of the Model Customer
    const allCustomers = await Customer.findAll()
    //respond with allItems as a json object
    res.json(allCustomers)
})

//GET method on /items route returns all orders
app.get('/orders', async (req,res) => {
    //find all instances of the Model Orders
    const allOrders = await Orders.findAll()
    //respond with allItems as a json object
    res.json(allOrders)
})

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})