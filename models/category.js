const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
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
    }
})

// URL virtual for category
categorySchema
    .virtual('url')
    .get(function () {
        return '/categories/' + this._id;
    }
);

// Export model
module.exports = mongoose.model('Category', categorySchema);