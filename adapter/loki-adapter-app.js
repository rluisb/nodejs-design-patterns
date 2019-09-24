const Db = require("./Db")
const {
 join
} = require("path")

//Database file
const dbFile = join("dbs.json")

const loki = require("lokijs")
const LokiAdapter = require("./LokiAdapter")
const ldb = new loki(dbFile)
const LokiAdp = new LokiAdapter(ldb)

//Db Module Instance
const db = new Db(LokiAdp)

db.init("users")
db.add({
  collection: "users",
  data: {
    name: "John Doe",
    age: 32
  }
})

console.log(db.get("users"))
