// film_category- stores the relationships between films and categories.
import mongoose from "mongoose";
const {Schema, model} = mongoose;

const FilmCategorySchema = new Schema({
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

const filmCategory = model("Film Category",FilmCategorySchema);
export default FilmCategory;