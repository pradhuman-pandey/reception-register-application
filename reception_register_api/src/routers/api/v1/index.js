import {Router} from 'express';

import accountsRouter from '@/routers/api/v1/accounts.router';
import registerRouter from '@/routers/api/v1/register.router';

const urlPatterns = new Map([
  ['/accounts', accountsRouter],
  ['/register', registerRouter],
]);

// eslint-disable-next-line new-cap
const v1Router = Router();
urlPatterns.forEach((router, prefix) => {
  v1Router.use(prefix, router);
});

export default v1Router;
