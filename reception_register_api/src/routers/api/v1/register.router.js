import {Router} from 'express';

import {registerController} from '../../../controllers';
import {authenticate} from '../../../middlewares';

// eslint-disable-next-line new-cap
const registerRouter = Router();
registerRouter
    .route('/entries')
    .get(authenticate, registerController.listEntry)
    .post(authenticate, registerController.createEntry);
registerRouter
    .route('/entries/:id')
    .get(authenticate, registerController.retrieveEntry)
    .put(authenticate, registerController.updateEntry)
    .patch(authenticate, registerController.partialUpdateEntry)
    .delete(authenticate, registerController.destroyEntry);

export default registerRouter;
