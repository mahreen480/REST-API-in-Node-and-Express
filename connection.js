const { default: mongoose } = require("mongoose");

 

async function connectMongoDB(url){
    return 
    mongoose.connect(url)
    .then(() => {console.log("connected to database")})
    .catch((err) => console.log("error in database", err))
    
}

module.exports = connectMongoDB;

