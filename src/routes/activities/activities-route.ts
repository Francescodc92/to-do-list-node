import { Router } from "express";
import { login, register } from "../../controllers/userController";
import { errorHandler } from "../../error-handler";
import { authMiddleware } from "../../middleware/auth-middleware";
import { createActivity } from "../../controllers/activityController";


const activitiesRouter = Router()

activitiesRouter.post('/',[authMiddleware], errorHandler(createActivity))

export {activitiesRouter}