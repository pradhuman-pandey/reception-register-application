import { Router } from 'express';

const urlpatterns = new Map([]);

const api = Router();
urlpatterns.forEach((router, prefix) => {
  api.use(prefix, router);
});

export default api;
