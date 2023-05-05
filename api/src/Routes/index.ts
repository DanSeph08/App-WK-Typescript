import { Router } from 'express';
import { userGetAll } from './getUsers';
import { userPost } from './postUser';
const userRouter = Router();

userRouter.get('/users', userGetAll);
userRouter.post('/user', userPost);

export default userRouter;
