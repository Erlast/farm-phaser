import {Router} from 'express'
import {authMiddleware} from '../middleware/authMiddleware'
import {plot} from "../controllers/plotController";

const router = Router()

router.post('/tilled', authMiddleware, plot)

export default router