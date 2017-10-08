import { Router } from "express";

import MetaController from "./controllers/meta.controller";
// import AuthController from "./controllers/auth.controller";
// import UsersController from "./controllers/users.controller";
import EthController from "./controllers/eth.controller";

// import authenticate from "./middleware/authenticate";
// import accessControl from "./middleware/access-control";
import errorHandler from "./middleware/error-handler";

const routes = new Router();

routes.get("/", MetaController.index);

// routes.get("/posts", EthController.search);
routes.post("/business", EthController.create);

routes.use(errorHandler);

export default routes;
