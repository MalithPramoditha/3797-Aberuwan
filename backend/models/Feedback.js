const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FeedbackSchema = new Schema({
    name : {
        type : String,
        required: true
    },
    bookName : {
        type : String,
        required: true
    },
    rate : {
        type : Number,
        required : true
    },
    comment : {
        type : String,
        required : true
    }
});

const Feedback = mongoose.model("Feedback", FeedbackSchema);
module.exports = Feedback;
