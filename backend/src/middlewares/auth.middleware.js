const foodPartnerModel = require('../models/foodpartner.model')
const userModel = require('../models/user.model')
const jwt = require('jsonwebtoken')

async function foodPartner(req,res,next) {
    const token = req.cookies.token
    if(!token){
        res.status(401).json({
            message:"Unauthorised"
        })
    }
    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        const foodPartner = await foodPartnerModel.findById(decoded.id)
        req.foodPartner = foodPartner
        next()
    } catch (error) {
       res.status(401).json({
            message:"Invalid token"
        })
    }
}

async function authMiddleware(req,res,next) {
    const token = req.cookies.token

    if(!token){
        res.status(401).json({
            message:"Unauthorised"
        })
    }
    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        const user = await userModel.findById(decoded.id)
        req.user = user
    } catch (error) {
        res.status(401).json({
            message:"Unvalid token"
        })
    }
    next()
}
module.exports = {
    foodPartner,authMiddleware
}