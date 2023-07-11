const Todo = require("../models/todo");

exports.createTodo = async(req,res)=>{
    try{
        const {title, description}= req.body;  // extract title and description


        // create a new todo response object and insert in db
        const newTodo = await Todo.create({
            title,
            description
        });

        // res for success
        res.status(200).json({
            success:true,
            data:newTodo,
            message:"Entered Created data Successfully"
        });



    }
    catch(err){
        console.log(err);
        console.error(error);
        res.status(500).json({
            success:false,
            data:"Internal Server Error",
            message:err.message
        })
    }
}