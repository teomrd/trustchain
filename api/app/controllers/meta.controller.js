import BaseController from "./base.controller";
import Constants from "../config/constants";

class MetaController extends BaseController {
  index(req, res) {
    res.jsend(`Hello from ${Constants.name} version ${Constants.version}`);
  }
}

export default new MetaController();
