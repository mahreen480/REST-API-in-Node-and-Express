const fs = require("fs");

function logReqRes(filename){
    return(req,res,next)=> {
        fs.appendFile(filename, `\n${Date.now()}:${req.ip}:${req.method}:${req.path}\n`, (err, res) => {
            next();
        })
    }
}


//For POST METHOD in POSTMAN
//MiddleWare - Plugin


// app1.use((req, res, next) => {
//     console.log("Middleware 2", req.myUser);
//     // // res.json({mgs:"hello middleware"})
//     // next();

    

// })

module.exports = {
    logReqRes
};