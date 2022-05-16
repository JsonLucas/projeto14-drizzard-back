import { User, Session, Games } from "./models.js";

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

export const deleteSession = async (userId) => {
    const logout = await Session.findOneAndDelete(userId);
    return logout;
}

export const getGames = async () => {
    const games = await Games.find({});
    return games;
}

export const searchGames = async (query) => {
    const games = await Games.find(query);
    return games;
}

export const getSingleGame = async (id) => {
    const game = await Games.findOne(id);
    return game;
}