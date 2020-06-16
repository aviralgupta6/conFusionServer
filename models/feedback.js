const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);

const feedbackSchema =new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    telnum:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required:true
    },
    agree:{
        type:Boolean,
        required:true,
        default:true
    },
    contacttype:{
        type:String
    },
    message:{
        type:String,
        required:true
    },
},
{
    timestamps:true
});

var Feedbacks= mongoose.model('Feedback', feedbackSchema);

module.exports = Feedbacks;