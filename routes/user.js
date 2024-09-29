const express = require ("express")

const router = express.Router();


//This is json format in mobile app
// app1.get("/api/users", (req, res) => {

// //     // Middleware 
// //     // console.log("I am in get route")
// //     // console.log(req.myUser)

// //     //HTTP headers
// //     // console.log(req.headers)
// //     // res.setHeader("X-myName","Mahreen")

//     return res.json(users)
// })


//this is the html format in web app

// router.get("/users", (req, res) => {
//     const html = `
//    <ul>
//         ${users.map((users) => `<li>${users.first_name}</li>`).join("")}
//    </ul>
//    `
//     res.send(html)
// })

//Get users by id dynamically

const {HandelgetUserById , HandelpatchUserById, HandedeleteUserById, HandepostUserById} = require("../controllers/user")

router
    .route("/:id")
    .get(HandelgetUserById)
    .patch(HandelpatchUserById)
    .delete(HandedeleteUserById)


router.post("/", HandepostUserById)


// app.patch("/api/users/:id",(req,res)=>{
//     //TODO: EDIT the user with id
// })   

// app.delete("/api/users/:id",(req,res)=>{
//     //TODO: Delete the user with id
// })


    module.exports = router;
