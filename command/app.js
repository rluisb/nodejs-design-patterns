const Invoker = require("./Invoker")
const Db = require("./Database")
const Post = require("./Post")
const Update = require("./Update")
const View = require("./View")

const Blog = new Invoker(Db)

Blog.execute(new Post("Mys First Post", "Hello evryone, this is my first post!"))

Blog.execute(new Post("About Design Patterns", "So, i'm building a course on design patterns!"))

Blog.execute(new Update("Mys First Post", "Updated Post"))
Blog.undo()

Blog.execute(new View({}))
