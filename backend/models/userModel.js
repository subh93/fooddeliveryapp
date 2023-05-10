const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: { type: String, required:true },
    email: { type: String, required:true },
    password: { type: String, required:true },
    address: { type: String, required:true }
}, { timestamp: true, versionKey:false, collection: 'dec30users' })

module.exports = mongoose.model('users', userSchema)