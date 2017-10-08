import BaseController from "./base.controller";

class EthController extends BaseController {
  create = (req, res, next) => {
    res.jsend({
      some: "resp"
    });
  };
}

export default new EthController();
