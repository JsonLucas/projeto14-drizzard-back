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

export const Games = mongoose.model('games', {
    name: String,
    price: String,
    image: String,
    genres: Array,
    stock: Number
});

export const Orders = mongoose.model('Orders', {
    userId: String,
    items: Array,
    value: Number,
    destination: Object,
    paymentType: String,
    createdAt: String //coloca como string pq fica mais facil de fazer a formatação
});