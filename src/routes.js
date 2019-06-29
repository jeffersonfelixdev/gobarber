import { Router } from 'express';

import User from './app/models/User';

const routes = new Router();

// Teste de criação de usuário
routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Jefferson Felix',
    email: 'jefferson@teste.com',
    password_hash: 'abcdefg',
  });

  return res.json(user);
});

export default routes;
