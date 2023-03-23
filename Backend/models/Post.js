const mongoose = require("mongoose")

const { Schema } = mongoose;


const PostSchema = new Schema({
    userId: {
        type:String,
        require:true
    },
    desc: {
        type: String,
        max: 500
    },
    img: {
        type:String
    },
    likes:{
        type:Array,
        default:[]
    }
},
{timestamps: true});

module.exports = mongoose.model("Post", PostSchema)