const mongoose=require('mongoose');

require("dotenv").config();

const databaseConnect=()=>{
    mongoose.connect(process.env.MONGO_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>{
        console.log("Database connected Sucessfully");
    })
    .catch((error)=>{
        console.log("Error Reveived");
        console.error(error.message);
        process.exit(1);
    })


}

module.exports=databaseConnect;



