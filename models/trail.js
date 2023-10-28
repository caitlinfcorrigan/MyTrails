const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const trailSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    distance: Number,
    streetAddress: String,
    city: String,
    state: {
        type: String,
        enum: ['AL','AK','AZ','AR','AS','CA','CO','CT','DE','DC','FL','GA','GU','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','MP','OH','OK','OR','PA','PR','RI','SC','SD','TN','TX','TT','UT','VT','VA','VI','WA','WV','WI','WY']
    },
    zip: {
        type: Number,
        max: 99999
    },
    reviews: [{
        type: Schema.Types.ObjectId,
        ref: 'Review'
    }]
},
{
    timestamps: true
});

module.exports = mongoose.model('Trail', trailSchema)
