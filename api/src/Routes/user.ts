import { Response, Request } from 'express';
import { getAllUser } from '../handlers/usersHandlers';

export const userGetAll = async (req: Request, res: Response) => {
	try {
		const userList = await getAllUser();
		if (!userList) throw new Error('No users found');
		return res.status(200).send(userList);
	} catch (error) {
		res.status(404).send({ error });
	}
};
