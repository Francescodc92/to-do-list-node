import { Router } from "express";
import { authRouter } from "./auth/authRoute";

const rootRouter = Router()

rootRouter.use('/auth', authRouter)

export {rootRouter}