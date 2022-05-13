import loginSchema from "../utils/schemas/loginSchema.js";

export default function authLogin(req, res, next) {
    const user = req.body;
    const validation = loginSchema.validate(user, { abortEarly: false });
  
    if (validation.error) {
        console.log("erro na validação dos dados")
        res.status(422).send(validation.error.details);
        return;
    }else{
        res.locals.body = user
        next();
    };
};