import { Response, Request, Router } from 'express';
const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.status(200).send('Get');
});

router.post('/', (req: Request, res: Response) => {
    res.status(200).send('Post');
});

export default router;