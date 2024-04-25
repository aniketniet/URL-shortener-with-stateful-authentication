const mongoose = require('mongoose');

async function connect(){
    try{
        await mongoose.connect("mongodb+srv://aniket:aniket@cluster0.nacej66.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    } catch(err){
        console.log("Error connecting to MongoDB");
        console.log(err);
    }
}

module.exports = {connect};