import exprss from "express";
import {
  handleLogout,
  handleRegister,
  handLogin,
} from "../controller/userController.js";

const router = exprss.Router();

router.post("/login", handLogin);
router.post("/register", handleRegister);
router.post("/logout", handleLogout);

export default router;
