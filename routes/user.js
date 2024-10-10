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

const {
    HandelgetUserById , 
    HandelpatchUserById,
    HandedeleteUserById,
    HandepostUserById,
    handleGetUser
    } = require("../controllers/user")

router
    .route("/")
    .get(handleGetUser)
    .post(HandepostUserById);

router
    .route("/:id")
    .get(HandelgetUserById)
    .patch(HandelpatchUserById)
    .delete(HandedeleteUserById);

    module.exports = router;
