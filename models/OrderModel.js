const mongoose = require('mongoose');
const {objectId} = mongoose.Schema;

const OrderSchema = new mongoose.Schema({
    user: {
        type: objectId,
        ref: 'User',
        required: true
    },
    items: [{
        product: {
            type: objectId,
            ref: 'Product',
            required: true
        },
        quantity: {
            type: Number,
            required: true,
            min: 1
        }
    }],
    totalAmount: {
        type: Number,
        required: true,
        min: 0
    },
    shippingAddress: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        default: 'Pending'
    }
}, {timestamps: true, versionKey: false});

const Order = mongoose.model('Order', OrderSchema);
module.exports = Order;