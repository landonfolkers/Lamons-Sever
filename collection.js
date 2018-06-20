var MongoClient = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/"

MongoClient.connect(url, function(err, db) {
  if (err) throw err
  var dbo = db.db("lamons")
  dbo.createCollection("operations", function(err, res) {
    if (err) throw err
    console.log("Collection created!")
    db.close()
  })
})

/*var MongoClient = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/"

MongoClient.connect(url, function (err, db) {
  if (err) throw err
  var dbo = db.db("lamons")
  var myobj = [
    {
      orderNumber: "MS00021990",
      name: "CAT ENTERPRISES, INC",
      billTo: "CAT ENTERPRISES, INC",
      shipTo: "SCG LLC",
      PO: "T228-14762",
      takenBy: "AAh",
      originatingSite: "MINN",
      shipVia: "FEGP",
      demandingSite: "",
      orderDate: "06/01/2018",
      comments: "",
      notShipped: 0,
      orderReady: false,
    },
    {
      orderNumber: "MS00011880",
      name: "NUMBER ENTERPRISES, INC",
      billTo: "NUMBER ENTERPRISES, INC",
      shipTo: "SCG LLC",
      PO: "T228-14762",
      takenBy: "AAh",
      originatingSite: "MINN",
      shipVia: "FEGP",
      demandingSite: "",
      orderDate: "06/01/2018",
      comments: "",
      notShipped: 0,
      orderReady: false,
    },
    {
      orderNumber: "MS00045230",
      name: "DOG ENTERPRISES, INC",
      billTo: "DOG ENTERPRISES, INC",
      shipTo: "SCG LLC",
      PO: "T228-14762",
      takenBy: "AAh",
      originatingSite: "MINN",
      shipVia: "FEGP",
      demandingSite: "",
      orderDate: "06/01/2018",
      comments: "",
      notShipped: 0,
      orderReady: false,
    },
    {
      orderNumber: "MS00012340",
      name: "LANDON ENTERPRISES, INC",
      billTo: "LANDON ENTERPRISES, INC",
      shipTo: "SCG LLC",
      PO: "T228-14762",
      takenBy: "AAh",
      originatingSite: "MINN",
      shipVia: "FEGP",
      demandingSite: "",
      orderDate: "06/01/2018",
      comments: "",
      notShipped: 0,
      orderReady: false,
    },
    {
      orderNumber: "MS00000000",
      name: "YES ENTERPRISES, INC",
      billTo: "YES ENTERPRISES, INC",
      shipTo: "SCG LLC",
      PO: "T228-14762",
      takenBy: "AAh",
      originatingSite: "MINN",
      shipVia: "FEGP",
      demandingSite: "",
      orderDate: "06/01/2018",
      comments: "",
      notShipped: 0,
      orderReady: false,
      },

  ]
  dbo.collection("orderss").insertMany(myobj, function (err, res) {
    if (err) throw err
    console.log("All Documents Inserted")
    db.close()
  })
})**/