import { User, Session } from "./models.js";

export const setUser = async (body) => {
    const createdUser = await User.create(body);
    return createdUser;
} 

export const getUser = async (body) => {
    const get = User.findOne(body);
    return get;
}

export const setSession = async (body) => {
    const session = await Session.create(body);
    return session;
}