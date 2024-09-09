const express =  require("express");
const users = require("./MOCK_DATA.json")


const app = express()
const PORT = 8000;


//Route


//This is json format in mobile app
app.get("/api/users" , (req,res)=>{
    return res.json(users)
})


//this is the html format in web app

app.get("/users",(req,res)=>{
   const html = `
   <ul>
        ${users.map((users) => `<li>${users.first_name}</li>`).join("")}
   </ul>
   `

   res.send(html)
})


app.listen(PORT , ()=>console.log("Server Started"))
 