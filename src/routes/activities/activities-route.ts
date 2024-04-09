import { Router } from "express";
import { login, register } from "../../controllers/userController";
import { errorHandler } from "../../error-handler";
import { authMiddleware } from "../../middleware/auth-middleware";
import { createActivity, getUserActivities, getUserActivityById, updateUserActivity } from "../../controllers/activityController";


const activitiesRouter = Router()

activitiesRouter.post('/',[authMiddleware], errorHandler(createActivity))
activitiesRouter.get('/',[authMiddleware], errorHandler(getUserActivities))
activitiesRouter.get('/:activityId',[authMiddleware], errorHandler(getUserActivityById))
activitiesRouter.put('/:activityId',[authMiddleware], errorHandler(updateUserActivity))

export {activitiesRouter}