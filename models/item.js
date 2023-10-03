const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim : true
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    category: {
        type: Schema.ObjectId,
        ref: 'Category',
        required: true
    },
    price: {
        type: Number,
        required: true,

    },
    qty : {
        type: Number,
        required: true,

    },
    manufacturer: {
        type: String,
        required: true
    }
})

// URL virtual for item
itemSchema
    .virtual('url')
    .get(function () {
        return '/item/' + this._id;
    }
);

// Export model
module.exports = mongoose.model('Item', itemSchema);