// address – stores address data for staff and customers
import mongoose from "mongoose"
const {Schema,model} = Mongoose;

const  AddressModel = new Schema({
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

const Address = model("Address",AddressModel);
export default Address;