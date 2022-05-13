import mongoose from 'mongoose';

export const User = mongoose.model('Users', {
    name: String, 
    email: String,
    password: String
});

export const Session = mongoose.model('session', {
    userId: String,
    name: String,
    token: String
});