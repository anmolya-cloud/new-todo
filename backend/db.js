const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://anmolyagik2000:8dh0LTki7CD5Br6f@cluster0.jpvwls6.mongodb.net");
const  todoSchema = mongoose.Schema({
    tittle: String,
    description: String,
    completed: Boolean,
})

const todo = mongoose.model('todos',todoSchema);
module.exports ={
    todo
}

