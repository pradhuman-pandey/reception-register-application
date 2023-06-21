import { Router } from 'express';

import accounts from './accounts';
import register from './register';

const urlpatterns = new Map([
  ['/accounts', accounts],
  ['/register', register],
]);

const v1 = Router();
urlpatterns.forEach((router, prefix) => {
  v1.use(prefix, router);
});

export default v1;
