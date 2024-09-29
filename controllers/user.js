const User = require("../models/user")

async function HandelgetUserById(req,res){
    const user = await User.findById(req.params.id);
    //ya upper waliline likh lo ya neechy wali
    // const user = users.find((user) => user.id === id);
    if (!user) return res.status(404).json({error : "User not found"})
    return res.json(user);
}

async function HandelpatchUserById(req,res){
    await User.findById(req.params.id , {last_name});
    if (!User) return res.status(404).json({error : "User not found"})
    return res.json({status : "success"});
}
  
async function HandedeleteUserById(req,res){
    await User.findByIdAndDelete(req.params.id , {last_name});
    return res.json({status : "success"});
    
}

async function HandepostUserById(req,res){
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

    return res.status(201).json({msg: "successful creation" , id: result._id})

}

module.exports={
    HandelgetUserById,
    HandelpatchUserById,
     HandedeleteUserById,
     HandepostUserById
}