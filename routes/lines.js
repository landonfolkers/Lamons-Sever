let mongoose = require('mongoose')
let schema = require('./schema')
mongoose.Promise = global.Promise; mongoose.connect('mongodb://localhost:27017/lamons')
let Line = mongoose.model('Line', schema, 'lines')

exports.getLines = function (req, res) {
    Line.find(function (err, lines) {
        res.json({ lines })
    })
}

exports.findLine = function (req, res) {
    Line.find({ orderNumber: req.params.orderNumber }, (function (err, lines) {
        res.json({ lines })
    }))
}

exports.postLine = function (req, res) {
    let data = new Line(req.body)
    data.save()
        .then(item => {
            res.send('Item saved to database');
        })
        .catch(err => {
            res.status(400).send('Unable to save to database');
        })
}

exports.updateLine = function (req, res) {
    Line.update({ orderNumber: req.params.orderNumber }, req.body, function (err, lines) {
        if (err) {
            res.send(err)
        } else {
            res.send(lines)
        }
    })
}