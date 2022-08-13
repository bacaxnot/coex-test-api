import { Router } from 'express'
import { getImage } from '../controllers/images.controller'

const router = Router()

router
    .route('/:productId')
    .get(getImage)

export default router