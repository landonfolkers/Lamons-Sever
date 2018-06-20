let mongoose = require('mongoose')
let schema = require('./schema')
mongoose.Promise = global.Promise; mongoose.connect('mongodb://localhost:27017/lamons')
let operation = mongoose.model('Operation', schema, 'operations')

