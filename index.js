const express = require("express");
const users = require("./MOCK_DATA.json")

const { type } = require("os");
const { strict } = require("assert");


//import routers
const userRouter = require("./routes/user")

//connection
const {connectMongoDB} = require("./connection");

connectMongoDB("mongodb+srv://mahreenmughal480:Abc123@database.f12uo.mongodb.net/?retryWrites=true&w=majority&appName=Database",{dbName: "RESTAPI"})

//import middlewares
const { logReqRes } = require("./middleware")

const app = express()
const PORT = 8000;

app.use(express.urlencoded({ extended: false }))

app.use(logReqRes("log.txt"))




//Route
app.use("/user", userRouter)


app.listen(PORT, () => console.log("Server Started"))
