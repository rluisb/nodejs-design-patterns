const Db = require("./Db")
const {
 join
} = require("path")

//Database file
const dbFile = join("dbs.json")


//LowDB
const low = require("lowdb")
const FileSync = require("lowdb/adapters/FileSync")
const adapter = new FileSync(dbFile)
const dbs = low(adapter)

//Db Module Instance
const db = new Db(dbs)

db.init("users")
db.add({
  collection: "users",
  data: {
    name: "John Doe",
    age: 32
  }
})

console.log(db.get("users"))
