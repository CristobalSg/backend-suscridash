import { Request, Response } from 'express';
import User from '../models/User';

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    const user = new User({ name, email, password });
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: (err as Error).message });
  }
};

export const getUsers = async (req: Request, res: Response) => {
  try {
      const users = await User.find();
      res.status(200).json(users);
  } catch (error) {
      console.error("Error al obtener usuarios:", error);
    res.status(500).json({ message: 'Error al obtener los usuarios' });
  }
};
