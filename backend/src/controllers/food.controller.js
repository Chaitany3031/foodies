const foodModel = require('../models/fooditem.model');
const fileUploadService = require('../services/storage.services')
const {v4:uuid} = require('uuid')

async function createFood(req,res) {
    const fileUploadResult = await fileUploadService.uploadFile(req.file.buffer,uuid())
    const foodItem = await foodModel.create({
        name:req.body.name,
        video:fileUploadResult.url,
        description:req.body.description,
        foodPartner:req.foodPartner._id
    })
    res.status(201).json({
        message:"food item created",
        foodItem:foodItem
    })
}

async function getFoodItems(req,res) {
    const foodItems = await foodModel.find({

    })

    res.status(200).json({
        message:"Fetched",
        foodItems
    })
}

module.exports = {createFood,getFoodItems}