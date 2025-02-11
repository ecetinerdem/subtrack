import { Router} from "express";

const userRouter = Route();

userRouter.get('/', (req, res) => res.send({ title: 'GET all users'}));
userRouter.get('/:id', (req, res) => res.send({ title: 'GET user details'}));
userRouter.post('/', (req, res) => res.send({ title: 'POST new user'}));
userRouter.get('/:id', (req, res) => res.send({ title: 'UPDATE a user'}));
userRouter.delete('/:id', (req, res) => res.send({ title: 'DELETE a user'}));