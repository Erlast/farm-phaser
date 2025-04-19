import {Router} from 'express'
import {authMiddleware} from '../middleware/authMiddleware'
import {one, addXP, changeBalance, harvest} from "../controllers/characterController";

const router = Router()

router.get('/', authMiddleware, one)
router.post('/xp', authMiddleware, addXP)
router.post('/change-balance', authMiddleware, changeBalance)
router.post('/harvest', authMiddleware, harvest)

export default router