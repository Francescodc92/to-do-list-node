import { Router } from "express";
import { authRouter } from "./auth/auth-route";
import { activitiesRouter } from "./activities/activities-route";

const rootRouter = Router()

rootRouter.use('/auth', authRouter)
rootRouter.use('/activities', activitiesRouter)

export {rootRouter}