// staff – stores staff data.
import mongoose from "mongoose";
const StaffModel = mongoose.Schema({
   
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

export const Staff = mongoose.model("Staff",StaffModel);
export default Staff; 