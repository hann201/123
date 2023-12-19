import { App } from "./firebase/App.js"
import { Database } from "./firebase/Database.js"

const app = await App.init()
const database = new Database(app)

// let response = await database.write("a", { a: 1, b: 2, c: 3, d: 4 });