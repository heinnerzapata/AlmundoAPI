'use strict'

const express = require('express')
const bodyParser =  require('body-parser')

const app = express()
const port = process.env.PORT ||3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const Hotel = require('./Models/Hotel.js')
const DAL = require('./DAL/Dal.js')
// API

/*
app.get ('/hola:name', (req, res) => {
  res.send({ message: `Hola mundo ${req.params.name}` })
})
*/

app.get('/hotels', (req, res) => {

  DAL.getHotels()
  .then(function (result){
    console.log(result)
    res.status(200).send({ hotels: result })
  })
  .catch(function (err){
    console.log(err)
    res.status(500).send({ err: 'Server error' })
  })

})

app.get('/hotels:hotelId', (req, res) => {

})

app.post('/hotels', (req, res) => {
  console.log(req.body)
  res.status(200).send({message: 'Hotel was received'})
})

app.put('/hotels:hotelId', (req, res) => {

})

app.delete('/hotels:hotelId', (req, res) => {

})

app.listen(port, () => {
  console.log(`API REST running on http://localhost:${port}`)
})
