import * as express from "express";
import { validInfoMiddleware } from "../middleware/validInfoMiddleware";
import { authMiddleware } from "../middleware/authMiddleware";
import { AuthController } from "../controller/AuthController";
import { check } from 'express-validator';


const router = express.Router();
const authController = new AuthController();
router.post("/register", [
  check('name', 'Name is required').not().isEmpty(),
  check('email', 'Please include a valid email').isEmail(),
  check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 })
], authController.registerUser);
// router.post("/register", validInfoMiddleware, authController.registerUser);
// router.post("/register", validInfoMiddleware, authController.registerUser);
// router.post("/register", validInfoMiddleware, authController.registerUser);
router.post("/login", [
  check('email', 'Please include a valid email').isEmail(),
  check('password', 'Password is required').exists()
], authController.loginUser)
// router.post("/login", validInfoMiddleware, authController.loginUser)
// router.post("/login", validInfoMiddleware, authController.loginUser)
// router.post("/login", validInfoMiddleware, authController.loginUser)

router.get("/me", authMiddleware, authController.loadCurrentUser)

export default router;