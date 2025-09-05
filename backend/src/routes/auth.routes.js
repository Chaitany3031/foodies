const express = require('express')
const authController = require('../controllers/auth.controller')

const router = express.Router()

router.post('/user/register',authController.registerController)
router.post('/user/login',authController.loginController)
router.get('/user/logout',authController.logoutController)
router.post('/foodpartner/register',authController.registerFoodPartnerController)
router.post('/foodpartner/login',authController.loginFoodPartnerController)
router.get('/foodpartner/logout',authController.logoutFoodPartnerController)

module.exports = router