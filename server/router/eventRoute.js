import { Router } from "express"
const router = Router()

import * as eventController from '../controllers/eventControllers.js'
import verifyToken from "../middleware/authorization.js"


router.route('/createevent').post(verifyToken, eventController.createEvent)
router.route('/getevents').get(eventController.getEvents)


export { router }