import {Router} from 'express';

import {
  createRegister,
  destoryRegister,
  listRegister,
  partialUpdateRegister,
  retrieveRegister,
  updateRegister,
} from '../../../controllers';

// eslint-disable-next-line new-cap
const register = Router();
register.route('/').get(listRegister).post(createRegister);
register
    .route('/:id')
    .get(retrieveRegister)
    .put(updateRegister)
    .patch(partialUpdateRegister)
    .delete(destoryRegister);

export default register;
