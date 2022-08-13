import { Router } from 'express'
import { getSales } from '../controllers/sales.controller'

const router = Router()

router
    .route('/')
    .get(getSales)

export default router