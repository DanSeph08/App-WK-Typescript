import { postUser } from "../handlers/postUserHandlers";
import { Response, Request } from "express";

export const userPost = async (req: Request, res: Response) => { 
    try {
        const { name, nickname, email } = req.body;
        if(!name || !nickname || !email) throw new Error("Please send data");
        const newUser = await postUser(name, nickname, email);
        if (newUser) {
            res.status(201).send({ message: `User ${newUser.name} created successfully` });
        }
    } catch (error) {
        res.status(404).send({error});
    }
}
