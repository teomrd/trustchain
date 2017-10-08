import BaseController from "./base.controller";
import User from "../models/user";
import Constants from "../config/constants";

class AuthController extends BaseController {
  login = async (req, res, next) => {
    const { username, password } = req.body;
    try {
      const user = await User.findOne({ username });

      if (!user || !user.authenticate(password)) {
        const err = new Error("Please verify your credentials.");
        err.status = 401;
        return next(err);
      }

      const token = user.generateToken();
      return res.status(200).jsend({
        user,
        token,
        expiresIn: Constants.security.sessionExpiration
      });
    } catch (err) {
      next(err);
    }
  };

  logout = (req, res, next) => {
    try {
      if (!req.currentUser) {
        const err = new Error("User not authenticated.");
        err.status = 404;
        return next(err);
      }
      return res.status(200).jsend({
        message: "User succesfully logged out!"
      });
    } catch (err) {
      next(err);
    }
  };
}

export default new AuthController();
