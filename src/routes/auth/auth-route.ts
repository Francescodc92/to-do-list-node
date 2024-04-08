import { Router } from "express";
import { login, register } from "../../controllers/userController";
import { errorHandler } from "../../error-handler";


const authRouter = Router()

authRouter.post('/register', errorHandler(register))
authRouter.post('/login', errorHandler(login))

export {authRouter}