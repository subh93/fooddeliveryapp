const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    name: { type: String, required:true },
    email: { type: String, required:true },
    orderItems: [],
    orderAmount: {type: Number, required: true},
    isDeliverd: {type: Boolean, required: true, default: false},
    transactionid: { type: String, required:true },
    mode_of_payment: { type: String, default: 'cash on delivery' }
},  { timestamp: true, versionKey:false, collection: 'orderlist' })

module.exports = mongoose.model('orderlist', orderSchema)