const mongoose = require('moongoose');

const todoSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
            maxLength:20,
        },
        description:{
            type:String,
            required:true,
            maxLength:100,
        },
        createdAt:{
            type:Date,
            required:true,
            default:Date.now(),
        },
        updatedAt:{
            type:Date,
            required:true,
            default:Date.now(),
        }

    }
);

module.exports=mongoose.model("Todo",todoSchema);