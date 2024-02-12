const express = require("express")
const app = express()
const todoRoute = require("./route")
require("dotenv").config()
const cors = require("cors")

const PORT = process.env.PORT

app.use(cors())
app.use(express.json())

app.use("/api/todos", todoRoute)

app.listen(PORT,() => {
    console.log("server listening")
})

// index.js