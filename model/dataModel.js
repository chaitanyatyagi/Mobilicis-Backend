const mongoose = require("mongoose")
const dataSchema = new mongoose.Schema({
    id: String,
    first_name: String,
    last_name: String,
    email: String,
    gender: String,
    income: Number,
    city: String,
    car: String,
    quote: String,
    phone_price: String
})

const Data = mongoose.model('Data', dataSchema)
module.exports = Data