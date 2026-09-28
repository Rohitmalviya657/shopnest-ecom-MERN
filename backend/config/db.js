const mongoose = require('mongoose');
const  dotenv=require("dotenv")
dotenv.config();

const connectDB = async () => {
  console.log("working or not");
  
  
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
  console.log("MongoDB Connected:", mongoose.connection.name);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    console.log("lmfsdlvkgg");
    
    process.exit(1);
  }
};

module.exports = connectDB;
