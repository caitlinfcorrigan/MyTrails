const mongoose = require('mongoose');
const Schema = mongoose.Schema;

reviewSchema = new Schema({
    rating: {
        type: Number,
        enum: [1, 2, 3, 4, 5]
    },
    reviewText: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    trail: {
        type: Schema.Types.ObjectId,
        ref: 'Trail',
        required: true
    }
},
{
    timestamps: true
})

module.exports = mongoose.model('Review', reviewSchema);