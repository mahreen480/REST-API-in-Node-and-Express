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

//Get users by id dynamically

// app.get("/api/users/:id",(req,res)=>{

//     const id = Number(req.params.id);
//     const user = users.find((user) => user.id === id);
//     return res.json(user);

// })

// app.post("/api/users",(req,res)=>{
//     //TODO: CREATE new user
//     return res.json({status :"Pending"})
// })

// app.patch("/api/users/:id",(req,res)=>{
//     //TODO: EDIT the user with id
// })

// app.delete("/api/users/:id",(req,res)=>{
//     //TODO: Delete the user with id
// })


app.route("/api/users/:id").get((req,res)=>{

        const id = Number(req.params.id);
        const user = users.find((user) => user.id === id);
        return res.json(user);
    
    }).patch((req,res)=>{
            //TODO: EDIT the user with id
        }).delete((req,res)=>{
                //TODO: Delete the user with id
            })


app.listen(PORT , ()=>console.log("Server Started"))
 