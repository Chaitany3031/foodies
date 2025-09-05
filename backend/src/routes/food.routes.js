const express = require('express')
const foodController = require('../controllers/food.controller')
const authMiddleware = require('../middlewares/auth.middleware')
const multer = require('multer')

const upload = multer({
    storage:multer.memoryStorage()
})

const router = express.Router()

router.post('/',authMiddleware.foodPartner,upload.single('video'),foodController.createFood)
router.get('/',authMiddleware.authMiddleware,foodController.getFoodItems)

module.exports = router