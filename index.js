const express = require('express')
const app = express()
const helmet = require('helmet')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
let schema = require('./schema')
let mongoose = require("mongoose")
mongoose.Promise = global.Promise; mongoose.connect("mongodb://localhost:27017/lamons")
let Order = mongoose.model('Order', schema, "orderss")
let Line = mongoose.model('Line', schema, "lines")
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(helmet())
app.use(morgan('tiny'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/orders', (req, res) => {
    Order.find(function (err, orders) {
        res.json({ orders })
    })
})

app.get('/lines', (req, res) => {
    Line.find(function (err, lines) {
        res.json({ lines })
    })
})

app.get('/findByNumber/:orderNumber', (req, res) => {
    Order.find({ orderNumber: req.params.orderNumber }, (function (err, orders) {
        res.json({ orders })
    }))
})

app.get('/findLines/:orderNumber', (req, res) => {
    Line.find({ orderNumber: req.params.orderNumber }, (function (err, lines) {
        res.json({ lines })
    }))
})

app.get('/findByName/:name', (req, res) => {
    Order.find({ name: req.params.name }, (function (err, orders) {
        res.json({ orders })
    }))
})

app.post('/orders', (req, res) => {
    let data = new Order(req.body)
    data.save()
        .then(item => {
            res.send("Item saved to database");
        })
        .catch(err => {
            res.status(400).send("Unable to save to database");
        })
})

app.post('/lines', (req, res) => {
    let data = new Line(req.body)
    data.save()
        .then(item => {
            res.send("Item saved to database");
        })
        .catch(err => {
            res.status(400).send("Unable to save to database");
        })
})

app.put('/updateOrder/:orderNumber', (req, res) => {
    Order.update({ orderNumber: req.params.orderNumber }, req.body, function (err, orders) {
        if (err) {
            res.send(err)
        } else {
            res.send(orders)
        }
    })
})

app.put('/updateLine/:orderNumber', (req, res) => {
    Line.update({ orderNumber: req.params.orderNumber }, req.body, function (err, lines) {
        if (err) {
            res.send(err)
        } else {
            res.send(lines)
        }
    })
})

app.listen(PORT)
