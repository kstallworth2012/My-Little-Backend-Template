// film – stores film data such as title, release year, length, rating, etc.
import mongoose from "mongoose";

const {Schema, model} = mongoose;


const filmSchema = new Schema({
    title:{
        type:String,
        required:true
    },
   
    description:{
        type:String,
        required:true
    },
    release_year:{
        type:String,
        required:true
    },
   
    language_id:{
        type:String
        required:false
    },
    rentalDuration:{
        type:Number,
        required:true
    },
   
    rentalRate:{
        type:Number,
        required:true
    },
        :{
        type:
        required:
    },
   
        :{
        type:
        required:
    }
     :{
        type:
        required:
    },
   
        :{
        type:
        required:
    }
                             
     :{
        type:
        required:
    },
   
        :{
        type:
        required:
    }
                             
});

const Film = model("Film",filmSchema)
export default Film;