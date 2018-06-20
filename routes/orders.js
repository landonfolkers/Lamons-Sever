let mongoose = require('mongoose')
let schema = require('./schema')
mongoose.Promise = global.Promise; mongoose.connect('mongodb://localhost:27017/lamons')
let Order = mongoose.model('Order', schema, 'orderss')

exports.getOrders = function (req, res) {
    Order.find(function (err, orders) {
        res.json({ orders })
    })
}

exports.findByNumber = function (req, res) {
    Order.find({ orderNumber: req.params.orderNumber }, (function (err, orders) {
        res.json({ orders })
    }))
}

exports.findByName = function (req, res) {
    Order.find({ name: req.params.name }, (function (err, orders) {
        res.json({ orders })
    }))
}

exports.postOrder = function (req, res) {
    let data = new Order(req.body)
    data.save()
        .then(item => {
            res.send('Item saved to database');
        })
        .catch(err => {
            res.status(400).send('Unable to save to database');
        })
}

exports.updateOrder = function (req, res) {
    Order.update({ orderNumber: req.params.orderNumber }, req.body, function (err, orders) {
        if (err) {
            res.send(err)
        } else {
            res.send(orders)
        }
    })
}