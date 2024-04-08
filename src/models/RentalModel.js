// rental – stores rental data.
import mongoose from "mongoose";
const {Schema, model} from mongoose;
const RentalModel  = new Schema({
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


const Rental = model("Rental",RentalModel);
export default Rental;