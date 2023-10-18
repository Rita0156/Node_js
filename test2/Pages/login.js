

const mongoose = require("mongoose");

const logschema = mongoose.Schema({
    email: String,
    password: String,
})

const LogModel = mongoose.model("regis", login_schema);


module.exports = {
    LogModel
}