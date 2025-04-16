import {Router} from 'express'
import {authMiddleware} from '../middleware/authMiddleware'
import {one, addXP} from "../controllers/characterController";

const router = Router()

router.get('/', authMiddleware, one)
router.post('/xp', authMiddleware, addXP)

export default router