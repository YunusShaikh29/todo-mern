const express = require("express")
const app = express()
const todoRoute = require("./route")
require("dotenv").config()

const PORT = process.env.PORT

app.use(express.json())

app.use("/todos", todoRoute)

app.listen(PORT,() => {
    console.log("server listening")
})