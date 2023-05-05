import { postUser } from "../handlers/postUserHandlers";
import { Response, Request } from "express";
import { Email } from "../models/Email";

export const userPost = async (req: Request, res: Response) => { 
    try {
        const { name, nickname, email } = req.body;
        if(!name || !nickname || !email) throw new Error("Please send data");
        const newUser = await postUser(name, nickname, email);
        if (newUser) {
            const dbEmail = await Email.findOrCreate({ where: { email: email } });
            await newUser.$add('email', dbEmail[0])
            res.status(201).send({ message: `User ${newUser.name} created successfully` });
        }
    } catch (error) {
        res.status(404).send({error});
    }
}
