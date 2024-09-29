const { default: mongoose } = require("mongoose");

const userSchema = new  mongoose.Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },
    gender: {
        type: String,
        required: true,
    },
    job_title: {
        type: String,
    },
});

const usermodel = mongoose.model("user", userSchema)



