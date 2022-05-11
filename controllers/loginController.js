import db from './../database/dbConnection.js';

export default async function login (req, res) {
    const user = res.locals.body;
    const hasUser = await db.collection('users').findOne({ email: user.email });
    
    if (hasUser && bcrypt.compareSync(user.password, hasUser.password)) {
        const token = uuid();
        await db.collection('sessions').insertOne({ token, userId: hasUser._id });
        res.send({ token: token });
    } else {
        res.sendStatus(401);
    };
};