const {sequelize} = require('./db')
//const {Restaurant, Menu, Item} = require('./models/index') //Q: WHY import these models from index vs. from each separate model file?
const {Restaurant} = require('./models/Restaurant')
const {Menu} = require('./models/Menu')
const {Item} = require('./models/Item')
const {Customer} = require('./models/Customer')
const {Orders} = require('./models/Orders')

//Q: Why do you think each object inside of the arrays are structured the way that they are?
//Q: What do you think will happen when we 'seed' this file?
const seedRestaurant = [
  {
    restaurantId : 1,
    name: 'Dennys',
    location: 'Mansfield',
    capacity: 50
  },
  {
    restaurantId : 2,
    name: 'Fire Tacos',
    location: 'Grand Prairie',
    capacity: 70
  },
  {
    restaurantId : 3,
    name: 'Jakes',
    location: 'Arlington',
    capacity: 60
  },
  
]


const seedMenu = [
  {
    category: 'Breakfast',
    menuType: 'Kids Menu'
  },
  {
    category: 'Lunch',
    menuType: 'Sandwiches'
  },
  {
    category: 'Dinner',
    menuType: 'Salads'
  },
]

const seedItem = [
  {
    mealName: 'Pancakes',
    quantity: 2,
    price: 4.99
  },
  {
    mealName: 'Philly',
    quantity: 1,
    price: 7.85
  },
  {
    mealName: 'Ceasars',
    quantity: 1,
    price: 9.73
  }
]

const seedCustomer = [
  {
    customerName: 'Nadege',
    orderID: 101,
    paymentType: 'Card'
  },
  {
    customerName: 'Pauline',
    orderID: 102,
    paymentType: 'Card'
  },
  {
    customerName: 'Joyce',
    orderID: 103,
    paymentType: 'Cash'
  }
]

const seedOrders = [
  {
    customerID: 'BC4',
    orderDate: '12/06/2021'
  },
  {
    customerID: 'BC5',
    orderDate: '12/06/2021'
  },
  {
    customerID: 'BC6',
    orderDate: '12/06/2021'
  }
]

//Q: Try to decifer the following function.
//Q: Why are we using async and await?
const seed = async () => {
  try {
    await sequelize.sync({force: true}) //deletes/drops all classes that already exist in the db which are the same with what is newly created. This kind of refreshes/updates the db while avoiding the existence of the same class many times and allows for new classes to be implanted into the db from seed.js.
    await Restaurant.bulkCreate(seedRestaurant, {validate: true})
    await Menu.bulkCreate(seedMenu, {validate: true})
    await Item.bulkCreate(seedItem, {validate: true})
    await Customer.bulkCreate(seedCustomer, {validate: true})
    await Orders.bulkCreate(seedOrders, {validate: true})
    console.log('Seeding success!')
    sequelize.close()
  } catch (error) {
    console.log('SOMETHING WENT WRONG WITH THE SEEDING: ', error)
  }
}

//Q: What is seed() returning?
seed()
    .then(() => {
      console.log('Seeding success!')
    })
    .catch(err => {
      console.error('Oh no! Something went wrong!')
      console.error(err)
    })