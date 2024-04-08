// store – contains the store data including manager staff and address.
import mongoose from "mongoose";

const {Schema,model} = mongoose;

const StoreSchema = new Schema({
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

const Store = model("Store",StoreSchema);
export default Store;