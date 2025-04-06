import mongoose from "mongoose";

const SiteSchema = new mongoose.Schema({
    name:{
        type: String, 
        required: true,
    },
    email:{
        type: String, 
        required: true,
        unique: true
    },    
    contact:{
        type: String, 
        required: true,
    },
});

export const SiteModel = mongoose.model('Site', SiteSchema);