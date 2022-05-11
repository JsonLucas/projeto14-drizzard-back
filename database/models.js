import mongoose from 'mongoose';

export const User = mongoose.model('Users', {
    name: String, 
    email: String,
    password: String
});