const express = require("express");
const users = require("./MOCK_DATA.json")

const { type } = require("os");
const { strict } = require("assert");


//import connection
const { connectMongoDB } = require("./connection");

//import middlewares
const { logReqRes } = require("./middleware")

//import routers
const userRouter = require("./routes/user")

const app = express()
const PORT = 8000;

//connection
connectMongoDB("mongodb+srv://mahreenmughal480:Abc123@database.f12uo.mongodb.net/?retryWrites=true&w=majority&appName=Database",{dbName: "RESTAPI"})

//middleware - Plugins
app.use(express.urlencoded({ extended: false }))
app.use(logReqRes("log.txt"))

//Routes
app.use("/user", userRouter)

//Listen on PORT
app.listen(PORT, () => console.log("Server Started"))
