import { Router } from "express";
import { register } from "../../controllers/userController";
import { errorHandler } from "../../error-handler";


const authRouter = Router()

authRouter.post('/register', errorHandler(register))

export {authRouter}