import { Response, Request, Router } from 'express';
import { getAllUser } from '../controllers/usersControllers';

export const userGetAll = async (req: Request, res: Response) => {
    try {
        const userList = await getAllUser();
        if (userList.length) throw new Error('No users found');
        return res.status(200).send(userList);
    } catch (error) {
        res.status(404).send({error});
    }
};
