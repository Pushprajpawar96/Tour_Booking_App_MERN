
import express from 'express'
import { creativeReview } from '../controllers/reviewController.js';
import { verifyUser} from "../utils/verifyToken.js";

const router = express.Router()

router.post('/:tourId', verifyUser ,creativeReview )

export default router