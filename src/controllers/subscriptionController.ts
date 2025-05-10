import { Request, Response } from 'express';
import Subscription from '../models/Subscription';

export const createSubscription = async (req: Request, res: Response) => {
  try {
    const { user, plan } = req.body;
    const subscription = new Subscription({ user, plan });
    await subscription.save();
    res.status(201).json(subscription);
  } catch (err) {
    res.status(400).json({ error: (err as Error).message });
  }
};

