import mongoose, { Schema } from "mongoose";


const postSchema =  new Schema({
    title:{
        type:String,
        unique:true,
        require:true
    },
    desc:{
        type:String,
        unique:true,
        require:true
    },
    username:{
        type:String,
        require:true
    },
    img:{
        type:String,
        require:true
    },
    contect:{
        type:String,
        require:true
    },
    
},
{timestaps:true})


export default mongoose.model("User", postSchema)