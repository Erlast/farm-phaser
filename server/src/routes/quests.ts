import {Router} from 'express'
import {authMiddleware} from '../middleware/authMiddleware'
import {getAvailable} from "../controllers/questsController";

const router = Router()

router.get('/available', authMiddleware, getAvailable)

export default router