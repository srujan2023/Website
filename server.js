const express = require("express");
const app = express();

// BookRouter File Import Code
app.use("/api/books",require("./routes/bookRouter"));

//MangoDB import Code
const connectDB = require("./config/db");
connectDB();

//Json forment Code
app.use(express.json());

    
//Main Api Page
app.get("/",(req,res)=>{
    res.json({message:"Api server is runing"})
 });


app.listen(5000,()=>{
      console.log("server is runing is port 5000");
});


