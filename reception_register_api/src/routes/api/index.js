import { Router } from 'express';

import v1 from './v1';

const urlpatterns = new Map([
  ['/v1', v1],
]);

const api = Router();
urlpatterns.forEach((router, prefix) => {
  api.use(prefix, router);
});

export default api;
