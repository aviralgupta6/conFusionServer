const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);

const leaderSchema=new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    image:{
        type:String,
        required:true
    },
    featured:{
        type:Boolean,
        default:false
    },
    abbr:{
        type:String,
        required:true
    }
})

var Leaders = mongoose.model('Leader', leaderSchema);

module.exports = Leaders;