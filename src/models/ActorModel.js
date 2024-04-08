// actor – stores actor data including first name and last name.
import mongoose from "mongoose";
const {Schema, model} = mongoose;

const actorSchema = new Schema({
    firstName:{
        type:String,
        required:true
    },
   
        lastName:{
        type:String,
        required:true
    },
        lastUpdate:{
        type:Date,
        required:false
    },
   
 
});

const Actor = model("Actor",actorSchema);
export default Actor;