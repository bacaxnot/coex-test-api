import { Router } from 'express'
import { getIndex } from '../controllers/index.controller'

const router = Router()

router
    .route('/')
    .get(getIndex)

export default router