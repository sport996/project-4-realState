const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const requestSchema = new Schema({
    name: {type: String, required: true},
    // id: {type: String, required: true},
    mobile: {type: Number, required: true}
})

const apartmentSchema = new Schema({
    owner: {type: Schema.Types.ObjectId, ref: 'User'},
    floor: {type: Number, required: false},
    address: {type: String, required: true},
    price: {type: Number, required: true},
    waterCycles: {type: Number, required: true},
    bedrooms: {type: Number, required: true},
    livingRoom: {type: Boolean, required: true},
    kitchen: {type: Boolean, required: true},
    category: {type: String, required: true},
    cafeteria: {type: Boolean, required: true},
    vacancy: {type: Boolean, required: true},
    image: {type: String, required: false},
    requests: [requestSchema]
}, {timestamps: true});

const Request = mongoose.model('Request', requestSchema);
const Apartment = mongoose.model('Apartment', apartmentSchema);

module.exports = {Apartment, Request};

