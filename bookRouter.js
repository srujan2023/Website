const express = require("express");
const router = express.Router();

const Book = require("../models/bookModels")

//List All Books
router.get("/",(req,res)=>{
    res.json({message:"list a All books"});
});


//List Single Book
router.get("/:booksId",(req,res)=>{
    res.json({message:"list a single book"});
});


//Create New Book
router.post("/",async(req,res)=>{ 
    console.log(req.body);  

   try {
    const book = await Book.create(req.body);
    res.json({book:book});
       } 

   catch (error) {
    console.log(error);
    res.json({message:"error"});
    
   }
});


//Update a Book
router.put("/:booksId",(req,res)=>{
    res.json({message:"Updateing book"});
});


//Delete a Book
router.delete("/:booksId",(req,res)=>{
    res.json({message:"delete book"});
});


module.exports = router;