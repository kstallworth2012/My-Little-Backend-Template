// film_actor – stores the relationships between films and actors.
import mongoose from "mongoose";

const {Schema, model} = mongoose;

const filmActorSchema = new Schema({
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

const FilmActor = model("Film Actor",filmActorSchema);
export default FilmActor;