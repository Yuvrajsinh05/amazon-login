const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    phone:Number,
    role:String,
})

mongoose.model('orders',userSchema);
module.exports = mongoose.model('orders')
