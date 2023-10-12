import { Router } from "express";

import {
  accountDetailController,
  accountLoginController,
  accountLogoutController,
} from "../../../controllers";

// eslint-disable-next-line new-cap
const accountRouter = Router();
accountRouter.route("/login").post(accountLoginController);
accountRouter.route("/detail").get(accountDetailController);
accountRouter.route("/logout").delete(accountLogoutController);

export default accountRouter;
