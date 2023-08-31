const {Schema, model } = require('mongoose');

const WonderSchema = new Schema({
    name: String,
    description: String,
    location: String,
    images: {
        type: String,
        default: [
            "https://cdn.mos.cms.futurecdn.net/BiNbcY5fXy9Lra47jqHKGK.jpg"
        ]
    },
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "WorderCities"
        }
    ]
});

module.exports = model("Wonder", WonderSchema);