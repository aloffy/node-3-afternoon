require('dotenv').config()
const express = require('express')
const massive = require('massive')
const productCtrl = require('./productCtrl')

const app = express()
const {SERVER_PORT, CONNECTION_STRING} = process.env

app.use(express.json())

massive(CONNECTION_STRING).then(dbObj => {
  app.set('db', dbObj)
}).catch(err => console.log(err))

app.get('/api/products', productCtrl.getAll)
app.get('/api/products/:id', productCtrl.getOne)
app.post('/api/products', productCtrl.create)
app.put('/api/products/:id', productCtrl.update)
app.delete('/api/products/:id', productCtrl.delete)

app.listen(SERVER_PORT, () => console.log(`Server running on port ${SERVER_PORT}`))