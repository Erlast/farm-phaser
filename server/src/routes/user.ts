import {Router} from 'express'
import {authMiddleware} from '../middleware/authMiddleware'
import {me} from "../controllers/accountController";

const router = Router()

router.get('/me', authMiddleware, me)

export default router