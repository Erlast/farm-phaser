import {Router} from 'express'
import {authMiddleware} from '../middleware/authMiddleware'
import {seeds} from "../controllers/seedsController";

const router = Router()

router.get('/', authMiddleware, seeds)

export default router