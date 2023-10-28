const mongoose = require('mongoose');
const Schema = mongoose.Schema;

reviewSchema = new Schema({
    rating: {
        type: Number,
        enum: [1, 2, 3, 4, 5]
    },
    reviewText: String
},
{
    timestamps: true
})

module.exports = mongoose.model('Review', reviewSchema);