import {Router} from 'express'
import {authMiddleware} from '../middleware/authMiddleware'
import {getRequirementsByLevel} from "../controllers/levelController";

const router = Router()

router.get('/:id', authMiddleware, getRequirementsByLevel)

export default router