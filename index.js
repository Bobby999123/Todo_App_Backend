const express = require('express');

const app = express();

require("dotenv").config();

const PORT=process.env.PORT || 3000;
// console.log(PORT);

//middleware to parse json 
app.use(express.json());

//import routes 
const todoRoutes = require("./routes/todoRoute");

// moute the todo api add9
app.use("/api/v1",todoRoutes);


app.listen(PORT,()=>{
    console.log(`Server started at : ${PORT} `);
})

// connect to the database
const databaseConnect = require("./config/database");
databaseConnect();

//default route
app.get("/",(req,res)=>{
    res.send('<h1>This is Home Page</h1>');
})
