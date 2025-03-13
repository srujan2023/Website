const mongoose = require("mongoose");
const connectDB = async () => {
    try{
       const conn = await mongoose.connect(
        "mongodb+srv://nodeapi:esT0V5CEthaU7zqt@nodeapi-cluster.7pvxd.mongodb.net/bookstore-api");
       console.log(`MongoDB connected to ${conn.connection.host}`);
       }
    catch(error){
     console.log(error);
     process.exit(1);
     
    }
    
};
module.exports = connectDB;