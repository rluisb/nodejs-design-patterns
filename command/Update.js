const Command =  require("./Command")


class Update extends Command {
  constructor(title, content) {
   super()
   this.title = title
   this.content = content
   this.oldContent = ""
  }

  execute(db) {
   const getOldContent = db.getPost({ title: this.title })
   if (getOldContent.length === 0) {
     console.log("UPDATE FAILED: Post not found")
     return 
   } 

   this.oldContent = getOldContent[0].content
   this._update(db)
  }

  undo(db) {
    db.update(this.title, this.oldContent)
  }

  _update(db) {
   db.update(this.title, this.content)
  }
}

module.exports = Update
