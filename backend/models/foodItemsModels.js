const mongoose = require('mongoose')

const foodItemsSchema = mongoose.Schema({
    CategoryName: { type: String, required:true },
    name: { type: String, required:true },
    img: { type: String, required:true },
    options: [],
    description: { type: String, required:true }
}, { timestamp: true, collection: 'fooddata' })

module.exports = mongoose.model('fooddata', foodItemsSchema)