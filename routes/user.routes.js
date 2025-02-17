import { Router} from "express";
import { getUser, getUsers } from "../controllers/user.controller";

const userRouter = Router();

userRouter.get('/', getUsers);
userRouter.get('/:id', getUser);
userRouter.post('/', (req, res) => res.send({ title: 'POST new user'}));
userRouter.get('/:id', (req, res) => res.send({ title: 'UPDATE user'}));
userRouter.delete('/:id', (req, res) => res.send({ title: 'DELETE user'}));

export default userRouter;