import { Router } from "express";
import authorize from '../middlewares/auth.middleware'

const subscriptionRouter = Router();


subscriptionRouter.get('/', (req, res) => res.send({title: 'GET all subscriptions'}));

subscriptionRouter.get('/:id', (req, res) => res.send({title: 'Get subscription details'}));

subscriptionRouter.post('/', authorize, (req, res) => res.send({title: 'Create subscription'}));

subscriptionRouter.put('/:id', (req, res) => res.send({title: 'Update subscription'}));

subscriptionRouter.delete(':id', (req, res) => res.send({title: 'Delete subscription'}));

subscriptionRouter.get('/user/:id', (req, res) => res.send({title: 'Get all subscriptions for user'}));

subscriptionRouter.put('/:id/cancel', (req, res) => res.send({title: 'Cancel subscription'}));

subscriptionRouter.get('upcoming-renewals', (req, res) => res.send({title: 'Get upcoming renewals'}));


export default subscriptionRouter;