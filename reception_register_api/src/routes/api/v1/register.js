import { Router } from 'express';

import {
  createRegister,
  destoryRegister,
  listRegister,
  partialUpdateRegister,
  retrieveRegister,
  updateRegister,
} from '../../../controllers';

const register = Router();
register.route('/').get(listRegister).post(createRegister);
register
  .route('/:id')
  .get(retrieveRegister)
  .put(updateRegister)
  .patch(partialUpdateRegister)
  .delete(destoryRegister);

export default register;
