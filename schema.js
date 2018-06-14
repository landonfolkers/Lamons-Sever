let mongoose = require('mongoose')
let Order = new mongoose.Schema({
    "orderNumber": String,
    "name": String,
    "billTo": String,
    "shipTo": String,
    "PO": String,
    "takenBy": String,
    "originatingSite": String,
    "shipVia": String,
    "demandingSite": String,
    "orderDate": String,
    "comments": String,
    "notShipped": Number,
    "orderReady": false,

},
    { collection: 'orderss' }
)

let Line = new mongoose.Schema({
    "orderNumber": String,
    "job": String,
    "item": String,
    "qtyOrdered": String,
    "qtyReleased": String,
    "qtyShipped": Number,
    " shipped": false,
    " source": String,
    "lineNumber": String,
    "unitPrice": String,
    "unitCost": String,
    "imp": String,
    "lead": Number,
    "dueDate": String,
    "dueTime": String,
    "comments": String
},
    { collection: "lines" }
)

module.exports = Order, Line