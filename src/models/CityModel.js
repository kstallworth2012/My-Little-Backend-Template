// city – stores city names.
import mongoose from "mongoose"

const {Schema, model} = mongoose;

const  citySchema = new Schema({
      :{
        type:
        required:
    },
   
        :{
        type:
        required:
    },
        :{
        type:
        required:
    },
   
        :{
        type:
        required:
    },
        :{
        type:
        required:
    },
   
        :{
        type:
        required:
    },
        :{
        type:
        required:
    },
   
        :{
        type:
        required:
    }
});

 
const City = model("City",citySchema);
export default City;