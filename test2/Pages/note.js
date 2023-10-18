


const mongoose = require("mongoose");

const noteSchema = mongoose.Schema({
    id:Number,
    Heading:String,
    Note:String,
    Tag:String,
    Key:String
})

const NoteModel=mongoose.model("note",noteSchema)

module.exports = {
    NoteModel
}