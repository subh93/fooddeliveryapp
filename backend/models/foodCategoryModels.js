const mongoose = require('mongoose')

const foodCategorySchema = mongoose.Schema({
    CategoryName: { type: String, required:true }
}, { timestamp: true, collection: 'foodcategory' })

module.exports = mongoose.model('foodcategory', foodCategorySchema)