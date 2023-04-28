import { Router } from 'express';
import { userGetAll } from './user';
const userRouter = Router();

userRouter.get('/users', userGetAll);

export default userRouter;
