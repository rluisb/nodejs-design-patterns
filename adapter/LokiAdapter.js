const INIT = 'INIT'
const WRITE = 'WRITE'

class LokiAdapter {
  constructor(lokiDb) {
    this.lokiDb = lokiDb
    this.collection = null
    this.operation = null
  }

  defaults(obj) {
    this.collection = Object.keys(obj)[0]
    this.operation = INIT
    return this
  }

  get(collection) {
    this.collection = this.lokiDb.getCollection(collection)
    return this
  }

  push(data) {
   this.dataToPush = data
   this.operation = WRITE
   return this
  }

  value() {
    return this.collection.find()
  }

  write() {
    if (this.operation) {
      switch(this.operation){
        case INIT:
          this.lokiDb.addCollection(this.collection)
          this.collection = null
          this.operation = null
          break
        case WRITE:
          this.collection.insert(this.dataToPush)
          this.dataToPush = null
          this.collection = null
          this.operation = null 
          break
      }
      this.lokiDb.saveDatabase()
    }
    return this
  }
}

module.exports = LokiAdapter
