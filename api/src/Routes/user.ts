import { Router } from 'express';
import { userGetAll } from '../handlers/usersHandlers';
const userRouter = Router();

userRouter.get('/', userGetAll);


export default userRouter;