import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
   
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

const UserModels = mongoose.models.UserForm || mongoose.model("UserForm", userSchema);

export default UserModels;