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

router.get("/:id", (req, res) => {

    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);

})

router.post("/", async(req, res) => {
    //TODO: CREATE new user
    const body = req.body;
    if (!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title) {
        return res.status(400).json({ msg: "All Fields are required" })
    }

    const result = await UserModel.create({
        first_name: body.first_name,
        last_name: body.last_name,
        email :  body.email,
        gender:  body.gender,
        job_title :  body.job_title
    })

    console.log("result ",result)

    return res.status(201).json({msg: "successful creation"})

})


// app.patch("/api/users/:id",(req,res)=>{
//     //TODO: EDIT the user with id
// })   

// app.delete("/api/users/:id",(req,res)=>{
//     //TODO: Delete the user with id
// })


router
    .route("/:id")
    .get((req, res) => {
        const id = Number(req.params.id);
        const user = users.find((user) => user.id === id);



        return res.json(user);

    })
    .patch((req, res) => {


    }).delete((req, res) => {
        //TODO: Delete the user with id
    })

    module.exports = router;
